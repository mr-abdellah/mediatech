import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import { AppLogo } from "./logo";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");

  const menuItems = [
    { key: "menu.about", href: "#about" },
    { key: "menu.services", href: "#services" },
    { key: "menu.testimonials", href: "#testimonials" },
    { key: "menu.contact", href: "#contact" },
  ];

  const socialButtons = [
    {
      icon: Facebook,
      label: t("social.facebook"),
      href: "https://www.facebook.com/share/15wumULmWM/",
    },
    {
      icon: Instagram,
      label: t("social.instagram"),
      href: "https://www.instagram.com/mediatechdz/",
    },
    {
      icon: () => (
        <Image src="/tiktok.svg" alt="TikTok" className="w-4 h-4 dark:invert" />
      ),
      label: t("social.tiktok"),
      href: "https://www.tiktok.com/@mediatechdz",
    },
  ];

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300 w-full">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative w-full">
            <AppLogo type="white" className="hidden dark:block w-52" />
            <AppLogo type="default" className="dark:hidden w-52" />
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("quickLinks")}</h3>
            <nav className="space-y-2 text-sm">
              {menuItems.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="block transition-colors hover:text-primary"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("contactUs")}</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>
                <a
                  href="https://maps.app.goo.gl/EnkSUQ7ueX6D3E217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Draria, Alger
                </a>
              </p>
              <p>
                <a href="tel:+213798151517" className="hover:underline">
                  0798151517
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@mediatech-dz.com"
                  className="hover:underline"
                >
                  contact@mediatech-dz.com
                </a>
              </p>
            </address>
          </div>

          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">{t("followUs")}</h3>
            <div className="mb-6 flex space-x-4">
              {socialButtons.map((btn, idx) => (
                <TooltipProvider key={idx}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <a
                          href={btn.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <btn.icon className="h-4 w-4" />
                        </a>
                        <span className="sr-only">{btn.label}</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{btn.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
