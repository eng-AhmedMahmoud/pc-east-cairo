export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Property Chance — PC East Cairo"
      className={className}
    >
      <rect x="1" y="1" width="62" height="62" rx="3" fill="#0a0a0a" stroke="currentColor" strokeOpacity="0.18" />
      {/* roofline */}
      <path d="M10 27 32 10l22 17" fill="none" stroke="#e5083a" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
      {/* P */}
      <path
        d="M20 34v20M20 34h7.6a5.2 5.2 0 0 1 0 10.4H20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* C */}
      <path
        d="M45 36.4a8 8 0 1 0 0 15.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="32" cy="10" r="2.4" fill="#e5083a" />
    </svg>
  );
}
