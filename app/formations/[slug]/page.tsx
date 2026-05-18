import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FormationDetailView } from "@/components/formations/FormationDetailView";
import {
  getAllSlugs,
  getFormationBySlug,
  getSimilarFormations,
} from "@/data/formations";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const formation = getFormationBySlug(slug);
  if (!formation) return { title: "Formation introuvable" };
  return {
    title: `${formation.name} | CMC Formation Koudougou`,
    description: formation.description,
  };
}

export default async function FormationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const formation = getFormationBySlug(slug);
  if (!formation) notFound();

  const similar = getSimilarFormations(formation, 8);

  return <FormationDetailView formation={formation} similar={similar} />;
}
