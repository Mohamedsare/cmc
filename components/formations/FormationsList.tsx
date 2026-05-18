"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, RotateCcw, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CourseCard } from "@/components/cards/CourseCard";
import { Container } from "@/components/shared/Container";
import { formations } from "@/data/formations";
import { domainFilters } from "@/data/domains";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";

export function FormationsList() {
  const searchParams = useSearchParams();
  const initialDomain = searchParams.get("domain") ?? "all";

  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState<string>(initialDomain);
  const [duration, setDuration] = useState("all");

  const filtered = useMemo(() => {
    return formations.filter((f) => {
      const matchSearch =
        !search ||
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.domainLabel.toLowerCase().includes(search.toLowerCase());
      const matchDomain = domain === "all" || f.domain === domain;
      const matchDuration =
        duration === "all" ||
        (duration === "04" && f.duration.includes("04")) ||
        (duration === "06-12" && f.duration.includes("06"));
      return matchSearch && matchDomain && matchDuration;
    });
  }, [search, domain, duration]);

  const reset = () => {
    setSearch("");
    setDomain("all");
    setDuration("all");
  };

  return (
    <section className="py-12">
      <Container>
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <Input
              placeholder="Rechercher une formation..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={domain} onValueChange={setDomain}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Tous les domaines" />
            </SelectTrigger>
            <SelectContent>
              {domainFilters.map((d) => (
                <SelectItem key={d.id} value={d.id}>
                  {d.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Toutes les durées" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les durées</SelectItem>
              <SelectItem value="04">04 mois</SelectItem>
              <SelectItem value="06-12">06 à 12 mois</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={reset}>
            <RotateCcw className="h-4 w-4" />
            Réinitialiser
          </Button>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {domainFilters.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setDomain(d.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                domain === d.id
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white hover:border-primary hover:text-primary"
              )}
            >
              {d.label}
            </button>
          ))}
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm text-muted">
            <Calendar className="h-4 w-4" />
            {filtered.length} formation{filtered.length > 1 ? "s" : ""} disponible
            {filtered.length > 1 ? "s" : ""}
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="py-12 text-center text-muted">
            Aucune formation ne correspond à votre recherche.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((f, i) => (
              <CourseCard key={f.slug} formation={f} index={i} />
            ))}
          </div>
        )}

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-primary/10 p-8 text-center sm:flex-row sm:text-left">
          <p className="flex-1 text-sm">
            Vous ne trouvez pas la formation qui vous intéresse ? Contactez-nous sur
            WhatsApp, nous vous aiderons à trouver la formation adaptée à vos objectifs.
          </p>
          <Button variant="whatsapp" asChild>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Nous contacter sur WhatsApp
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
