export const SITE = {
  name: "CMC Formation Koudougou",
  shortName: "CMC Formation",
  fullName: "Centre des Métiers des Mines et du Commerce",
  agrement: "2022-052/MSJE/SG",
  agrementLabel: "Centre agréé par l'État",
  location: "Koudougou, Burkina Faso",
  address:
    "Koudougou, Quartier Burkina — 1er étage de l'immeuble en face de l'Alimentation Le Bon Samaritain, à proximité du marché de Burkina.",
  phones: ["+226 70 75 39 44", "+226 75 75 39 44"],
  landlines: ["02 17 62 62", "78 27 78 40"],
  email: "cmcformation2022@gmail.com",
  whatsappUrl: "https://wa.me/22670753944",
  whatsappNumber: "+226 70 75 39 44",
  registrationFee: 25000,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/formations", label: "Formations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/inscription", label: "Frais & Inscription" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappLink(message?: string): string {
  const base = SITE.whatsappUrl;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function registrationWhatsAppMessage(formation?: string): string {
  const f = formation ? ` à la formation ${formation}` : "";
  return `Bonjour CMC Formation, je souhaite avoir des informations pour m'inscrire${f}.`;
}
