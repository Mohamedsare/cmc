"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

const testimonials = [
  {
    quote:
      "Grâce à une formation pratique, j'ai mieux compris le métier que je voulais exercer.",
    name: "Aminata K.",
    role: "Exemple illustratif — ancienne apprenante",
  },
  {
    quote: "Les informations sont claires et l'inscription est simple.",
    name: "Ibrahim S.",
    role: "Exemple illustratif — professionnel en reconversion",
  },
  {
    quote: "Le centre propose des filières adaptées aux réalités du marché.",
    name: "Fatou D.",
    role: "Exemple illustratif — parent d'élève",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeader
          label="Témoignages"
          title="Ils nous font confiance"
          description="Exemples visuels — témoignages fictifs à titre d'illustration."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <p className="italic text-muted">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}