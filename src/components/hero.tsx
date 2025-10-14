"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  images: string[];
  className?: string;
}

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="mt-8 px-8 py-3 rounded-full bg-pink text-white font-semibold shadow-lg transition-colors hover:bg-pink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
  >
    {children}
  </motion.button>
);

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  images,
  className,
}) => {
  const duplicatedImages = [...images, ...images];

  return (
    <section
      className={cn(
        "relative w-full min-h-screen overflow-hidden bg-background flex flex-col items-center justify-center text-center px-4",
        className
      )}
    >
      <div className="z-10 flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
          className="mb-4 inline-block rounded-full border border-border bg-purple/65 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
        >
          {tagline}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={container}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground"
        >
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <motion.span key={i} variants={fadeIn} className="inline-block">
                  {word}&nbsp;
                </motion.span>
              ))
            : title}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeIn}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          {description}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
          transition={{ delay: 0.5 }}
        >
          <ActionButton>{ctaText}</ActionButton>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-2/5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          className="flex gap-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
              style={{ rotate: `${i % 2 === 0 ? -2 : 4}deg` }}
            >
              <Image
                src={src}
                alt={`showcase-${i}`}
                className="w-full h-full object-cover rounded-2xl shadow-md"
                width={300}
                height={400}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
