export function SeoPricingIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dollar Sign with SEO elements */}
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="currentColor"
        opacity="0.1"
      />
      {/* Dollar Sign */}
      <path
        d="M12 6v2M12 16v2M9 8h6M9 16h6M8 10h8M8 14h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* SEO Chart lines */}
      <path
        d="M6 18l2-2 2 2 4-4 2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      {/* Search magnifying glass */}
      <circle
        cx="17"
        cy="7"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="m19 9 2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
