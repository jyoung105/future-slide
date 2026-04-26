import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useLocale } from "@/i18n/use-locale";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useLocale();
  const label =
    theme === "dark" ? t("a11y.themeToLight") : t("a11y.themeToDark");

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={label}
      title={label}
      onClick={toggle}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
