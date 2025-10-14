"use client";

import { TestimonialsColumn } from "@/components/testimonials-columns";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("testimonials");

  const testimonials = [
    { image: null, text: t("t1.text"), name: t("t1.name") },
    { image: null, text: t("t2.text"), name: t("t2.name") },
    {
      image: "/testimonials/nadir-khalfallah.png",
      text: t("t3.text"),
      name: t("t3.name"),
    },
    {
      image: "/testimonials/abderaouf-boudehane.png",
      text: t("t4.text"),
      name: t("t4.name"),
    },
    {
      image: "/testimonials/laura-beauty.png",
      text: t("t5.text"),
      name: t("t5.name"),
    },
    {
      image: "/testimonials/abdelkhalek-beraoud.jpeg",
      text: t("t6.text"),
      name: t("t6.name"),
    },
    { image: null, text: t("t7.text"), name: t("t7.name") },
  ];

  return (
    <section className="bg-background my-20 relative w-full">
      <div className="w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-y-4 w-full text-center"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">{t("label")}</div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
            {t("heading")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("subheading")}</p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn
            testimonials={testimonials.slice(0, 3)}
            duration={15}
          />
          <TestimonialsColumn
            testimonials={testimonials.slice(3, 5)}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={testimonials.slice(5)}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
