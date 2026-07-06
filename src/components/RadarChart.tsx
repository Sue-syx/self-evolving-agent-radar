import { categoryById, RadarItem, RadarPage, maturityLabels } from "../data/radarData";

interface RadarChartProps {
  page: RadarPage;
  items: RadarItem[];
  selectedId?: string;
  onSelect: (item: RadarItem) => void;
}

const size = 760;
const center = size / 2;
const maxRadius = 292;

const hash = (value: string) =>
  [...value].reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) % 997, 17);

const polar = (angle: number, radius: number) => ({
  x: center + Math.cos(angle) * radius,
  y: center + Math.sin(angle) * radius,
});

const arcPath = (start: number, end: number, radius: number) => {
  const first = polar(start, radius);
  const last = polar(end, radius);
  const large = end - start > Math.PI ? 1 : 0;
  return `M ${first.x} ${first.y} A ${radius} ${radius} 0 ${large} 1 ${last.x} ${last.y}`;
};

export function RadarChart({ page, items, selectedId, onSelect }: RadarChartProps) {
  const sector = (Math.PI * 2) / page.categories.length;

  // Deterministic layout, then de-overlap by nudging points that land too close.
  const placed = items.map((item) => {
    const categoryIndex = page.categories.findIndex((c) => c.id === item.category);
    const h = hash(item.id);
    const angleOffset = ((h % 100) / 100 - 0.5) * sector * 0.62;
    const radiusOffset = (((h * 7) % 100) / 100 - 0.5) * 22;
    const angle = -Math.PI / 2 + categoryIndex * sector + sector / 2 + angleOffset;
    const radius = Math.max(66, Math.min(maxRadius - 18, item.score * maxRadius + radiusOffset));
    let point = polar(angle, radius);
    return { item, point, angle, radius };
  });

  // simple relaxation to reduce label/dot overlap
  for (let iter = 0; iter < 40; iter++) {
    for (let i = 0; i < placed.length; i++) {
      for (let j = i + 1; j < placed.length; j++) {
        const a = placed[i].point;
        const b = placed[j].point;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 0.01;
        const min = 20;
        if (dist < min) {
          const push = (min - dist) / 2;
          const ux = dx / dist;
          const uy = dy / dist;
          a.x -= ux * push;
          a.y -= uy * push;
          b.x += ux * push;
          b.y += uy * push;
        }
      }
    }
  }

  return (
    <div className="radar-frame">
      <svg className="radar-svg" viewBox={`0 0 ${size} ${size}`} aria-label={`${page.title} radar`}>
        <defs>
          <radialGradient id="sweepGrad">
            <stop offset="0%" stopColor="rgba(47,210,192,0.28)" />
            <stop offset="70%" stopColor="rgba(47,210,192,0)" />
          </radialGradient>
        </defs>

        {/* rotating sweep */}
        <g className="radar-sweep">
          <path
            d={`M ${center} ${center} L ${center} ${center - maxRadius} A ${maxRadius} ${maxRadius} 0 0 1 ${
              polar(-Math.PI / 2 + 0.9, maxRadius).x
            } ${polar(-Math.PI / 2 + 0.9, maxRadius).y} Z`}
            fill="url(#sweepGrad)"
          />
        </g>

        {[0.34, 0.67, 1].map((ratio, index) => (
          <circle
            key={ratio}
            className={`radar-ring ${index === 2 ? "outer" : ""}`}
            cx={center}
            cy={center}
            r={maxRadius * ratio}
          />
        ))}

        {page.categories.map((category, index) => {
          const start = -Math.PI / 2 + index * sector;
          const mid = start + sector / 2;
          const edge = polar(start, maxRadius);
          const label = polar(mid, maxRadius + 42);
          const textAnchor = Math.cos(mid) > 0.35 ? "start" : Math.cos(mid) < -0.35 ? "end" : "middle";
          return (
            <g key={category.id}>
              <line className="radar-axis" x1={center} y1={center} x2={edge.x} y2={edge.y} />
              <path
                className="sector-arc"
                d={arcPath(start + 0.01, start + sector - 0.01, maxRadius + 14)}
                stroke={category.color}
                style={{ color: category.color }}
              />
              <text
                className="sector-name"
                x={label.x}
                y={label.y}
                textAnchor={textAnchor}
                fill={category.color}
              >
                {category.name}
              </text>
            </g>
          );
        })}

        <text className="ring-label" x={center + 8} y={center - maxRadius * 0.34 + 15}>
          {maturityLabels.exploring}
        </text>
        <text className="ring-label" x={center + 8} y={center - maxRadius * 0.67 + 15}>
          {maturityLabels.growing}
        </text>
        <text className="ring-label" x={center + 8} y={center - maxRadius + 15}>
          {maturityLabels.mature}
        </text>

        <circle className="radar-center" cx={center} cy={center} r="4.5" />

        {placed.map(({ item, point }) => {
          const category = categoryById(page, item.category);
          const color = category?.color ?? "#2fd2c0";
          const active = item.id === selectedId;
          return (
            <g
              key={item.id}
              className={`radar-point ${active ? "is-active" : ""}`}
              role="button"
              tabIndex={0}
              transform={`translate(${point.x} ${point.y})`}
              onClick={() => onSelect(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") onSelect(item);
              }}
              aria-label={item.title}
              style={{ "--pt": color } as React.CSSProperties}
            >
              <circle className="halo" r={14} fill={color} />
              <circle className="dot" r={active ? 8.5 : 5.5} fill={color} />
              <text x="11" y="-9">{item.shortTitle}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
