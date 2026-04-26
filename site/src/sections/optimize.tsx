import { useLocale } from "@/i18n/use-locale";
import { SectionHead } from "./section-head";

const KEYS = [
  "opt.l1",
  "opt.l2",
  "opt.l3",
  "opt.l4",
  "opt.l5",
  "opt.l6",
  "opt.l7",
];

export function Optimize() {
  const { t } = useLocale();
  return (
    <section className="border-t border-border py-[var(--section-gap)]">
      <div className="container-page">
        <SectionHead kicker={t("opt.kicker")} title={t("opt.title")} />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {KEYS.map((k) => (
            <li
              key={k}
              className="relative border-l-2 border-primary bg-muted py-3 pl-9 pr-4 text-sm text-foreground"
            >
              <span
                aria-hidden
                className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-primary"
              >
                ✓
              </span>
              {t(k)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
