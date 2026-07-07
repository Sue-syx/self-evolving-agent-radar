import { categoryById, RadarItem, RadarPage, maturityLabels } from "../data/radarData";

interface RadarChartProps {
  page: RadarPage;
  items: RadarItem[];
  selectedId?: string;
  onSelect: (item: RadarItem) => void;
}

const maturityColor: Record<string, string> = {
  mature: "#2f9e6f",
  growing: "#d1902b",
  exploring: "#cf5f4c",
};

const size = 760;
const center = size / 2;
const maxRadius = 262;
const minRadius = 78;

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

// three maturity bands mapped to radius: exploring (inner) -> growing -> mature (outer)
const scoreToRadius = (score: number) => {
  const clamped = Math.max(0, Math.min(1, score));
  return minRadius + clamped * (maxRadius - minRadius);
};

// Only label the strongest items per sector to keep the field readable;
// the rest stay as clean dots and surface their label on hover / selection.
const LABELS_PER_SECTOR = 3;

export function RadarChart({ page, items, selectedId, onSelect }: RadarChartProps) {
  const sector = (Math.PI * 2) / page.categories.length;

  // Rank within each category so we can show labels only for the top few.
  const rankById = new Map<string, number>();
  page.categories.forEach((category) => {
    items
      .filter((it) => it.category === category.id)
      .sort((a, b) => b.score - a.score)
      .forEach((it, index) => rankById.set(it.id, index));
  });

  // Deterministic angular placement within each sector; radius encodes maturity.
  const placed = items.map((item) => {
    const categoryIndex = page.categories.findIndex((c) => c.id === item.category);
    const h = hash(item.id);
    // spread points across the sector but keep a margin from the borders
    const angleSpread = ((h % 100) / 100 - 0.5) * sector * 0.7;
    const angle = -Math.PI / 2 + categoryIndex * sector + sector / 2 + angleSpread;
    const radius = scoreToRadius(item.score);
    const point = polar(angle, radius);
    // label radiates outward along the point's angle; anchor by horizontal direction
    const dir = Math.cos(angle);
    const labelAnchor: "start" | "end" = dir >= -0.05 ? "start" : "end";
    const showLabel = (rankById.get(item.id) ?? 0) < LABELS_PER_SECTOR;
    return { item, point, angle, radius, labelAnchor, labelY: point.y, showLabel };
  });

  // Vertical de-collision for visible labels only (keep dots on their maturity radius).
  const sorted = [...placed].filter((p) => p.showLabel).sort((a, b) => a.labelY - b.labelY);
  const gap = 14;
  for (let iter = 0; iter < 120; iter++) {
    for (let i = 1; i < sorted.length; i++) {
      const prev = sorted[i - 1];
      const cur = sorted[i];
      const near = Math.abs(cur.point.x - prev.point.x) < 118 && cur.labelAnchor === prev.labelAnchor;
      if (near && cur.labelY - prev.labelY < gap) {
        const shift = (gap - (cur.labelY - prev.labelY)) / 2;
        prev.labelY -= shift;
        cur.labelY += shift;
      }
    }
  }

  const bands = [
    { ratio: minRadius / maxRadius, label: maturityLabels.exploring },
    { ratio: (minRadius + (maxRadius - minRadius) * 0.4) / maxRadius, label: maturityLabels.growing },
    { ratio: 1, label: maturityLabels.mature },
  ];

  return (
    <div className="radar-frame">
      <svg className="radar-svg" viewBox={`0 0 ${size} ${size}`} aria-label={`${page.title} radar`}>
        <defs>
          <radialGradient id="radarFieldGrad">
            <stop offset="0%" stopColor="rgba(20,160,143,0.10)" />
            <stop offset="60%" stopColor="rgba(20,160,143,0.03)" />
            <stop offset="100%" stopColor="rgba(20,160,143,0)" />
          </radialGradient>
        </defs>

        <circle cx={center} cy={center} r={maxRadius} fill="url(#radarFieldGrad)" />

        {/* maturity rings */}
        {bands.map((band, index) => (
          <circle
            key={band.label}
            className={`radar-ring ${index === bands.length - 1 ? "outer" : ""}`}
            cx={center}
            cy={center}
            r={maxRadius * band.ratio}
          />
        ))}

        {/* sector dividers + arc borders + names */}
        {page.categories.map((category, index) => {
          const start = -Math.PI / 2 + index * sector;
          const mid = start + sector / 2;
          const edge = polar(start, maxRadius);
          const label = polar(mid, maxRadius + 34);
          const textAnchor =
            Math.cos(mid) > 0.35 ? "start" : Math.cos(mid) < -0.35 ? "end" : "middle";
          return (
            <g key={category.id}>
              <line className="radar-axis" x1={center} y1={center} x2={edge.x} y2={edge.y} />
              <path
                className="sector-arc"
                d={arcPath(start + 0.015, start + sector - 0.015, maxRadius)}
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

        {/* ring labels (top axis) */}
        {bands.map((band) => (
          <text
            key={band.label}
            className="ring-label"
            x={center + 6}
            y={center - maxRadius * band.ratio + 14}
          >
            {band.label}
          </text>
        ))}

        <circle className="radar-center" cx={center} cy={center} r="3.5" />

        {/* leader lines + labels first so dots render on top */}
        {placed.map(({ item, point, labelAnchor, labelY, showLabel }) => {
          const active = item.id === selectedId;
          if (!showLabel && !active) return null;
          const category = categoryById(page, item.category);
          const color = category?.color ?? "#14a08f";
          const lx = point.x + (labelAnchor === "start" ? 12 : -12);
          return (
            <g key={`lbl-${item.id}`} className={`radar-label ${active ? "is-active" : ""}`}>
              {Math.abs(labelY - point.y) > 2 && (
                <line
                  className="label-leader"
                  x1={point.x}
                  y1={point.y}
                  x2={lx}
                  y2={labelY}
                  stroke={color}
                />
              )}
              <text x={lx} y={labelY + 3.5} textAnchor={labelAnchor}>
                {item.shortTitle}
              </text>
            </g>
          );
        })}

        {placed.map(({ item, point }) => {
          const category = categoryById(page, item.category);
          const catColor = category?.color ?? "#14a08f";
          const fill = maturityColor[item.maturity] ?? catColor;
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
              style={{ "--pt": catColor } as React.CSSProperties}
            >
              <circle className="hit" r={12} fill="transparent" />
              <circle
                className="dot"
                r={active ? 7 : 4.8}
                fill={fill}
                stroke={catColor}
                strokeWidth={active ? 3 : 2}
              />
              <title>{item.title}</title>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
