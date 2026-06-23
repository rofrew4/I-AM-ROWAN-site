export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[#e8e0d4] pt-8">
      <h2 className="text-sm font-bold tracking-tight text-gray-600">
        Reach out!
      </h2>
      <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600">
        <a href="mailto:rofrew4@gmail.com">rofrew4@gmail.com</a>
        <span className="text-gray-300" aria-hidden="true">
          ·
        </span>
        <a href="tel:+15712633755">571-263-3755</a>
        <span className="text-gray-300" aria-hidden="true">
          ·
        </span>
        <a
          href="https://www.linkedin.com/in/rowan-frew-b50806237/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <span className="text-gray-300" aria-hidden="true">
          ·
        </span>
        <a href="https://dixonfrew.com">dixonfrew.com</a>
      </p>
    </footer>
  );
}
