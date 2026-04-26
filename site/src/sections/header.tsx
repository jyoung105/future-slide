import { ThemeToggle } from "@/components/theme-toggle";
import { LangToggle } from "@/components/lang-toggle";
import { BrandMark } from "@/components/brand-mark";
import { useLocale } from "@/i18n/use-locale";

export function SiteHeader() {
  const { t } = useLocale();
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-[color-mix(in_oklab,var(--background)_88%,transparent)] backdrop-blur-md backdrop-saturate-150">
      <div className="container-page flex items-center justify-between gap-6 py-3.5">
        <a
          href="/"
          aria-label="Future Slide Skill home"
          className="inline-flex items-center gap-2 font-semibold text-foreground"
        >
          <BrandMark />
          <span className="font-serif text-base">Future Slide Skill</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-6 text-sm"
        >
          <a
            href="#workflow"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.workflow")}
          </a>
          <a
            href="#examples"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.examples")}
          </a>
          <a
            href="#install"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.install")}
          </a>
          <a
            href="https://github.com/jyoung105/future-slide-skill"
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub ↗
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
