/**
 * Property Chance brand mark — roofline with chimney over a location pin.
 * Traced from the client artwork; viewBox is cropped to the mark itself so it
 * optically fills whatever box it is given.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="263 260 725 754"
      role="img"
      aria-label="Property Chance — PC East Cairo"
      className={className}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="butt" strokeLinejoin="miter">
        <polyline points="290,638 629,304 961,638" strokeWidth="48" />
        <path d="M782 442V378H873V560" strokeWidth="48" />
      </g>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M625 1004 460.5 779.6a204 204 0 1 1 329 0Z M625 531a128 128 0 1 0 0 256 128 128 0 1 0 0-256Z"
      />
    </svg>
  );
}
