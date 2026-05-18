"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  ChevronRight,
  Clock,
  CreditCard,
  GraduationCap,
  Home,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/constants";

const highlights = [
  {
    icon: CreditCard,
    label: "Inscription",
    value: "25 000 FCFA",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Clock,
    label: "Paiement",
    value: "Par tranches",
    accent: "bg-accent/10 text-accent",
  },
  {
    icon: Award,
    label: "Durée",
    value: "04–12 mois",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: GraduationCap,
    label: "Certificat",
    value: "Pro",
    accent: "bg-emerald-100 text-emerald-800",
  },
];

export function InscriptionHero() {
  return (
    <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-br from-[#f8faf7] via-white to-primary/5">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 hidden h-96 w-96 rounded-full bg-primary/5 blur-3xl sm:block"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 hidden h-72 w-72 rounded-full bg-accent/5 blur-3xl sm:block"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative py-6 sm:py-10 lg:py-14">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <nav
              className="mb-3 flex flex-wrap items-center gap-1 text-xs text-muted sm:mb-4 sm:text-sm"
              aria-label="Fil d'Ariane"
            >
              <Link
                href="/"
                className="flex items-center gap-1 transition-colors hover:text-primary"
              >
                <Home className="h-3.5 w-3.5 shrink-0" />
                Accueil
              </Link>
              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-primary/40" />
              <span className="font-semibold text-primary">Frais & Inscription</span>
            </nav>

            <Badge className="mb-3 gap-1.5 border-primary/20 bg-white px-2.5 py-0.5 text-xs shadow-sm sm:mb-4 sm:px-3 sm:py-1">
              <Sparkles className="h-3 w-3 text-accent sm:h-3.5 sm:w-3.5" />
              Inscription ouverte
            </Badge>

            <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Frais &{" "}
              <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                Inscription
              </span>
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base lg:text-lg">
              Tarifs clairs, paiement par tranches — inscrivez-vous en quelques minutes.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3 lg:grid-cols-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="rounded-xl border border-white/80 bg-white/90 p-3 shadow-sm sm:rounded-2xl sm:p-4"
                >
                  <div
                    className={`mb-2 flex h-8 w-8 items-center justify-center rounded-lg sm:mb-3 sm:h-10 sm:w-10 sm:rounded-xl ${item.accent}`}
                  >
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-muted sm:text-[11px]">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs font-bold text-foreground sm:text-sm">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative w-full lg:max-w-none"
          >
            <div className="hidden sm:absolute sm:-inset-3 sm:rounded-3xl sm:bg-gradient-to-br sm:from-primary/20 sm:via-transparent sm:to-accent/20 sm:blur-sm" />
            <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 sm:rounded-3xl sm:shadow-2xl">
              <div className="relative aspect-[16/10] max-h-[220px] sm:aspect-[4/3] sm:max-h-none">
                <Image
                  src="/images/batiment-cmc-formation.png"
                  alt="CMC Formation Koudougou"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 520px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2419]/55 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/95 p-2.5 shadow-lg backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-xl sm:p-3">
                  <p className="text-[10px] font-semibold text-primary sm:text-xs">Centre agréé</p>
                  <p className="text-xs font-bold text-foreground sm:text-sm">n° {SITE.agrement}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
