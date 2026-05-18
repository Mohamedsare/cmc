"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FormationCover } from "@/components/shared/FormationCover";
import { formatFCFA } from "@/lib/utils";
import type { Formation } from "@/types";

interface CourseCardProps {
  formation: Formation;
  index?: number;
}

export function CourseCard({ formation, index = 0 }: CourseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card-hover flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
    >
      <div className="relative h-40 overflow-hidden">
        <FormationCover
          slug={formation.slug}
          domain={formation.domain}
          domainLabel={formation.domainLabel}
          name={formation.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <Badge className="absolute right-3 top-3 bg-white text-primary">
          <Clock className="mr-1 h-3 w-3" />
          {formation.duration}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          {formation.domainLabel}
        </span>
        <h3 className="mt-1 line-clamp-2 text-lg font-bold">{formation.name}</h3>
        <p className="mt-2 text-xl font-bold text-primary">{formatFCFA(formation.cost)}</p>
        <p className="text-sm text-muted">
          Inscription : {formatFCFA(formation.registrationFee)}
        </p>
        <div className="mt-4 flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link href={`/formations/${formation.slug}`}>Voir détails</Link>
          </Button>
          <Button size="sm" className="flex-1" asChild>
            <Link href={`/inscription?formation=${formation.slug}`}>S&apos;inscrire</Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
