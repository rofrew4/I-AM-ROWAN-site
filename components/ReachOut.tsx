export function ReachOut({ embedded = false }: { embedded?: boolean }) {
  const content = (
    <>
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
      </p>
    </>
  );

  if (embedded) {
    return <div className="mt-[6.5rem]">{content}</div>;
  }

  return <section className="py-4">{content}</section>;
}
