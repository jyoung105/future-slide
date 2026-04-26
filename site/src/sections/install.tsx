import { useLocale } from "@/i18n/use-locale";
import { SectionHead } from "./section-head";
import { CodeBlock, ShellPrompt } from "./codeblock";

export function Install() {
  const { t } = useLocale();
  return (
    <section
      id="install"
      className="border-t border-border bg-muted py-[var(--section-gap)]"
    >
      <div className="container-page">
        <SectionHead
          kicker={t("install.kicker")}
          title={t("install.title")}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-serif text-xl m-0">{t("install.cliTitle")}</h3>
            <p className="text-muted-foreground m-0">{t("install.cliBody")}</p>
            <CodeBlock title="terminal">
              <ShellPrompt />
              npx skills add jyoung105/future-slide-skill
            </CodeBlock>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl m-0">{t("install.manualTitle")}</h3>
            <p className="text-muted-foreground m-0">
              {t("install.manualBody")}
            </p>
            <CodeBlock title="terminal">
              <ShellPrompt />
              mkdir -p ~/.codex/skills{"\n"}
              <ShellPrompt />
              cp -R skills/gpt-slide-design ~/.codex/skills/{"\n"}
              <ShellPrompt />
              cp -R skills/gpt-slide-plan ~/.codex/skills/{"\n"}
              <ShellPrompt />
              cp -R skills/gpt-slide-prompt ~/.codex/skills/{"\n"}
              <ShellPrompt />
              cp -R skills/gpt-slide-generate ~/.codex/skills/
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
