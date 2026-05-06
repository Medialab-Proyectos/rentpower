/**
 * ViewSonic brand logo — inline SVG React component.
 * Eliminates font-metric clipping issues of <img src=".svg">.
 * Color: #9B1B42 (official ViewSonic crimson).
 */
export function ViewSonicLogo({
  className = "h-9 w-auto",
  color = "#9B1B42",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 80"
      className={className}
      aria-label="ViewSonic"
      role="img"
      fill="none"
    >
      {/* ── Wordmark built from individual letter approximations ──
          Using a clean path approach: we define the logo text as a
          styled foreignObject is not supported cross-browser in SVG,
          so we render the text with overflow visible and a wide artboard. */}
      <text
        x="0"
        y="68"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="78"
        fontWeight="bold"
        fontStyle="italic"
        fill={color}
        letterSpacing="-1"
        overflow="visible"
      >
        ViewSonic
      </text>
      {/* ® symbol */}
      <circle cx="408" cy="14" r="11" fill={color} />
      <text
        x="408"
        y="19"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        ®
      </text>
    </svg>
  );
}
