/** Images maquette → formations (fichiers dans public/images/formations/) */
const FORMATION_IMAGES: Record<string, string> = {
  "processus-traitement-minerai": "/images/formations/mine-exploitation.png",
  "mecanique-engins-lourds": "/images/formations/mecanique-engins-lourds.png",
  "electricite-batiment": "/images/formations/electricite-batiment.png",
  "electricite-usine": "/images/formations/panneau-solaire.png",
  "conduite-engins-lourds": "/images/formations/conduite-engins-lourds.png",
};

export function getFormationImage(slug: string): string | undefined {
  return FORMATION_IMAGES[slug];
}
