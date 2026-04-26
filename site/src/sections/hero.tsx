import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "@/i18n/use-locale";

const FLOW = [
  { num: "01", name: "gpt-slide-design", outKey: "flow.outDesign" },
  { num: "02", name: "gpt-slide-plan", outKey: "flow.outPlan" },
  { num: "03", name: "gpt-slide-prompt", outKey: "flow.outPrompt" },
  { num: "04", name: "gpt-slide-generate", outKey: "flow.outGenerate" },
] as const;

export function Hero() {
  const { t } = useLocale();
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-20 pb-[var(--hero-padding)]">
      <div
        aria-hidden
        className="hero-grid absolute inset-0 pointer-events-none"
      />
      <div className="container-page relative">
        <Badge variant="accent" className="font-medium">
          <span
            className="size-1.5 rounded-full bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_24%,transparent)]"
            aria-hidden
          />
          {t("hero.eyebrow")}
        </Badge>

        <h1 className="mt-6 font-serif text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.04] font-medium tracking-[-0.025em] max-w-[22ch]">
          <span className="block">{t("hero.titleA")}</span>
          <span className="block italic text-muted-foreground">
            {t("hero.titleB")}
          </span>
        </h1>

        <p className="mt-6 max-w-[60ch] text-[clamp(1.02rem,1.4vw,1.18rem)] text-muted-foreground">
          {t("hero.lede")}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#install">{t("hero.ctaInstall")}</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#workflow">
              {t("hero.ctaWorkflow")}
              <ArrowRight />
            </a>
          </Button>
        </div>

        <div
          role="img"
          aria-label="Four-stage slide workflow"
          className="mt-10 sm:mt-14"
        >
          <div className="flex flex-wrap items-stretch gap-2 rounded-md border border-border bg-card p-4 shadow-[var(--shadow-md)]">
            {FLOW.map((step, idx) => (
              <div key={step.num} className="contents">
                <div
                  className={`flex flex-1 min-w-[180px] flex-col gap-1.5 rounded-sm border border-border p-4 ${
                    idx === FLOW.length - 1
                      ? "bg-accent border-[color-mix(in_oklab,var(--accent-foreground)_18%,transparent)]"
                      : "bg-muted"
                  }`}
                >
                  <span
                    className={`font-mono text-[0.72rem] tracking-[0.08em] ${
                      idx === FLOW.length - 1
                        ? "text-accent-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.num}
                  </span>
                  <span
                    className={`font-mono text-sm font-semibold ${
                      idx === FLOW.length - 1
                        ? "text-accent-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {step.name}
                  </span>
                  <span
                    className={`text-xs ${
                      idx === FLOW.length - 1
                        ? "text-accent-foreground/75"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t(step.outKey)}
                  </span>
                </div>
                {idx < FLOW.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden md:inline-flex items-center text-outline px-1 text-xl"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
