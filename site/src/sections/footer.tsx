import { BrandMark } from "@/components/brand-mark";
import { useLocale } from "@/i18n/use-locale";

export function SiteFooter() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-border bg-background py-8 text-sm">
      <div className="container-page flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 text-foreground font-medium">
          <BrandMark />
          <span>Future Slide Skill</span>
        </div>
        <p className="m-0 inline-flex flex-wrap items-center gap-1.5 text-muted-foreground">
          <span>{t("footer.license")}</span>
          <span aria-hidden className="text-outline">·</span>
          <span>{t("footer.builtBy")}</span>
          <a
            href="https://tonylee.im"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline"
          >
            tonylee.im
          </a>
          <span aria-hidden className="text-outline">·</span>
          <a
            href="https://github.com/jyoung105/future-slide-skill"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
