import { useLocale } from "@/i18n/use-locale";
import { SectionHead } from "./section-head";

const STEPS = [
  {
    num: "01",
    name: "gpt-slide-design",
    bodyKey: "workflow.s1.body",
    inKey: "workflow.s1.in",
    out: "DESIGN.md",
  },
  {
    num: "02",
    name: "gpt-slide-plan",
    bodyKey: "workflow.s2.body",
    inKey: "workflow.s2.in",
    out: "slide_plan.json",
  },
  {
    num: "03",
    name: "gpt-slide-prompt",
    bodyKey: "workflow.s3.body",
    inKey: "workflow.s3.in",
    out: "slide_prompts.json",
  },
  {
    num: "04",
    name: "gpt-slide-generate",
    bodyKey: "workflow.s4.body",
    inKey: "workflow.s4.in",
    out: "page_1.png … page_N.png",
  },
] as const;

export function Workflow() {
  const { t } = useLocale();
  return (
    <section
      id="workflow"
      className="border-t border-border py-[var(--section-gap)] bg-muted"
    >
      <div className="container-page">
        <SectionHead kicker={t("workflow.kicker")} title={t("workflow.title")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {STEPS.map((s) => (
            <article
              key={s.num}
              className="flex flex-col gap-3 rounded-md border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] hover:border-outline"
            >
              <header className="flex items-baseline gap-2">
                <span className="font-mono text-xs tracking-[0.1em] text-primary">
                  {s.num}
                </span>
                <h3 className="font-mono text-base font-semibold text-foreground">
                  {s.name}
                </h3>
              </header>
              <p className="text-sm text-muted-foreground m-0">{t(s.bodyKey)}</p>
              <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 border-t border-dashed border-border pt-3 text-sm">
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted-foreground self-center">
                  {t("workflow.in")}
                </dt>
                <dd className="m-0 text-foreground text-sm">{t(s.inKey)}</dd>
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted-foreground self-center">
                  {t("workflow.out")}
                </dt>
                <dd className="m-0 text-foreground">
                  <code className="font-mono text-[0.82rem] rounded-sm border border-border bg-muted px-1 py-0.5">
                    {s.out}
                  </code>
                </dd>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
