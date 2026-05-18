/**
 * Photos des formations — source : maquette/formation/
 * Fichiers servis depuis public/images/formations/
 */
const FORMATION_IMAGES: Record<string, string> = {
  // Mines
  "processus-traitement-minerai": "/images/formations/mine-exploitation.png",
  forages: "/images/formations/forages.png",
  dynamitage: "/images/formations/dynamitage.png",
  "technicien-laboratoire-atl": "/images/formations/technicien-laboratoire-atl.png",

  // Industrie
  "mecanique-engins-lourds": "/images/formations/mecanique-engins-lourds.png",

  // Électricité
  "electricite-batiment": "/images/formations/electricite-batiment.png",
  "electricite-usine": "/images/formations/panneau-solaire.png",
  "electricite-automobile": "/images/formations/electricite-automobile.png",

  // HSE
  hse: "/images/formations/hse.png",

  // Conduite d'engins (même visuel engins pour niveleuse / grue)
  "conduite-engins-lourds": "/images/formations/conduite-engins-lourds.png",
  niveleuse: "/images/formations/conduite-engins-lourds.png",
  grue: "/images/formations/conduite-engins-lourds.png",
};

export function getFormationImage(slug: string): string | undefined {
  return FORMATION_IMAGES[slug];
}

export function hasFormationImage(slug: string): boolean {
  return slug in FORMATION_IMAGES;
}
