"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { DomainIcon } from "@/components/shared/DomainIcon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { galleryItems } from "@/data/gallery";

const previewItems = galleryItems.slice(0, 6);

export function GallerySection() {
  return (
    <section id="galerie" className="bg-gray-50 py-20">
      <Container>
        <SectionHeader
          label="Galerie"
          title="La vie du centre en images"
          description="Découvrez l'ambiance de CMC Formation Koudougou — formations, ateliers et vie du centre."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {previewItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient}`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                <DomainIcon name={item.icon} className="mb-4 h-12 w-12 opacity-90" />
                <p className="text-center text-lg font-bold">{item.title}</p>
                <p className="mt-1 text-sm text-white/80">{item.category}</p>
              </div>
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/galerie">
              Voir toute la galerie
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
