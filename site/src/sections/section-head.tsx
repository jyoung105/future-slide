interface SectionHeadProps {
  kicker: string;
  title: string;
  sub?: string;
  className?: string;
}

export function SectionHead({ kicker, title, sub, className }: SectionHeadProps) {
  return (
    <div className={`max-w-[60ch] mb-8 sm:mb-12 ${className ?? ""}`}>
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary mb-2">
        {kicker}
      </p>
      <h2 className="font-serif text-[clamp(1.7rem,3vw,2.4rem)] leading-tight tracking-[-0.02em]">
        {title}
      </h2>
      {sub ? (
        <p className="mt-3 text-muted-foreground text-[clamp(1rem,1.2vw,1.08rem)]">
          {sub}
        </p>
      ) : null}
    </div>
  );
}
