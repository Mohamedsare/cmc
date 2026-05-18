import type { DomainId } from "@/types";

/**
 * Visuels domaines — source : maquette/domaine-formation/
 * Fichiers dans public/images/domains/
 */
const DOMAIN_IMAGES: Partial<Record<DomainId, string>> = {
  mines: "/images/domains/mine-exploitation-miniere.png",
  "conduite-engins": "/images/domains/conduite-engins-lourds.png",
  electricite: "/images/domains/electricite-energie.png",
  industrie: "/images/domains/maintenance-industriel.png",
  commerce: "/images/domains/gestion-services.png",
  hse: "/images/domains/sante-securite-envirronnement.png",
};

export function getDomainImage(domainId: DomainId): string | undefined {
  return DOMAIN_IMAGES[domainId];
}
