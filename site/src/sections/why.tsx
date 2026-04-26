import { useLocale } from "@/i18n/use-locale";
import { SectionHead } from "./section-head";

const KEYS = ["why.p1", "why.p2", "why.p3", "why.p4", "why.p5", "why.p6"];

export function Why() {
  const { t } = useLocale();
  return (
    <section
      id="why"
      className="border-t border-border py-[var(--section-gap)]"
    >
      <div className="container-page">
        <SectionHead
          kicker={t("why.kicker")}
          title={t("why.title")}
          sub={t("why.sub")}
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {KEYS.map((k) => (
            <li
              key={k}
              className="relative rounded-sm border border-border bg-card p-4 pl-10 text-foreground"
            >
              <span
                aria-hidden
                className="absolute left-3.5 top-4 inline-flex size-[1.1rem] items-center justify-center rounded-full bg-accent text-accent-foreground text-[0.7rem] font-bold"
              >
                ✕
              </span>
              {t(k)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
