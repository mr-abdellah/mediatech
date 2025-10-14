"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ContactSection() {
  const t = useTranslations("contact");

  const contactInfo = [
    {
      icon: Phone,
      label: t("contactInfo.phone"),
      value: "0798151517",
      href: "tel:0798151517",
    },
    {
      icon: Mail,
      label: t("contactInfo.email"),
      value: "contact@mediatech-dz.com",
      href: "mailto:contact@mediatech-dz.com",
    },
    {
      icon: MapPin,
      label: t("contactInfo.address"),
      value: "Draria, Alger, Algérie",
      href: "https://maps.app.goo.gl/EnkSUQ7ueX6D3E217",
    },
  ];

  const ContactInfoCard = ({
    icon: Icon,
    label,
    value,
    href,
  }: (typeof contactInfo)[0]) => (
    <a
      href={href}
      className="group flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
          {label}
        </p>
        <p className="text-sm text-foreground font-medium break-words">
          {value}
        </p>
      </div>
      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" />
    </a>
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="w-full relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 space-y-8 max-w-xl"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium"
            >
              <Mail className="w-4 h-4" /> {t("label")}
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              {t("heading")}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {t("description")}
            </motion.p>

            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <ContactInfoCard key={i} {...info} />
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-border/50"
            >
              <p className="text-sm text-muted-foreground">
                {t("openingHours")}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {t("responseTime")}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex-1 w-full max-w-xl"
          >
            <Card className="shadow-2xl border-border/50 overflow-hidden">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {t("form.heading")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("form.subheading")}
                  </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t("form.name")}{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="Ex: Ahmed Benali"
                      required
                      className="h-11 focus-visible:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t("form.email")}{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="votre@email.com"
                      type="email"
                      required
                      className="h-11 focus-visible:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t("form.phone")}
                    </label>
                    <Input
                      placeholder="+213 555 123 456"
                      type="tel"
                      className="h-11 focus-visible:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t("form.subject")}{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="Demande de devis, collaboration..."
                      required
                      className="h-11 focus-visible:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t("form.message")}{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      placeholder="Décrivez votre projet ou votre demande..."
                      rows={6}
                      required
                      className="resize-none focus-visible:ring-primary"
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full h-12 text-base font-medium group"
                      size="lg"
                    >
                      <span>{t("form.submit")}</span>
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      {t("form.privacy")}
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
