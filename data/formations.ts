import type { DomainId, Formation } from "@/types";
import { getDomainLabel } from "./domains";

const defaultConditions = [
  "Être âgé d'au moins 16 ans",
  "Présenter une pièce d'identité valide",
  "Remplir le formulaire de demande d'inscription",
  "Payer les frais d'inscription de 25 000 FCFA",
];

function commerceFormation(
  name: string,
  slug: string,
  domain: DomainId = "commerce"
): Formation {
  return {
    slug,
    name,
    domain,
    domainLabel: getDomainLabel(domain),
    duration: "06 à 08 mois",
    cost: 250000,
    registrationFee: 25000,
    installments: [75000, 75000, 75000],
    description: `Formation professionnelle en ${name.toLowerCase()} pour acquérir des compétences pratiques adaptées au marché de l'emploi au Burkina Faso.`,
    level: "De la 6e au Bac et plus",
    certificate: "Certificat professionnel",
    learnings: [
      "Techniques professionnelles du métier",
      "Outils bureautiques et gestion documentaire",
      "Communication professionnelle",
      "Organisation du travail et rigueur",
      "Pratiques en situation réelle",
    ],
    careers: [
      `Assistant(e) ${name.toLowerCase()}`,
      "Employé(e) en entreprise ou structure de services",
      "Prestataire indépendant",
      "Évolution vers des postes à responsabilité",
    ],
    conditions: [
      ...defaultConditions,
      "Niveau requis : de la 6e au Bac et plus",
    ],
  };
}

