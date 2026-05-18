import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldCheck, MapPin, GraduationCap } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SITE } from "@/lib/constants";

const highlights = [
  { icon: ShieldCheck, label: "Centre agréé", value: SITE.agrement },
  { icon: MapPin, label: "Localisation", value: "Koudougou, BF" },
  { icon: GraduationCap, label: "Formations", value: "Métiers pratiques" },
];

export function AboutHero() {
  return (
    <section className="border-b border-border bg-white">
      <Container className="py-10 lg:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <nav className="mb-4 flex items-center gap-1 text-sm text-muted">
              <Link href="/" className="hover:text-primary">
                Accueil
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium text-primary">À propos</span>
            </nav>
            <h1 className="text-3xl font-bold text-primary sm:text-4xl">
              À propos de CMC Formation Koudougou
            </h1>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              Un centre de formations professionnelles basé à Koudougou, au Burkina Faso,
              dédié à l&apos;insertion professionnelle et aux métiers qui recrutent.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background p-3"
                >
                  <item.icon className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-[10px] font-medium text-muted sm:text-xs">
                      {item.label}
                    </p>
                    <p className="text-xs font-bold text-foreground sm:text-sm">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-2 ring-primary/15">
              <Image
                src="/images/batiment-cmc-formation.png"
                alt="Bâtiment CMC Formation Koudougou — centre de formations professionnelles"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}