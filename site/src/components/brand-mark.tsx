export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`grid grid-cols-2 gap-[2px] size-[18px] ${className}`}
    >
      <span className="bg-foreground rounded-[1px]" />
      <span className="bg-primary rounded-[1px]" />
      <span className="bg-neutral-400 rounded-[1px]" />
      <span className="bg-foreground rounded-[1px]" />
    </span>
  );
}
