"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  CreditCard,
  GraduationCap,
  HardHat,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { SITE } from "@/lib/constants";

const floatingCards = [
  { icon: GraduationCap, title: "+20 filières", sub: "professionnelles" },
  { icon: CreditCard, title: "Paiement", sub: "par tranches" },
  { icon: Wrench, title: "Formations", sub: "pratiques" },
  { icon: Award, title: "Certificat", sub: "professionnel" },
];

const heroContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-8 pt-12 text-white sm:pt-16">
      <Image
        src="/images/hero-banner.png"
        alt="CMC Formation Koudougou — formez-vous aux métiers des mines, du BTP, de l'électricité et de l'industrie"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2419]/55 via-[#1a5c3a]/35 to-[#1a5c3a]/15" />

      <Container className="relative z-10">
        <div className="relative lg:min-h-[460px]">
          <motion.div
            variants={heroContentVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div
              variants={heroItemVariants}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-light shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
            >
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-accent shadow-[0_0_12px_rgba(242,140,40,0.8)]" />
              Formations professionnelles
            </motion.div>

            <motion.h1
              variants={heroItemVariants}
              className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-[2.65rem]"
            >
              Formez-vous aux métiers qui recrutent au Burkina Faso
            </motion.h1>

            <motion.p
              variants={heroItemVariants}
              className="mt-5 max-w-xl border-l-[3px] border-accent/90 pl-4 text-base leading-[1.7] text-white/90 sm:text-lg sm:leading-[1.75]"
            >
              CMC Formation Koudougou vous accompagne dans les métiers des mines, du
              BTP, de l&apos;industrie, du commerce, de la gestion, de
              l&apos;électricité et de la conduite d&apos;engins lourds.
            </motion.p>

            <motion.div
              variants={heroItemVariants}
              className="mt-8 flex flex-col gap-3 lg:flex-row lg:flex-nowrap lg:items-center"
            >
              <Button
                size="lg"
                className="h-12 w-full shrink-0 border border-white/20 shadow-lg shadow-black/20 lg:w-auto"
                asChild
              >
                <Link href="/formations">Voir les formations</Link>
              </Button>
              <Button
                variant="accent"
                size="lg"
                className="h-12 w-full shrink-0 shadow-lg shadow-accent/30 lg:w-auto"
                asChild
              >
                <Link href="/inscription">Demander une inscription</Link>
              </Button>
            </motion.div>
          </motion.div>

          <div className="absolute right-0 top-32 z-10 hidden w-52 flex-col gap-3 lg:flex xl:top-40 xl:w-56">
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.12, type: "spring", stiffness: 120, damping: 18 }}
                whileHover={{ x: -6, scale: 1.02 }}
                className="group flex items-center gap-3 rounded-2xl border border-white/60 bg-white/75 p-3.5 text-foreground shadow-[0_8px_32px_rgba(15,36,25,0.14)] backdrop-blur-xl transition-shadow hover:border-white/80 hover:shadow-[0_16px_48px_rgba(46,139,87,0.22)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15 transition-all duration-300 group-hover:bg-primary group-hover:ring-primary/30">
                  <card.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold leading-tight tracking-tight text-foreground">
                    {card.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-muted">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 grid grid-cols-2 gap-4 rounded-2xl bg-white p-4 text-foreground shadow-xl sm:grid-cols-4"
        >
          {[
            { icon: ShieldCheck, text: "Agrément officiel" },
            { icon: MapPin, text: SITE.location },
            { icon: HardHat, text: "04 à 12 mois" },
            { icon: CreditCard, text: "Dès 25 000 FCFA" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 p-2">
              <item.icon className="h-6 w-6 shrink-0 text-primary" />
              <span className="text-sm font-semibold">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
