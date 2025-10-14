import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <div className="w-full">
      <div className="flex flex-col text-center bg-purple/75 rounded-md p-4 lg:p-14 gap-8 items-center">
        <div>
          <Badge>{t("badge")}</Badge>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-3xl mx-auto text-white">
            {t.rich("heading", {
              span: (chunks) => <span className="text-pink">{chunks}</span>,
            })}
          </h3>

          <p className="text-lg leading-relaxed tracking-tight max-w-2xl mx-auto text-white/75">
            {t("description")}
          </p>
        </div>

        <div className="flex flex-row gap-4 flex-wrap justify-center">
          <Button className="gap-3" variant="outline">
            {t("callNow")} <PhoneCall className="w-4 h-4" />
          </Button>
          <Button className="gap-3">
            {t("requestQuote")} <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
