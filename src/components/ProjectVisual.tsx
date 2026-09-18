export function ProjectVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 760" role="img" aria-label="رسم توضيحي لمشروع كوين فالي السكني" className={className}>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#17171b" />
          <stop offset="100%" stopColor="#0b0b0d" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.015" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b50128" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#b50128" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="640" height="760" fill="url(#sky)" />
      <circle cx="470" cy="170" r="180" fill="#b50128" opacity="0.08" />

      {/* skyline */}
      <g stroke="rgba(255,255,255,0.14)" fill="url(#glass)">
        <rect x="58" y="300" width="132" height="330" />
        <rect x="206" y="228" width="168" height="402" />
        <rect x="390" y="352" width="118" height="278" />
        <rect x="524" y="404" width="72" height="226" />
      </g>

      {/* window grid */}
      <g fill="rgba(255,255,255,0.08)">
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 4 }).map((__, col) => (
            <rect
              key={`a-${row}-${col}`}
              x={222 + col * 38}
              y={252 + row * 40}
              width="22"
              height="22"
              opacity={(row * 4 + col) % 5 === 0 ? 0.5 : 0.16}
            />
          )),
        )}
        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 3 }).map((__, col) => (
            <rect
              key={`b-${row}-${col}`}
              x={74 + col * 38}
              y={326 + row * 40}
              width="22"
              height="22"
              opacity={(row * 3 + col) % 4 === 0 ? 0.42 : 0.14}
            />
          )),
        )}
      </g>

      {/* accent roofline echoing the brand mark */}
      <path d="M206 228 290 156l84 72" fill="none" stroke="#b50128" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="290" cy="156" r="4" fill="#b50128" />

      {/* ground plane + greenery */}
      <rect x="0" y="630" width="640" height="130" fill="url(#ground)" />
      <line x1="0" y1="630" x2="640" y2="630" stroke="rgba(255,255,255,0.16)" />
      <g stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none">
        <path d="M96 630v-34M96 610l-14-12M96 604l14-12" />
        <path d="M432 630v-30M432 612l-12-11M432 606l12-10" />
        <path d="M560 630v-26M560 614l-10-9" />
      </g>
      <line x1="0" y1="688" x2="640" y2="688" stroke="rgba(255,255,255,0.07)" strokeDasharray="14 12" />
    </svg>
  );
}
