"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Banknote,
  Building2,
  Phone,
  Smartphone,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { SITE, whatsappLink } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

const steps = [
  "Remplir le formulaire de demande",
  "Envoyer votre demande en ligne",
  "Finaliser sur WhatsApp avec notre équipe",
  "Payer les frais et commencer la formation",
];

const paymentModes = [
  { icon: Banknote, label: "Espèces", desc: "Au secrétariat" },
  { icon: Smartphone, label: "Mobile Money", desc: "Orange, Moov..." },
  { icon: Building2, label: "Virement", desc: "Sur demande" },
];

export function InscriptionPreFooter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-primary/10 bg-gradient-to-b from-[#f0f5ee] to-white py-10 pb-28 sm:py-12 lg:py-14 lg:pb-14"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-accent/5 blur-3xl"
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-12"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Parcours simple
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-foreground">
              Comment s&apos;inscrire ?
            </h3>
            <ol className="mt-6 space-y-0">
              {steps.map((step, i) => (
                <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
                  {i < steps.length - 1 && (
                    <span
                      className="absolute left-[15px] top-8 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/40 to-transparent"
                      aria-hidden
                    />
                  )}
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md shadow-primary/25">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-foreground">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Paiement
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-foreground">
              Modes acceptés
            </h3>
            <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
              {paymentModes.map((mode, i) => (
                <motion.div
                  key={mode.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.08 * i }}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center rounded-xl border border-white bg-white p-3 text-center shadow-sm transition-shadow sm:rounded-2xl sm:p-4 sm:hover:shadow-md"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <mode.icon className="h-6 w-6 text-primary" />
                  </span>
                  <span className="mt-3 text-sm font-bold text-foreground">{mode.label}</span>
                  <span className="mt-0.5 text-xs text-muted">{mode.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Assistance
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-foreground">Besoin d&apos;aide ?</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Notre équipe répond à vos questions sur les frais, les tranches et les documents
              requis.
            </p>
            <a
              href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <Phone className="h-4 w-4" />
              {SITE.phones[0]}
            </a>
            <Button variant="whatsapp" className="mt-3 w-full gap-2" asChild>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Écrire sur WhatsApp
              </a>
            </Button>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              Page contact
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
