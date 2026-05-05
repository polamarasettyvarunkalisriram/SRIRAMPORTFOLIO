type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
};

const SectionTitle = ({ eyebrow, title, highlight, description }: Props) => {
  return (
    <div className="mb-14 max-w-3xl">
      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[hsl(var(--violet))] mb-4">
        <span className="w-6 h-px bg-[hsl(var(--violet))]" />
        {eyebrow}
      </div>
      <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
        {title}{" "}
        {highlight && <span className="italic text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
