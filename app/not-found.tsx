import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center px-6">
      <div className="text-center">
        <p className="label">Error 404</p>
        <h1 className="mt-4 font-display text-6xl tracking-tight">
          Nothing <span className="italic text-accent">here</span>.
        </h1>
        <p className="mt-4 text-muted">That page does not exist. Or it did, three versions ago.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[var(--accent-ink)] transition-opacity hover:opacity-90"
        >
          Back to the start
        </Link>
      </div>
    </main>
  );
}
