import { Suspense } from "react";
import type { Metadata } from "next";
import { Award, Calendar, CreditCard, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { FormationsList } from "@/components/formations/FormationsList";

export const metadata: Metadata = {
  title: "Nos formations professionnelles | CMC Formation Koudougou",
  description:
    "Découvrez toutes les filières de formation disponibles à CMC Formation Koudougou : mines, engins lourds, électricité, commerce et plus.",
};

const heroCards = [
  { icon: GraduationCap, title: "+20 Filières", sub: "professionnelles" },
  { icon: Calendar, title: "04 à 12 mois", sub: "Durée des formations" },
  { icon: CreditCard, title: "Paiement par tranches", sub: "Facilités de paiement" },
  { icon: Award, title: "Certificat professionnel", sub: "Reconnu et délivré" },
];

export default function FormationsPage() {
  return (
    <>
      <PageHero
        label="Nos formations"
        title="Nos formations professionnelles"
        description="Découvrez toutes nos filières de formation adaptées aux besoins du marché de l'emploi au Burkina Faso. Formations pratiques, encadrées par des professionnels pour votre réussite."
        backgroundImage="/images/formations-hero.png"
        backgroundImageAlt="Apprenants en formation à CMC Formation Koudougou"
      >
        <div className="grid grid-cols-2 gap-3">
          {heroCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-white p-4 text-foreground shadow-lg"
            >
              <card.icon className="mb-2 h-6 w-6 text-primary" />
              <p className="text-sm font-bold">{card.title}</p>
              <p className="text-xs text-muted">{card.sub}</p>
            </div>
          ))}
        </div>
      </PageHero>
      <Suspense fallback={<div className="py-12 text-center">Chargement...</div>}>
        <FormationsList />
      </Suspense>
    </>
  );
}