"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";

const reasons = [
  {
    title: "Centre agréé par l'État",
    text: "Un établissement reconnu pour la qualité de ses formations.",
  },
  {
    title: "Formations orientées métiers pratiques",
    text: "Des programmes concrets pour des compétences directement applicables.",
  },
  {
    title: "Encadrement par des professionnels",
    text: "Apprenez auprès d'experts du terrain, passionnés et disponibles.",
  },
  {
    title: "Paiement par tranches facilité",
    text: "Des modalités de paiement souples et adaptées à tous.",
  },
  {
    title: "Filières adaptées au marché burkinabè",
    text: "Des formations alignées sur les besoins réels des entreprises et du pays.",
  },
  {
    title: "Accompagnement vers l'insertion professionnelle",
    text: "Un suivi personnalisé pour faciliter votre intégration dans le monde du travail.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
              Pourquoi nous choisir
            </p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#0f2419] sm:text-3xl lg:text-4xl">
              Pourquoi choisir{" "}
              <span className="text-primary">CMC Formation</span> ?
            </h2>
            <p className="mt-2 text-sm italic text-primary/90 sm:text-base">
              Se former aujourd&apos;hui, réussir demain !
            </p>

            <ul className="mt-6 space-y-4 sm:mt-8">
              {reasons.map((r) => (
                <li key={r.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-bold text-foreground sm:text-base">{r.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted sm:text-sm">
                      {r.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Button className="mt-6 h-11 w-full rounded-xl sm:mt-8 sm:w-auto" asChild>
              <Link href="/a-propos" className="inline-flex items-center gap-2">
                En savoir plus
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[28rem]">
              <Image
                src="/images/pourquoi.png"
                alt="Étudiants en formation à CMC Formation Koudougou"
                fill
                className="object-contain object-center lg:object-right"
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority={false}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
