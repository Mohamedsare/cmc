"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Cog,
  Globe,
  GraduationCap,
  Home,
  Mail,
  PenLine,
  Phone,
  Play,
  Settings,
  ShieldCheck,
  Users,
  Wrench,
  Clock,
} from "lucide-react";
import { FormationCover } from "@/components/shared/FormationCover";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/Container";
import { SimilarFormationsCarousel } from "@/components/formations/SimilarFormationsCarousel";
import { getFormationProgrammeImage } from "@/data/formation-images";
import {
  getFormationDomainName,
  getFormationGallery,
  getFormationHeroImage,
  getFormationSkills,
} from "@/lib/formation-detail";
import { formatFCFA } from "@/lib/utils";
import {
  registrationWhatsAppMessage,
  SITE,
  whatsappLink,
} from "@/lib/constants";
import type { Formation } from "@/types";
import { cn } from "@/lib/utils";

const SKILL_ICONS = [Wrench, Settings, Cog, Wrench, Settings] as const;

const TABS = [
  { id: "description", label: "Description" },
  { id: "programme", label: "Programme" },
  { id: "debouches", label: "Débouchés" },
  { id: "conditions", label: "Conditions" },
  { id: "informations", label: "Informations" },
] as const;

type TabId = (typeof TABS)[number]["id"];

interface FormationDetailViewProps {
  formation: Formation;
  similar: Formation[];
}

