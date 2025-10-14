"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const t = useTranslations("languages");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [current, setCurrent] = useState(locale);

  const changeLang = (lng: string) => {
    setCurrent(lng);
    router.push(pathname, { locale: lng });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 h-7 px-2">
          <Globe className="w-4 h-4" />
          {t(current)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLang("fr")}>
          {t("fr")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLang("ar")}>
          {t("ar")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
