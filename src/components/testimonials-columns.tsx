"use client";
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { StaticImageData } from "next/image";

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  testimonials: {
    text: string;
    image?: string | StaticImageData | null;
    name: string;
  }[];
  duration?: number;
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ y: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name }, i) => (
                <div
                  key={i}
                  className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                >
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Avatar>
                      <AvatarImage src={image || undefined} alt={name} />
                      <AvatarFallback>
                        {name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">
                        {name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
      </motion.div>
    </div>
  );
};
