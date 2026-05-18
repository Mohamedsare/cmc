"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, HardHat, Users } from "lucide-react";
import { Container } from "@/components/shared/Container";

const stats = [
  { icon: GraduationCap, value: "+20", label: "filières professionnelles" },
  { icon: Users, value: "+1000", label: "apprenants formés" },
  { icon: HardHat, value: "100%", label: "formations pratiques" },
  { icon: Award, value: "Insertion", label: "accompagnement professionnel" },
];

export function StatsSection() {
  return (
    <section className="bg-[#1a5c3a] py-12 text-white">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="mx-auto mb-3 h-10 w-10 text-primary-light" />
              <p className="text-2xl font-bold sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