const technicalFormations: Omit<Formation, "domainLabel">[] = [
  {
    slug: "processus-traitement-minerai",
    name: "Processus de traitement de minerai",
    domain: "mines",
    duration: "06 à 12 mois",
    cost: 450000,
    registrationFee: 25000,
    installments: [125000, 100000, 100000, 100000],
    description:
      "Formation professionnelle pour maîtriser les bases du traitement de minerai et les opérations liées à l'exploitation minière.",
    popular: true,
    level: "BEPC et plus",
    certificate: "Certificat professionnel",
    learnings: [
      "Bases de l'exploitation et du traitement de minerai",
      "Procédés de concentration et séparation",
      "Sécurité sur site minier",
      "Contrôle qualité des produits",
      "Pratiques en atelier et sur terrain",
    ],
    careers: [
      "Opérateur de traitement de minerai",
      "Technicien de site minier",
      "Assistant exploitation minière",
    ],
    conditions: [...defaultConditions, "Niveau requis : BEPC et plus"],
  },
  {
    slug: "mecanique-engins-lourds",
    name: "Mécanique d'engins lourds",
    domain: "industrie",
    duration: "06 à 12 mois",
    cost: 650000,
    registrationFee: 25000,
    installments: [225000, 200000, 100000, 100000],
    description:
      "Formation complète en maintenance, diagnostic et réparation des engins lourds utilisés dans les mines, carrières et chantiers.",
    popular: true,
    level: "BEPC et plus",
    certificate: "Certificat professionnel",
    learnings: [
      "Maintenance préventive et corrective des engins",
      "Diagnostic des pannes mécaniques et hydrauliques",
      "Lecture de plans et schémas techniques",
      "Sécurité et prévention des risques",
      "Utilisation des outils professionnels",
    ],
    careers: [
      "Mécanicien d'engins lourds",
      "Technicien de maintenance",
      "Assistant atelier mécanique",
    ],
    conditions: [...defaultConditions, "Niveau requis : BEPC et plus"],
  },
  {
    slug: "electricite-usine",
    name: "Électricité d'usine",
    domain: "electricite",
    duration: "06 à 12 mois",
    cost: 650000,
    registrationFee: 25000,
    installments: [225000, 200000, 100000, 100000],
    description:
      "Formation aux installations électriques industrielles, maintenance et sécurité en environnement d'usine.",
    level: "BEPC et plus",
    certificate: "Certificat professionnel",
    learnings: [
      "Installations électriques industrielles",
      "Maintenance des équipements",
      "Lecture de schémas électriques",
      "Sécurité électrique en milieu industriel",
    ],
    careers: [
      "Électricien d'usine",
      "Technicien maintenance électrique",
      "Assistant installation industrielle",
    ],
    conditions: [...defaultConditions, "Niveau requis : BEPC et plus"],
  },
  {
    slug: "electricite-batiment",
    name: "Électricité de bâtiment",
    domain: "electricite",
    duration: "06 à 12 mois",
    cost: 500000,
    registrationFee: 25000,
    installments: [125000, 125000, 125000, 100000],
    description:
      "Formation pratique en électricité bâtiment pour les installations résidentielles et tertiaires.",
    popular: true,
    level: "BEPC et plus",
    certificate: "Certificat professionnel",
    learnings: [
      "Bases de l'électricité bâtiment",
      "Lecture de schémas simples",
      "Installation et maintenance",
      "Sécurité électrique",
    ],
    careers: [
      "Assistant électricien bâtiment",
      "Technicien installation",
      "Prestataire indépendant",
    ],
    conditions: [...defaultConditions, "Niveau requis : BEPC et plus"],
  },
  {
    slug: "electricite-automobile",
    name: "Électricité automobile",
    domain: "electricite",
    duration: "06 à 12 mois",
    cost: 500000,
    registrationFee: 25000,
    installments: [125000, 125000, 125000, 100000],
    description:
      "Formation aux systèmes électriques des véhicules : diagnostic, câblage et maintenance.",
    level: "BEPC et plus",
    certificate: "Certificat professionnel",
    learnings: [
      "Circuits électriques automobiles",
      "Diagnostic et dépannage",
      "Installation d'accessoires électriques",
      "Sécurité en atelier automobile",
    ],
    careers: [
      "Électricien automobile",
      "Technicien diagnostic auto",
      "Assistant garage",
    ],
    conditions: [...defaultConditions, "Niveau requis : BEPC et plus"],
  },
  {
    slug: "forages",
    name: "Forages",
    domain: "mines",
    duration: "06 à 12 mois",
    cost: 450000,
    registrationFee: 25000,
    installments: [125000, 100000, 100000, 100000],
    description:
      "Formation aux techniques de forage appliquées aux activités minières et géologiques.",
    level: "BEPC et plus",
    certificate: "Certificat professionnel",
    learnings: [
      "Techniques de forage",
      "Sécurité sur chantier de forage",
      "Utilisation des équipements",
      "Procédures de contrôle",
    ],
    careers: [
      "Opérateur de forage",
      "Assistant technicien forage",
      "Agent de site minier",
    ],
    conditions: [...defaultConditions, "Niveau requis : BEPC et plus"],
  },
  {
    slug: "dynamitage",
    name: "Dynamitage",
    domain: "mines",
    duration: "06 à 12 mois",
    cost: 450000,
    registrationFee: 25000,
    installments: [125000, 100000, 100000, 100000],
    description:
      "Formation aux procédures de dynamitage en milieu minier et carrière, avec accent sur la sécurité.",
    level: "BEPC et plus",
    certificate: "Certificat professionnel",
    learnings: [
      "Principes du dynamitage contrôlé",
      "Règles de sécurité strictes",
      "Préparation et suivi des opérations",
      "Coordination sur site",
    ],
    careers: [
      "Assistant dynamitage",
      "Agent sécurité site minier",
      "Opérateur carrière",
    ],
    conditions: [...defaultConditions, "Niveau requis : BEPC et plus", "Aptitude physique requise"],
  },
  {
    slug: "hse",
    name: "Hygiène Santé Sécurité au Travail-Environnement",
    domain: "hse",
    duration: "06 à 12 mois",
    cost: 650000,
    registrationFee: 25000,
    installments: [225000, 200000, 100000, 100000],
    description:
      "Formation HSE pour prévenir les risques, protéger les travailleurs et respecter l'environnement.",
    level: "BEPC et plus",
    certificate: "Certificat professionnel",
    learnings: [
      "Identification et évaluation des risques",
      "Prévention des accidents du travail",
      "Hygiène et santé au travail",
      "Protection de l'environnement",
    ],
    careers: [
      "Agent HSE",
      "Assistant sécurité au travail",
      "Contrôleur prévention",
    ],
    conditions: [...defaultConditions, "Niveau requis : BEPC et plus"],
  },
  {
    slug: "technicien-laboratoire-atl",
    name: "Technicien de Laboratoire ATL",
    domain: "mines",
    duration: "06 à 12 mois",
    cost: 650000,
    registrationFee: 25000,
    installments: [225000, 200000, 100000, 100000],
    description:
      "Formation de technicien de laboratoire pour l'analyse et le contrôle en contexte minier et industriel.",
    level: "BEPC et plus",
    certificate: "Certificat professionnel",
    learnings: [
      "Techniques d'analyse en laboratoire",
      "Prélèvements et contrôles",
      "Utilisation du matériel de laboratoire",
      "Rédaction de rapports techniques",
    ],
    careers: [
      "Technicien de laboratoire",
      "Assistant contrôle qualité",
      "Agent analyse industrielle",
    ],
    conditions: [...defaultConditions, "Niveau requis : BEPC et plus"],
  },
  {
    slug: "conduite-engins-lourds",
    name: "Conduite Dumper, Chargeuse, Excavateur, Manitou, Bulldozer, Tractopelle",
    domain: "conduite-engins",
    duration: "04 mois",
    cost: 450000,
    registrationFee: 25000,
    installments: [125000, 100000, 100000, 100000],
    description:
      "Formation pratique à la conduite d'engins lourds pour les chantiers, mines et carrières.",
    popular: true,
    level: "BEPC et plus",
    certificate: "Certificat professionnel",
    learnings: [
      "Conduite sécurisée des engins lourds",
      "Manœuvres et techniques de chantier",
      "Entretien de premier niveau",
      "Règles de sécurité sur site",
    ],
    careers: [
      "Conducteur d'engins lourds",
      "Opérateur de chantier",
      "Conducteur mines/carrières",
    ],
    conditions: [...defaultConditions, "Niveau requis : BEPC et plus", "Aptitude physique requise"],
  },
  {
    slug: "niveleuse",
    name: "Niveleuse",
    domain: "conduite-engins",
    duration: "04 mois",
    cost: 550000,
    registrationFee: 25000,
    installments: [125000, 200000, 100000, 100000],
    description:
      "Formation spécialisée à la conduite de niveleuse pour travaux routiers et terrassement.",
    level: "BEPC et plus",
    certificate: "Certificat professionnel",
    learnings: [
      "Conduite et réglage de la niveleuse",
      "Techniques de terrassement",
      "Sécurité sur chantier routier",
      "Maintenance de premier niveau",
    ],
    careers: [
      "Conducteur de niveleuse",
      "Opérateur travaux publics",
      "Conducteur BTP",
    ],
    conditions: [...defaultConditions, "Niveau requis : BEPC et plus", "Aptitude physique requise"],
  },
  {
    slug: "grue",
    name: "Grue",
    domain: "conduite-engins",
    duration: "04 mois",
    cost: 650000,
    registrationFee: 25000,
    installments: [225000, 200000, 100000, 100000],
    description:
      "Formation à la conduite et manipulation de grue en toute sécurité sur chantier.",
    level: "BEPC et plus",
    certificate: "Certificat professionnel",
    learnings: [
      "Conduite et manœuvres de grue",
      "Signalisation et sécurité de levage",
      "Maintenance préventive",
      "Réglementation chantier",
    ],
    careers: [
      "Conducteur de grue",
      "Opérateur levage",
      "Technicien chantier BTP",
    ],
    conditions: [...defaultConditions, "Niveau requis : BEPC et plus", "Aptitude physique requise"],
  },
];

