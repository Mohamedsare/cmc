import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { DomainIcon } from "@/components/shared/DomainIcon";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Galerie | CMC Formation Koudougou",
  description: "Découvrez la vie du centre et les formations en images.",
};

export default function GaleriePage() {
  return (
    <>
      <PageHero
        label="Galerie"
        title="Galerie du centre"
        description="Découvrez l'ambiance de CMC Formation Koudougou — photos à venir."
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient}`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                  <DomainIcon name={item.icon} className="mb-4 h-12 w-12 opacity-90" />
                  <p className="text-center text-lg font-bold">{item.title}</p>
                  <p className="mt-1 text-sm text-white/80">{item.category}</p>
                </div>
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
