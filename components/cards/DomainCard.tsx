"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DomainIcon } from "@/components/shared/DomainIcon";
import type { Domain } from "@/types";

interface DomainCardProps {
  domain: Domain;
  index?: number;
}

export function DomainCard({ domain, index = 0 }: DomainCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        href={`/formations?domain=${domain.id}`}
        className="card-hover group block overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
      >
        <div className={`h-32 bg-gradient-to-br ${domain.gradient}`}>
          <div className="flex h-full items-center justify-center">
            <DomainIcon name={domain.icon} className="h-12 w-12 text-white/90" />
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-bold group-hover:text-primary">{domain.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted">{domain.description}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Voir les formations <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}