const commerceList: { name: string; slug: string; domain?: DomainId }[] = [
  { name: "Secrétaire médicale", slug: "secretaire-medicale" },
  { name: "Auxiliaire en pharmacie", slug: "auxiliaire-pharmacie" },
  { name: "Délégué médical", slug: "delegue-medical" },
  { name: "Caissière d'entreprise", slug: "caissiere-entreprise" },
  { name: "Secrétaire bureautique", slug: "secretaire-bureautique" },
  { name: "Secrétaire comptable", slug: "secretaire-comptable" },
  { name: "Aide comptable", slug: "aide-comptable" },
  { name: "Agent commercial", slug: "agent-commercial" },
  { name: "Gestionnaire de stock / magasinier", slug: "gestionnaire-stock", domain: "logistique" },
  { name: "Tourisme et hôtellerie", slug: "tourisme-hotellerie" },
  { name: "Décoration événementielle", slug: "decoration-evenementielle" },
  { name: "Transit et déclarant en douane", slug: "transit-declarant-douane", domain: "logistique" },
  { name: "Transport et logistique", slug: "transport-logistique", domain: "logistique" },
  { name: "Maintenance informatique", slug: "maintenance-informatique", domain: "informatique" },
  { name: "Système de sécurité / vidéo surveillance", slug: "systeme-securite", domain: "informatique" },
  { name: "Infographie", slug: "infographie", domain: "informatique" },
];

export const formations: Formation[] = [
  ...technicalFormations.map((f) => ({
    ...f,
    domainLabel: getDomainLabel(f.domain),
  })),
  ...commerceList.map((c) =>
    commerceFormation(c.name, c.slug, c.domain ?? "commerce")
  ),
];

export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}

export function getPopularFormations(): Formation[] {
  return formations.filter((f) => f.popular);
}

export function getSimilarFormations(formation: Formation, limit = 4): Formation[] {
  return formations
    .filter((f) => f.domain === formation.domain && f.slug !== formation.slug)
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  return formations.map((f) => f.slug);
}
