import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "commerce",
    title: "Formations commerciales",
    range: "250 000 FCFA",
    registrationFee: 25000,
    description:
      "Secrétariat, comptabilité, commerce, tourisme, informatique et services.",
    examples: [
      "Secrétaire bureautique",
      "Aide comptable",
      "Agent commercial",
      "Maintenance informatique",
    ],
  },
  {
    id: "technique",
    title: "Formations techniques & industrielles",
    range: "450 000 à 650 000 FCFA",
    registrationFee: 25000,
    description:
      "Mines, électricité, industrie, HSE et métiers techniques spécialisés.",
    featured: true,
    examples: [
      "Électricité de bâtiment",
      "Mécanique d'engins lourds",
      "Processus de traitement de minerai",
      "HSE",
    ],
  },
  {
    id: "engins",
    title: "Conduite d'engins lourds",
    range: "450 000 à 650 000 FCFA",
    registrationFee: 25000,
    description:
      "Dumper, chargeuse, excavateur, niveleuse, grue et autres engins.",
    examples: [
      "Conduite engins lourds",
      "Niveleuse",
      "Grue",
    ],
  },
];
