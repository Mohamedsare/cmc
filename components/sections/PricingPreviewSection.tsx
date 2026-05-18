"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/data/pricing";
import { cn } from "@/lib/utils";

export function PricingPreviewSection() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <SectionHeader
          label="Frais & facilités"
          title="Aperçu des frais et facilités de paiement"
          description="Des tarifs transparents avec possibilité de paiement par tranches."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "rounded-2xl border bg-white p-6 shadow-sm",
                plan.featured && "border-primary ring-2 ring-primary"
              )}
            >
              <h3 className="font-bold">{plan.title}</h3>
              <p className="mt-2 text-2xl font-bold text-primary">{plan.range}</p>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>
              <p className="mt-3 text-sm">
                Inscription : <strong>25 000 FCFA</strong>
              </p>
              <ul className="mt-4 space-y-1 text-sm text-muted">
                {plan.examples.map((ex) => (
                  <li key={ex}>• {ex}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/inscription">Voir tous les frais</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
