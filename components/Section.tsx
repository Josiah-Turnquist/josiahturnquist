/** Shared section shell: numbered eyebrow, heading, optional lede. */
export function Section({
  id,
  index,
  eyebrow,
  title,
  lede,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32">
      <header className="mb-14 border-t border-line pt-6">
        <p className="label flex items-center gap-3">
          <span className="text-accent">{index}</span>
          {eyebrow}
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] tracking-tight">
          {title}
        </h2>
        {lede ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p> : null}
      </header>
      {children}
    </section>
  );
}
