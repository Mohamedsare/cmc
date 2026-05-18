import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { InscriptionHero } from "@/components/inscription/InscriptionHero";
import { PricingTablesSection } from "@/components/inscription/PricingTablesSection";
import { RegistrationForm } from "@/components/forms/RegistrationForm";
import { InscriptionPreFooter } from "@/components/inscription/InscriptionPreFooter";
import { InscriptionMobileCta } from "@/components/inscription/InscriptionMobileCta";

export const metadata: Metadata = {
  title: "Frais & Inscription | CMC Formation Koudougou",
  description:
    "Consultez les frais de formation, les modalités de paiement par tranches et demandez votre inscription à CMC Formation Koudougou.",
};

function FormSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-6">
      <div className="h-6 w-40 rounded-lg bg-gray-200 sm:w-48" />
      <div className="mt-4 space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-11 rounded-xl bg-gray-100" />
        ))}
      </div>
    </div>
  );
}

export default function InscriptionPage() {
  return (
    <>
      <InscriptionHero />

      <section className="relative overflow-x-hidden py-8 pb-24 sm:py-10 lg:py-16 lg:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.04] via-transparent to-transparent"
        />
        <Container className="relative">
          <div className="mb-6 lg:mb-10">
            <p className="text-[11px] font-bold uppercase tracking-widest text-primary sm:text-xs">
              Grille tarifaire
            </p>
            <h2 className="mt-1 text-xl font-extrabold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
              Tarifs & modalités
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted lg:max-w-md">
              <span className="lg:hidden">
                Commencez par votre demande d&apos;inscription, puis consultez les tarifs
                détaillés ci-dessous.
              </span>
              <span className="hidden lg:inline">
                Tableaux par filière — formulaire d&apos;inscription à droite.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_min(100%,400px)] lg:items-start lg:gap-14">
            <aside
              id="inscription-form"
              className="order-1 scroll-mt-24 lg:order-2 lg:sticky lg:top-24 lg:self-start"
            >
              <Suspense fallback={<FormSkeleton />}>
                <RegistrationForm />
              </Suspense>
            </aside>

            <div className="order-2 min-w-0 lg:order-1">
              <PricingTablesSection />
            </div>
          </div>
        </Container>
      </section>

      <InscriptionPreFooter />
      <InscriptionMobileCta />
    </>
  );
}
