"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";

const reasons = [
  "Centre agréé par l'État",
  "Formations orientées métiers pratiques",
  "Encadrement par des professionnels",
  "Paiement par tranches facilité",
  "Filières adaptées au marché burkinabè",
  "Accompagnement vers l'insertion professionnelle",
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Pourquoi nous choisir
            </span>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Pourquoi choisir CMC Formation ?
            </h2>
            <ul className="mt-8 space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8" asChild>
              <Link href="/a-propos">En savoir plus</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-primary to-[#1a5c3a] p-8 text-white"
          >
            <div className="flex h-64 items-center justify-center rounded-xl bg-white/10">
              <p className="text-center text-lg font-semibold">
                Centre des Métiers des Mines et du Commerce
                <br />
                <span className="text-primary-light">Koudougou, Burkina Faso</span>
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
