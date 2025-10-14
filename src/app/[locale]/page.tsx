import { ContactSection } from "@/components/contact";
import CTA from "@/components/cta";
import { FeaturesSection } from "@/components/features";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { AnimatedMarqueeHero } from "@/components/hero";
import Testimonials from "@/components/testimonials";
import { useTranslations } from "next-intl";

const DEMO_IMAGES = [
  "/results/1.jpg",
  "/results/2.jpg",
  "/results/3.jpg",
  "/results/4.jpg",
  "/results/5.jpg",
  "/results/6.jpg",
  "/results/7.jpg",
  "/results/8.jpg",
  "/results/9.jpg",
  "/results/10.jpg",
  "/results/11.jpg",
  "/results/12.jpg",
  "/results/14.JPG",
  "/results/15.jpg",
];

export default function Home() {
  const t = useTranslations();
  return (
    <div className="w-full min-h-screen flex flex-col items-center container mx-auto p-6 max-w-7xl gap-y-16">
      <Header />

      <AnimatedMarqueeHero
        tagline={t("hero.tagline")}
        title={
          <>
            {t("hero.title").split(" ").slice(0, 2).join(" ")} <br />
            {t("hero.title").split(" ").slice(2).join(" ")}
          </>
        }
        description={t("hero.description")}
        ctaText={t("hero.cta")}
        images={DEMO_IMAGES}
        className="min-h-[calc(100vh-200px)]"
      />

      <FeaturesSection />
      <Testimonials />
      <CTA />
      <ContactSection />
      <Footer />
    </div>
  );
}
