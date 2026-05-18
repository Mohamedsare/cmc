"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({
  label,
  title,
  description,
  backgroundImage,
  backgroundImageAlt = "",
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 text-white sm:py-20",
        !backgroundImage && "gradient-hero",
        className
      )}
    >
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2419]/55 via-[#1a5c3a]/35 to-[#1a5c3a]/15" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </>
      )}
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {label && (
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wide text-primary-light">
                {label}
              </span>
            )}
            <h1 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 max-w-xl text-lg leading-[1.65] text-white/85">{description}</p>
            )}
          </motion.div>
          {children && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
