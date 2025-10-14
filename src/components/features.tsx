"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Sparkles,
  BookOpen,
  MonitorSmartphone,
  Megaphone,
  LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
      rotate: {
        duration: 0.5,
      },
    },
  },
  tap: { scale: 0.95 },
};

type FeatureVisualType =
  | "speed"
  | "trust"
  | "quality"
  | "print"
  | "dev"
  | "marketing";

interface Feature {
  icon: LucideIcon;
  title: string;
  label: string;
  description: string;
  visual: FeatureVisualType;
}

const CardDecorator = () => (
  <>
    <span className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-primary/40"></span>
    <span className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-primary/40"></span>
    <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-primary/40"></span>
    <span className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-primary/40"></span>
  </>
);

const SpeedVisual = () => (
  <div className="relative h-full flex items-center justify-center p-6">
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <div className="relative w-full space-y-2">
      {[100, 70, 90].map((width, i) => (
        <motion.div
          key={i}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: `${width}%`, opacity: 1 }}
          viewport={{ once: true }}
          animate={{
            scaleX: [1, 1.02, 1],
          }}
          transition={{
            delay: i * 0.15,
            duration: 0.8,
            ease: "easeOut",
            scaleX: {
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            },
          }}
          className="h-2 bg-gradient-to-r from-primary to-primary/60 dark:from-primary/80 dark:to-primary/40 rounded-full origin-left"
        />
      ))}
    </div>
  </div>
);

const TrustVisual = () => (
  <div className="relative h-full flex items-center justify-center p-6">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10" />
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-20 h-20 rounded-full border-2 border-primary/30 dark:border-primary/40 flex items-center justify-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 rounded-full border-2 border-dashed border-primary/20 dark:border-primary/30 flex items-center justify-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Shield className="w-8 h-8 text-primary/70 dark:text-primary/80" />
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
);

const QualityVisual = () => (
  <div className="relative h-full flex items-center justify-center p-6">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10" />
    <div className="relative grid grid-cols-3 gap-2">
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.2,
            rotate: 180,
            transition: { duration: 0.3 },
          }}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            delay: i * 0.05,
            duration: 0.4,
            ease: "backOut",
            y: {
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            },
          }}
          className="w-4 h-4 rounded border border-primary/30 dark:border-primary/40 bg-primary/5 dark:bg-primary/10 cursor-pointer"
        />
      ))}
    </div>
  </div>
);

const PrintVisual = () => (
  <div className="relative h-full flex items-center justify-center p-6">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10" />
    <motion.div
      className="relative w-24 h-28 border-2 border-primary/20 dark:border-primary/30 rounded-sm bg-background shadow-sm"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="p-3 space-y-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              delay: i * 0.1,
              duration: 0.4,
              opacity: {
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              },
            }}
            className="h-1 bg-primary/20 dark:bg-primary/30 rounded-full"
          />
        ))}
      </div>
      <motion.div
        className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <BookOpen className="w-3 h-3 text-primary/70 dark:text-primary/80" />
      </motion.div>
    </motion.div>
  </div>
);

const DevVisual = () => (
  <div className="relative h-full flex items-center justify-center p-6">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10" />
    <div className="relative">
      <motion.div
        className="w-28 h-20 border-2 border-primary/20 dark:border-primary/30 rounded-md overflow-hidden shadow-sm"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      >
        <motion.div
          className="h-6 bg-primary/10 dark:bg-primary/20 border-b border-primary/20 dark:border-primary/30 flex items-center gap-1 px-2"
          transition={{ duration: 2, repeat: Infinity }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-primary/30 dark:bg-primary/50"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
        <div className="p-2 space-y-1.5 bg-background">
          {[0.75, 1, 0.67].map((width, i) => (
            <motion.div
              key={i}
              className="h-1 bg-primary/20 dark:bg-primary/30 rounded"
              style={{ width: `${width * 100}%` }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute -bottom-2 -right-2 w-8 h-12 border-2 border-primary/20 dark:border-primary/30 rounded-sm bg-background shadow-sm"
      >
        <div className="w-full h-2 bg-primary/10 dark:bg-primary/20 border-b border-primary/20 dark:border-primary/30" />
      </motion.div>
    </div>
  </div>
);

const MarketingVisual = () => (
  <div className="relative h-full flex items-center justify-center p-6">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10" />
    <div className="relative flex items-end gap-1.5 h-16">
      {[3, 6, 4, 7, 5].map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: `${height * 8}px`, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{
            height: `${height * 8 + 8}px`,
            backgroundColor: "hsl(var(--primary) / 0.5)",
            transition: { duration: 0.2 },
          }}
          animate={{
            height: [
              `${height * 8}px`,
              `${height * 8 + 4}px`,
              `${height * 8}px`,
            ],
          }}
          transition={{
            delay: i * 0.1,
            duration: 0.5,
            height: {
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            },
          }}
          className="w-3 bg-primary/30 dark:bg-primary/40 rounded-t cursor-pointer"
        />
      ))}
    </div>
  </div>
);

const getVisual = (type: FeatureVisualType) => {
  switch (type) {
    case "speed":
      return <SpeedVisual />;
    case "trust":
      return <TrustVisual />;
    case "quality":
      return <QualityVisual />;
    case "print":
      return <PrintVisual />;
    case "dev":
      return <DevVisual />;
    case "marketing":
      return <MarketingVisual />;
  }
};

const FeatureCard = ({ feature }: { feature: Feature }) => (
  <motion.div variants={cardVariants} className="group relative">
    <Card className="relative h-full overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg hover:border-primary/30">
      <CardDecorator />
      <CardHeader className="relative z-10 pb-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <feature.icon className="w-4 h-4 text-pink" />
          </motion.div>
          <span className="uppercase tracking-wider font-medium text-pink">
            {feature.label}
          </span>
        </div>
        <h3 className="text-xl font-semibold tracking-tight mb-2">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>
      </CardHeader>
      <CardContent className="relative z-10 pt-0">
        <div className="relative overflow-hidden rounded-lg border border-border/50 bg-muted/30 h-32">
          {getVisual(feature.visual)}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export function FeaturesSection() {
  const t = useTranslations("services");

  const features: Feature[] = [
    { icon: Zap, visual: "speed" as FeatureVisualType },
    { icon: Shield, visual: "trust" as FeatureVisualType },
    { icon: Sparkles, visual: "quality" as FeatureVisualType },
    { icon: BookOpen, visual: "print" as FeatureVisualType },
    { icon: MonitorSmartphone, visual: "dev" as FeatureVisualType },
    { icon: Megaphone, visual: "marketing" as FeatureVisualType },
  ].map((item, i) => ({
    ...item,
    title: t(`features.${i}.title`),
    label: t(`features.${i}.label`),
    description: t(`features.${i}.description`),
  }));

  return (
    <section className="w-full bg-background py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-4">
            {t("heading")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("subheading")}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
