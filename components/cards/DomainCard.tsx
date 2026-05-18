"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DomainIcon } from "@/components/shared/DomainIcon";
import { getDomainImage } from "@/data/domain-images";
import type { Domain } from "@/types";

interface DomainCardProps {
  domain: Domain;
  index?: number;
}

export function DomainCard({ domain, index = 0 }: DomainCardProps) {
  const imageSrc = getDomainImage(domain.id);

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
        <div className="relative h-36 overflow-hidden sm:h-40">
          {imageSrc ? (
            <>
              <Image
                src={imageSrc}
                alt={domain.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2419]/75 via-[#0f2419]/25 to-transparent" />
              <span className="absolute bottom-3 left-3 rounded-lg bg-primary/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                {domain.shortName}
              </span>
            </>
          ) : (
            <div className={`flex h-full items-center justify-center bg-gradient-to-br ${domain.gradient}`}>
              <DomainIcon name={domain.icon} className="h-12 w-12 text-white/90" />
            </div>
          )}
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
