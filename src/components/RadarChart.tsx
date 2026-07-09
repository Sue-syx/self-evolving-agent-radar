import { categoryById, RadarItem, RadarPage, maturityLabels } from "../data/radarData";

interface RadarChartProps {
  page: RadarPage;
  items: RadarItem[];
  selectedId?: string;
  activeCategory?: string;
  compact?: boolean;
  onHover?: (id: string | undefined) => void;
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

export function RadarChart({ page, items, selectedId, activeCategory, compact = false, onHover, onSelect }: RadarChartProps) {
  const sector = (Math.PI * 2) / page.categories.length;
  const gradId = `radarFieldGrad-${page.key}-${compact ? "compact" : "full"}`;

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
  const selected = selectedId ? placed.find((entry) => entry.item.id === selectedId) : undefined;
  const selectedCategory = selected ? categoryById(page, selected.item.category) : undefined;
  const tooltipX = selected
    ? Math.max(120, Math.min(size - 120, selected.point.x + (selected.point.x > center ? -116 : 116)))
    : 0;
  const tooltipY = selected ? Math.max(76, Math.min(size - 80, selected.point.y - 38)) : 0;
  const tooltipAnchor = selected && selected.point.x > center ? "end" : "start";

  return (
    <div className={`radar-frame ${compact ? "is-compact" : ""}`}>
      <svg className="radar-svg" viewBox={`0 0 ${size} ${size}`} aria-label={`${page.title} radar`}>
        <defs>
          <radialGradient id={gradId}>
            <stop offset="0%" stopColor="rgba(20,160,143,0.10)" />
            <stop offset="60%" stopColor="rgba(20,160,143,0.03)" />
            <stop offset="100%" stopColor="rgba(20,160,143,0)" />
          </radialGradient>
        </defs>

        <circle cx={center} cy={center} r={maxRadius} fill={`url(#${gradId})`} />
        <g className="radar-sweep-arm" aria-hidden="true">
          <path
            d={`M ${center} ${center} L ${center + 14} ${center - maxRadius + 18} L ${center - 5} ${
              center - maxRadius + 4
            } Z`}
          />
          <line x1={center} y1={center} x2={center} y2={center - maxRadius + 8} />
        </g>

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
            <g
              key={category.id}
              className={`radar-sector ${activeCategory === category.id ? "is-active" : ""} ${
                activeCategory && activeCategory !== category.id ? "is-muted" : ""
              }`}
            >
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
            <g
              key={`lbl-${item.id}`}
              className={`radar-label ${active ? "is-active" : ""} ${
                activeCategory && activeCategory !== item.category ? "is-muted" : ""
              }`}
            >
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

        {placed.map(({ item, point }, index) => {
          const category = categoryById(page, item.category);
          const catColor = category?.color ?? "#14a08f";
          const fill = maturityColor[item.maturity] ?? catColor;
          const active = item.id === selectedId;
          const muted = Boolean(activeCategory && activeCategory !== item.category);
          return (
            <g
              key={item.id}
              className={`radar-point ${active ? "is-active" : ""} ${muted ? "is-muted" : ""}`}
              role="button"
              tabIndex={0}
              transform={`translate(${point.x} ${point.y})`}
              onClick={() => onSelect(item)}
              onMouseEnter={() => onHover?.(item.id)}
              onMouseLeave={() => onHover?.(undefined)}
              onFocus={() => onHover?.(item.id)}
              onBlur={() => onHover?.(undefined)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") onSelect(item);
              }}
              aria-label={item.title}
              style={{ "--pt": catColor, "--i": index } as React.CSSProperties}
            >
              <circle className="hit" r={12} fill="transparent" />
              <circle className="selection-ring" r={active ? 11 : 0} fill="none" stroke={catColor} />
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

        {selected && (
          <g
            className="radar-tooltip"
            transform={`translate(${tooltipX} ${tooltipY})`}
            pointerEvents="none"
            textAnchor={tooltipAnchor}
          >
            <rect
              x={tooltipAnchor === "end" ? -228 : 0}
              y="-44"
              width="228"
              height="88"
              rx="12"
              fill="rgba(255, 254, 251, 0.96)"
              stroke={selectedCategory?.color ?? "#14a08f"}
            />
            <text className="rt-kicker" x={tooltipAnchor === "end" ? -14 : 14} y="-18">
              {selectedCategory?.name} · {maturityLabels[selected.item.maturity]}
            </text>
            <text className="rt-title" x={tooltipAnchor === "end" ? -14 : 14} y="4">
              {selected.item.shortTitle}
            </text>
            <text className="rt-meta" x={tooltipAnchor === "end" ? -14 : 14} y="27">
              {selected.item.year} · score {selected.item.score.toFixed(2)} · evo{" "}
              {selected.item.scores.selfEvolution.toFixed(2)}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
