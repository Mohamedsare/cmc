import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CourseCard } from "@/components/cards/CourseCard";
import { Button } from "@/components/ui/button";
import { getPopularFormations } from "@/data/formations";

export function PopularCoursesSection() {
  const popular = getPopularFormations();

  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeader
          label="Formations populaires"
          title="Découvrez nos formations les plus demandées"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((f, i) => (
            <CourseCard key={f.slug} formation={f} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button size="lg" asChild>
            <Link href="/formations">Voir toutes les formations</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
