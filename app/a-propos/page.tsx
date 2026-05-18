import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { AboutHero } from "@/components/a-propos/AboutHero";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À propos | CMC Formation Koudougou",
  description:
    "Découvrez CMC Formation Koudougou, centre de formations professionnelles agréé à Koudougou, Burkina Faso.",
};

const highlights = [
  "Centre agréé par l'État",
  "Formations orientées métiers",
  "Paiement par tranches",
  "Accessibilité",
  "Compétences pratiques",
  "Filières adaptées au marché",
];

const values = [
  { title: "Mission", text: "Former des profils compétents, pratiques et prêts à exercer des métiers utiles au développement économique." },
  { title: "Vision", text: "Devenir une référence régionale dans la formation professionnelle orientée métiers techniques et commerciaux." },
  { title: "Valeurs", text: "Discipline, compétence, sérieux, pratique, insertion, professionnalisme." },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-muted">
                {SITE.fullName} ({SITE.shortName}) accompagne les jeunes, les
                professionnels et les personnes en reconversion dans
                l&apos;acquisition de compétences pratiques dans les métiers des
                mines, du commerce, de l&apos;industrie, de l&apos;électricité, de la
                gestion et de la conduite d&apos;engins lourds.
              </p>
              <ul className="mt-8 space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl gradient-hero p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-light">
                Agrément officiel
              </p>
              <p className="mt-2 text-2xl font-bold">n° {SITE.agrement}</p>
              <p className="mt-4 text-white/85">{SITE.address}</p>
            </div>
          </div>
          <SectionHeader
            className="mt-20"
            title="Mission, vision & valeurs"
            align="left"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary">{v.title}</h3>
                <p className="mt-3 text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
