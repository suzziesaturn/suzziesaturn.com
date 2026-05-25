import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black bg-white">
      <div className="flex h-16 items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-sans text-base font-extrabold uppercase tracking-tight transition-opacity hover:opacity-60 sm:text-lg"
        >
          Suzziesaturn
        </Link>

        <div className="flex items-center gap-4 sm:gap-5">
          {/* Cart — placeholder until cart + checkout ship */}
          <button
            type="button"
            aria-label="Open cart"
            className="transition-opacity hover:opacity-50"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M5 8h14l-1.2 12.5H6.2L5 8Z" strokeLinejoin="round" />
              <path
                d="M8.8 8V6.4a3.2 3.2 0 0 1 6.4 0V8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Mobile menu — placeholder until navigation ships */}
          <button
            type="button"
            aria-label="Open menu"
            className="transition-opacity hover:opacity-50"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="3" y1="15" x2="21" y2="15" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