export function FormationDetailView({ formation, similar }: FormationDetailViewProps) {
  const [activeTab, setActiveTab] = useState<TabId>("description");
  const gallery = getFormationGallery(formation.slug);
  const heroImage = getFormationHeroImage(formation);
  const [activeImage, setActiveImage] = useState(0);
  const skills = getFormationSkills(formation);
  const domainName = getFormationDomainName(formation.domain);
  const programmeImage = getFormationProgrammeImage(formation.slug);
  const waMessage = registrationWhatsAppMessage(formation.name);

  const metaItems = [
    { icon: Clock, label: "Durée de formation", value: formation.duration },
    {
      icon: GraduationCap,
      label: "Niveau requis",
      value: formation.level ?? "Nous consulter",
    },
    {
      icon: Award,
      label: "Certificat obtenu",
      value: formation.certificate ?? "Certificat professionnel",
    },
    { icon: Calendar, label: "Prochaine session", value: "Nous consulter" },
    { icon: Globe, label: "Langue d'enseignement", value: "Français" },
    { icon: Users, label: "Places disponibles", value: "Oui" },
  ];

  const careerImage =
    formation.domain === "conduite-engins" || formation.domain === "industrie"
      ? "/images/formations/conduite-engins-lourds.png"
      : heroImage ?? "/images/formations/mecanique-engins-lourds.png";

  return (
    <>
      <div className="border-b border-border bg-[#f3f5f4]">
        <Container className="py-3">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
            <Link href="/" className="flex items-center gap-1 hover:text-primary">
              <Home className="h-3.5 w-3.5" />
              Accueil
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-primary/40" />
            <Link href="/formations" className="hover:text-primary">
              Formations
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-primary/40" />
            <Link
              href={`/formations?domain=${formation.domain}`}
              className="hover:text-primary"
            >
              {domainName}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-primary/40" />
            <span className="font-medium text-foreground">{formation.name}</span>
          </nav>
        </Container>
      </div>

      <section className="bg-white py-8 lg:py-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-6 xl:gap-8">
            {/* Galerie */}
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                {gallery.length > 0 ? (
                  <Image
                    src={gallery[activeImage]?.src ?? gallery[0].src}
                    alt={formation.name}
                    fill
                    className={cn(
                      "object-cover transition-opacity duration-300",
                      gallery[activeImage]?.position ?? "object-center"
                    )}
                    sizes="(max-width: 1024px) 100vw, 400px"
                    priority
                  />
                ) : (
                  <FormationCover
                    slug={formation.slug}
                    domain={formation.domain}
                    domainLabel={formation.domainLabel}
                    name={formation.name}
                    sizes="(max-width: 1024px) 100vw, 400px"
                    priority
                  />
                )}
                <Badge className="absolute left-3 top-3 border-0 bg-primary text-white shadow">
                  {domainName}
                </Badge>
              </div>
              {gallery.length > 0 && (
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {gallery.map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        "relative aspect-square overflow-hidden rounded-lg border-2 transition-all",
                        activeImage === i
                          ? "border-primary shadow-md"
                          : "border-transparent opacity-80 hover:opacity-100"
                      )}
                    >
                      <Image
                        src={item.src}
                        alt=""
                        fill
                        className={cn("object-cover", item.position)}
                        sizes="80px"
                      />
                      {i === 0 && (
                        <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-primary shadow">
                            <Play className="ml-0.5 h-4 w-4 fill-current" />
                          </span>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contenu principal */}
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Formation professionnelle
              </p>
              <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-[#0f2419] sm:text-3xl lg:text-[2rem] lg:leading-tight">
                {formation.name}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {formation.description}
              </p>

              <ul className="mt-6 space-y-3">
                {metaItems.map((item) => (
                  <li key={item.label} className="flex gap-3 text-sm">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs text-muted">{item.label}</p>
                      <p className="font-semibold text-foreground">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <Button size="lg" className="h-12 w-full rounded-xl text-base" asChild>
                  <Link href={`/inscription?formation=${formation.slug}`}>
                    <PenLine className="h-5 w-5" />
                    Demander une inscription
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 w-full rounded-xl border-2 border-primary bg-white text-base text-primary hover:bg-primary/5"
                  asChild
                >
                  <a
                    href={whatsappLink(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                    Contacter sur WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5 lg:col-span-3">
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <div className="bg-primary px-5 py-3">
                  <h3 className="font-bold text-white">Frais de formation</h3>
                </div>
                <div className="p-5">
                  <p className="text-3xl font-extrabold text-primary">
                    {formatFCFA(formation.cost)}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Frais d&apos;inscription :{" "}
                    <span className="font-semibold text-foreground">
                      {formatFCFA(formation.registrationFee)}
                    </span>
                  </p>
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-muted">
                    Paiement par tranches
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {formation.installments.map((inst, i) => (
                      <li
                        key={i}
                        className="flex justify-between border-b border-border/60 py-1.5 last:border-0"
                      >
                        <span className="text-muted">Tranche {i + 1}</span>
                        <span className="font-semibold">{formatFCFA(inst)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <h3 className="font-bold text-foreground">Besoin d&apos;informations ?</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a
                      href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
                      className="flex items-center gap-2 font-semibold text-primary hover:underline"
                    >
                      <Phone className="h-4 w-4" />
                      {SITE.phones[0]}
                      <span className="text-xs font-normal text-muted">— Appeler</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-semibold text-[#1a7a3a] hover:underline"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <Mail className="h-4 w-4 shrink-0" />
                      <span className="break-all">{SITE.email}</span>
                    </a>
                    <p className="mt-0.5 pl-6 text-xs text-muted">Envoyer un email</p>
                  </li>
                </ul>
              </div>

              <div className="flex gap-3 rounded-2xl border border-primary/15 bg-[#f0f7f3] p-5">
                <ShieldCheck className="h-8 w-8 shrink-0 text-primary" />
                <div className="text-sm">
                  <p className="font-bold text-foreground">Centre agréé par l&apos;État</p>
                  <p className="mt-1 text-muted">
                    Agrément n° {SITE.agrement}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Onglets */}
      <section className="border-t border-border bg-[#f8faf7] py-10 lg:py-12">
        <Container>
          <div className="flex gap-1 overflow-x-auto border-b border-border bg-white px-2 sm:gap-0 sm:px-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "shrink-0 border-b-2 px-4 py-3.5 text-sm font-semibold transition-colors sm:px-6",
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
            {activeTab === "description" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    À propos de cette formation
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">{formation.description}</p>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="font-bold text-foreground">Vous allez apprendre à :</h3>
                    <ul className="mt-4 space-y-2.5">
                      {formation.learnings.map((l) => (
                        <li key={l} className="flex gap-2.5 text-sm">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Compétences développées</h3>
                    <ul className="mt-4 space-y-3">
                      {skills.map((skill, i) => {
                        const Icon = SKILL_ICONS[i % SKILL_ICONS.length];
                        return (
                          <li key={skill} className="flex gap-3 text-sm">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="pt-1.5">{skill}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "programme" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold">Programme de formation</h2>
                {programmeImage ? (
                  <div className="-mx-2 overflow-x-auto sm:mx-0">
                    <div className="min-w-0 rounded-xl border border-border bg-white p-2 sm:p-3">
                      <Image
                        src={programmeImage}
                        alt={`Schéma du processus — ${formation.name}`}
                        width={1536}
                        height={1024}
                        className="h-auto w-full min-w-[280px] object-contain"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                ) : (
                <ol className="space-y-4">
                  {formation.learnings.map((l, i) => (
                    <li key={l} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <div className="pt-0.5">
                        <p className="font-semibold">Module {i + 1}</p>
                        <p className="mt-1 text-sm text-muted">{l}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                )}
              </div>
            )}

            {activeTab === "debouches" && (
              <div>
                <h2 className="text-xl font-bold">Débouchés professionnels</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {formation.careers.map((c) => (
                    <li
                      key={c}
                      className="flex gap-3 rounded-xl border border-border bg-[#f8faf7] p-4 text-sm"
                    >
                      <GraduationCap className="h-5 w-5 shrink-0 text-accent" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "conditions" && (
              <div>
                <h2 className="text-xl font-bold">Conditions d&apos;inscription</h2>
                <ul className="mt-6 space-y-2.5">
                  {formation.conditions.map((c) => (
                    <li key={c} className="flex gap-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "informations" && (
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-xl font-bold">Informations pratiques</h2>
                  <ul className="mt-4 space-y-3">
                    {metaItems.map((item) => (
                      <li key={item.label} className="flex justify-between gap-4 border-b border-border/60 py-2 text-sm last:border-0">
                        <span className="text-muted">{item.label}</span>
                        <span className="font-semibold text-right">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Tarifs</h2>
                  <p className="mt-2 text-2xl font-bold text-primary">
                    {formatFCFA(formation.cost)}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Inscription : {formatFCFA(formation.registrationFee)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Débouchés + conditions + image */}
      <section className="bg-white py-12 lg:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-xl font-bold">Débouchés &amp; opportunités</h2>
              <ul className="mt-5 space-y-3">
                {formation.careers.map((c) => (
                  <li key={c} className="flex gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={careerImage}
                  alt="Débouchés professionnels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold">Conditions d&apos;inscription</h2>
              <ul className="mt-5 space-y-2.5">
                {formation.conditions.map((c) => (
                  <li key={c} className="flex gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <SimilarFormationsCarousel formations={similar} />
    </>
  );
}
