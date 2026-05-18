import { getDomainById } from "@/data/domains";
import { getFormationImage } from "@/data/formation-images";
import type { Formation } from "@/types";

const GALLERY_POSITIONS = [
  "object-center",
  "object-[30%_center]",
  "object-[70%_20%]",
  "object-bottom",
] as const;

export function getFormationDomainName(domainId: string): string {
  return getDomainById(domainId)?.name ?? domainId;
}

export function getFormationGallery(slug: string): { src: string; position: string }[] {
  const main = getFormationImage(slug);
  if (!main) return [];

  return GALLERY_POSITIONS.map((position) => ({ src: main, position }));
}

export function getFormationHeroImage(formation: Formation): string | undefined {
  return getFormationImage(formation.slug);
}

/** Compétences affichées à droite (mockup) — dérivées des apprentissages */
export function getFormationSkills(formation: Formation): string[] {
  return formation.learnings.slice(0, Math.min(5, formation.learnings.length));
}
