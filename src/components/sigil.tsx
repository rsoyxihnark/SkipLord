export function Sigil({ className = "size-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="26" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      <circle
        className="sigil-ring"
        cx="32"
        cy="32"
        r="18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="113"
        strokeDashoffset="0"
      />
      <path
        className="sigil-arc"
        d="M32 8 A24 24 0 0 1 56 32"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        style={{ animationDelay: "0ms" }}
      />
      <path
        className="sigil-arc"
        d="M56 32 A24 24 0 0 1 32 56"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        style={{ animationDelay: "80ms" }}
      />
      <path
        className="sigil-arc"
        d="M32 56 A24 24 0 0 1 8 32"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        style={{ animationDelay: "160ms" }}
      />
      <path
        className="sigil-arc"
        d="M8 32 A24 24 0 0 1 32 8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        style={{ animationDelay: "240ms" }}
      />
      <circle cx="32" cy="32" r="3" fill="currentColor" />
    </svg>
  );
}
