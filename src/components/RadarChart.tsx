import { categoryById, maturityLabels, RadarItem, RadarPage } from "../data/radarData";

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

  return (
    <div className="radar-frame">
      <svg className="radar-svg" viewBox={`0 0 ${size} ${size}`} aria-label={`${page.title} radar`}>
        <defs>
          <filter id="pointShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.18" />
          </filter>
        </defs>

        {[0.34, 0.67, 1].map((ratio, index) => (
          <circle key={ratio} className="radar-ring" cx={center} cy={center} r={maxRadius * ratio} />
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

        <text className="ring-label" x={center + 8} y={center - maxRadius * 0.34 + 17}>
          内圈：{maturityLabels.exploring}
        </text>
        <text className="ring-label" x={center + 8} y={center - maxRadius * 0.67 + 17}>
          中圈：{maturityLabels.growing}
        </text>
        <text className="ring-label" x={center + 8} y={center - maxRadius + 17}>
          外圈：{maturityLabels.mature}
        </text>

        <circle className="radar-center" cx={center} cy={center} r="5" />

        {items.map((item) => {
          const categoryIndex = page.categories.findIndex((category) => category.id === item.category);
          const h = hash(item.id);
          const angleOffset = ((h % 100) / 100 - 0.5) * sector * 0.58;
          const radiusOffset = (((h * 7) % 100) / 100 - 0.5) * 20;
          const angle = -Math.PI / 2 + categoryIndex * sector + sector / 2 + angleOffset;
          const radius = Math.max(62, Math.min(maxRadius - 16, item.score * maxRadius + radiusOffset));
          const point = polar(angle, radius);
          const category = categoryById(page, item.category);
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
            >
              <circle r={active ? 10 : 7} fill={category?.color ?? "#0f766e"} />
              <text x="12" y="-10">
                {item.shortTitle}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
