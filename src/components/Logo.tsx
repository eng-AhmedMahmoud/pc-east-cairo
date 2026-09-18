export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Property Chance — PC East Cairo"
      className={className}
    >
      <rect width="64" height="64" rx="10" fill="#0a0a0a" />
      <rect
        x="0.75"
        y="0.75"
        width="62.5"
        height="62.5"
        rx="9.25"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.16"
        strokeWidth="1.5"
      />
      <path
        d="M12 27.5 32 11l20 16.5"
        fill="none"
        stroke="#e5083a"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M17.5 36v17M17.5 36h6.6a4.6 4.6 0 0 1 0 9.2h-6.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.8 38.4a7.4 7.4 0 1 0 0 12.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
