import type { Domain, DomainId } from "@/types";

export const domains: Domain[] = [
  {
    id: "mines",
    name: "Mines & exploitation minière",
    shortName: "Mines",
    description:
      "Formations orientées exploitation minière, traitement de minerai, carrière, mine souterraine et techniques minières.",
    icon: "Mountain",
    gradient: "from-emerald-800 to-emerald-600",
  },
  {
    id: "conduite-engins",
    name: "Conduite d'engins lourds",
    shortName: "Conduite d'engins",
    description:
      "Formation à la conduite d'engins comme dumper, chargeuse, excavateur, manitou, bulldozer, niveleuse, grue et tractopelle.",
    icon: "Truck",
    gradient: "from-amber-700 to-orange-600",
  },
  {
    id: "electricite",
    name: "Électricité & énergie",
    shortName: "Électricité",
    description:
      "Électricité bâtiment, électricité automobile, électricité d'usine et installation solaire.",
    icon: "Zap",
    gradient: "from-yellow-600 to-amber-500",
  },
  {
    id: "industrie",
    name: "Industrie & maintenance",
    shortName: "Industrie",
    description:
      "Maintenance d'engins lourds, maintenance usine, mécanique générale et instrumentation.",
    icon: "Factory",
    gradient: "from-slate-700 to-slate-500",
  },
  {
    id: "commerce",
    name: "Commerce, gestion & services",
    shortName: "Commerce",
    description:
      "Secrétariat, comptabilité, caisse, gestion de stock, transport, logistique, tourisme, hôtellerie et commerce.",
    icon: "BriefcaseBusiness",
    gradient: "from-teal-700 to-teal-500",
  },
  {
    id: "hse",
    name: "Santé, sécurité & environnement",
    shortName: "HSE",
    description:
      "Hygiène, santé, sécurité au travail, environnement et renforcement des capacités.",
    icon: "ShieldCheck",
    gradient: "from-green-700 to-green-500",
  },
];

export const domainFilters: { id: DomainId | "all"; label: string }[] = [
  { id: "all", label: "Tous les domaines" },
  { id: "mines", label: "Mines" },
  { id: "conduite-engins", label: "Conduite d'engins" },
  { id: "electricite", label: "Électricité" },
  { id: "industrie", label: "Industrie" },
  { id: "commerce", label: "Commerce & Gestion" },
  { id: "hse", label: "HSE" },
  { id: "informatique", label: "Informatique" },
  { id: "logistique", label: "Logistique" },
];

export function getDomainById(id: string): Domain | undefined {
  return domains.find((d) => d.id === id);
}

export function getDomainLabel(id: string): string {
  const d = domains.find((x) => x.id === id);
  if (d) return d.shortName;
  if (id === "informatique") return "Informatique";
  if (id === "logistique") return "Logistique";
  return id;
}
