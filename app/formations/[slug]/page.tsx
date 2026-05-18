import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Languages,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { FormationCover } from "@/components/shared/FormationCover";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CourseCard } from "@/components/cards/CourseCard";
import {
  getAllSlugs,
  getFormationBySlug,
  getSimilarFormations,
} from "@/data/formations";
import { formatFCFA } from "@/lib/utils";
import {
  registrationWhatsAppMessage,
  SITE,
  whatsappLink,
} from "@/lib/constants";

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

  const similar = getSimilarFormations(formation);
  const waMessage = registrationWhatsAppMessage(formation.name);

  return (
    <>
      <div className="border-b border-border bg-white py-4">
        <Container>
          <nav className="text-sm text-muted">
            <Link href="/" className="hover:text-primary">Accueil</Link>
            {" / "}
            <Link href="/formations" className="hover:text-primary">Formations</Link>
            {" / "}
            <span className="text-foreground">{formation.name}</span>
          </nav>
        </Container>
      </div>

      <section className="py-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="relative mb-8 h-64 overflow-hidden rounded-2xl lg:h-80">
                <FormationCover
                  slug={formation.slug}
                  domain={formation.domain}
                  domainLabel={formation.domainLabel}
                  name={formation.name}
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <Badge className="mb-3">{formation.domainLabel}</Badge>
              <p className="text-sm font-bold uppercase tracking-wider text-primary">
                Formation professionnelle
              </p>
              <h1 className="mt-1 text-3xl font-bold">{formation.name}</h1>
              <p className="mt-4 text-lg text-muted">{formation.description}</p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Clock, label: "Durée", value: formation.duration },
                  { icon: BookOpen, label: "Niveau requis", value: formation.level ?? "Nous consulter" },
                  { icon: Award, label: "Certificat", value: formation.certificate ?? "Certificat professionnel" },
                  { icon: Users, label: "Places", value: "Oui" },
                  { icon: Languages, label: "Langue", value: "Français" },
                  { icon: GraduationCap, label: "Session", value: "Nous consulter" },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3 rounded-xl border border-border p-4">
                    <item.icon className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs text-muted">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href={`/inscription?formation=${formation.slug}`}>
                    Demander une inscription
                  </Link>
                </Button>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href={whatsappLink(waMessage)} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon />
                    Contacter sur WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-12 space-y-10">
                <div>
                  <h2 className="text-xl font-bold">Ce que l&apos;apprenant va apprendre</h2>
                  <ul className="mt-4 space-y-2">
                    {formation.learnings.map((l) => (
                      <li key={l} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Débouchés possibles</h2>
                  <ul className="mt-4 space-y-2">
                    {formation.careers.map((c) => (
                      <li key={c} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Conditions d&apos;inscription</h2>
                  <ul className="mt-4 space-y-2">
                    {formation.conditions.map((c) => (
                      <li key={c} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h3 className="font-bold">Frais de formation</h3>
                <p className="mt-2 text-3xl font-bold text-primary">{formatFCFA(formation.cost)}</p>
                <p className="mt-2 text-sm text-muted">
                  Inscription : {formatFCFA(formation.registrationFee)}
                </p>
                <h4 className="mt-6 font-semibold">Tranches de paiement</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  {formation.installments.map((inst, i) => (
                    <li key={i}>Tranche {i + 1} : {formatFCFA(inst)}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-gray-50 p-6">
                <h3 className="font-bold">Besoin d&apos;informations ?</h3>
                <p className="mt-2 text-sm text-muted">{SITE.phones[0]}</p>
                <a href={`mailto:${SITE.email}`} className="mt-1 block text-sm text-primary hover:underline">
                  {SITE.email}
                </a>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-primary/10 p-6">
                <ShieldCheck className="h-6 w-6 shrink-0 text-primary" />
                <div className="text-sm">
                  <p className="font-bold">Centre agréé</p>
                  <p className="text-muted">Agrément n° {SITE.agrement}</p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {similar.length > 0 && (
        <section className="bg-gray-50 py-16">
          <Container>
            <h2 className="mb-8 text-2xl font-bold">Autres formations similaires</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {similar.map((f, i) => (
                <CourseCard key={f.slug} formation={f} index={i} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}