"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Banknote,
  CreditCard,
  Info,
  Layers,
  Sparkles,
  Wrench,
  Truck,
} from "lucide-react";
import { formatFCFA } from "@/lib/utils";
import {
  commerceFilieres,
  enginsRows,
  technicalExamples,
  technicalTiers,
} from "@/data/inscription-fees";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function formatInstallments(amounts: number[]) {
  return amounts.map((a) => formatFCFA(a));
}

const infoCards = [
  {
    icon: Banknote,
    title: "Frais d'inscription",
    value: "25 000 FCFA",
    desc: "Payable une seule fois à l'inscription",
    className: "border-primary/15 from-primary/8 to-white",
    iconClass: "bg-primary/10 text-primary",
  },
  {
    icon: CreditCard,
    title: "Paiement flexible",
    value: "Par tranches",
    desc: "Étalez le coût selon votre filière et votre rythme",
    className: "border-accent/25 from-accent/8 to-white",
    iconClass: "bg-accent/10 text-accent",
  },
  {
    icon: Award,
    title: "Certificat obtenu",
    value: "Professionnel",
    desc: "Délivré à l'issue de la formation validée",
    className: "border-emerald-200 from-emerald-50/80 to-white",
    iconClass: "bg-emerald-100 text-emerald-700",
  },
];

export function PricingTablesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="space-y-8 sm:space-y-10 lg:space-y-12">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        custom={0}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles className="h-4 w-4 text-primary" />
          </span>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Transparence totale
          </p>
        </div>
        <h3 className="mt-2 text-lg font-extrabold tracking-tight text-foreground sm:text-2xl">
          Informations générales
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Tous les montants sont indiqués en FCFA. Contactez-nous pour confirmer les tarifs avant
          de vous inscrire.
        </p>

        <motion.div
          className="mt-6 grid gap-4 sm:grid-cols-3"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-4 shadow-sm transition-shadow sm:p-5 sm:hover:shadow-md ${card.className}`}
            >
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${card.iconClass}`}
              >
                <card.icon className="h-5 w-5" />
              </div>
              <p className="font-bold text-foreground">{card.title}</p>
              <p className="mt-1 text-lg font-extrabold text-primary">{card.value}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <PricingTableBlock
        index={1}
        inView={inView}
        icon={Layers}
        title="Formations commerciales & services"
        subtitle="Durée : 06 à 08 mois"
        headerClass="from-primary to-emerald-600"
        chipClass="bg-primary/10 text-primary border-primary/15"
        chips={commerceFilieres}
        boxTitle="Filières concernées"
        columns={[
          "Frais de formation",
          "Frais d'inscription",
          "1ère tranche",
          "2ème tranche",
          "3ème tranche",
          "Niveau requis",
        ]}
        rows={[
          [
            "250 000 FCFA",
            "25 000 FCFA",
            "75 000 FCFA",
            "75 000 FCFA",
            "75 000 FCFA",
            "6e à Bac et plus",
          ],
        ]}
      />

      <PricingTableBlock
        index={2}
        inView={inView}
        icon={Wrench}
        title="Formations techniques & industrielles"
        subtitle="Durée : 06 à 12 mois"
        headerClass="from-accent to-amber-500"
        chipClass="bg-accent/10 text-accent border-accent/20"
        chips={technicalExamples}
        boxTitle="Exemples de formations"
        columns={[
          "Catégorie",
          "Frais de formation",
          "Frais d'inscription",
          "1ère tranche",
          "2ème tranche",
          "3ème tranche",
          "4ème tranche",
          "Niveau requis",
        ]}
        rows={technicalTiers.map((t) => [
          t.label,
          formatFCFA(t.cost),
          formatFCFA(t.registration),
          ...formatInstallments(t.installments),
          t.level,
        ])}
        highlightFirstCol
      />

      <PricingTableBlock
        index={3}
        inView={inView}
        icon={Truck}
        title="Conduite d'engins lourds"
        subtitle="Durée : 04 mois"
        headerClass="from-[#1a5c3a] to-primary"
        chipClass="bg-primary/10 text-primary border-primary/15"
        chips={[]}
        boxTitle="Remarque importante"
        boxContent="Les frais peuvent être révisés par la direction. Contactez le centre pour confirmer les montants avant inscription."
        columns={[
          "Formation",
          "Frais de formation",
          "Inscription",
          "1ère tranche",
          "2ème tranche",
          "3ème tranche",
          "4ème tranche",
        ]}
        rows={enginsRows.map((r) => [
          r.name,
          formatFCFA(r.cost),
          formatFCFA(r.registration),
          ...formatInstallments(r.installments),
        ])}
        compactFirstCol
        isNote
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.35 }}
        className="flex gap-3 rounded-xl border border-primary/15 bg-gradient-to-r from-primary/5 via-white to-accent/5 p-4 shadow-sm sm:gap-4 sm:rounded-2xl sm:p-5"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
          <Info className="h-5 w-5 text-primary" />
        </span>
        <p className="text-sm leading-relaxed text-muted">
          Les montants indiqués sont ceux en vigueur à CMC Formation Koudougou. Pour toute question
          sur les frais ou les modalités de paiement, contactez-nous par téléphone ou WhatsApp.
        </p>
      </motion.div>
    </div>
  );
}

interface PricingTableBlockProps {
  index: number;
  inView: boolean;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  headerClass: string;
  chipClass: string;
  chips: string[];
  boxTitle: string;
  boxContent?: string;
  columns: string[];
  rows: string[][];
  compactFirstCol?: boolean;
  highlightFirstCol?: boolean;
  isNote?: boolean;
}

function PricingTableBlock({
  index,
  inView,
  icon: Icon,
  title,
  subtitle,
  headerClass,
  chipClass,
  chips,
  boxTitle,
  boxContent,
  columns,
  rows,
  compactFirstCol,
  highlightFirstCol,
  isNote,
}: PricingTableBlockProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="overflow-hidden rounded-2xl border border-border/80 bg-white shadow-sm ring-1 ring-black/[0.03]"
    >
      <motion.div className={`bg-gradient-to-r px-4 py-3 text-white sm:px-5 sm:py-4 ${headerClass}`}>
        <div className="flex items-start gap-2.5 sm:gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 sm:h-10 sm:w-10 sm:rounded-xl">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
          </span>
          <div className="min-w-0">
            <h3 className="text-base font-bold leading-snug sm:text-lg">{title}</h3>
            <p className="mt-0.5 text-xs text-white/90 sm:text-sm">{subtitle}</p>
          </div>
        </div>
      </motion.div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-[#f8faf7]">
              {columns.map((col) => (
                <th
                  key={col}
                  className="whitespace-nowrap px-4 py-3.5 text-xs font-bold uppercase tracking-wide text-foreground/80"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-border/60 transition-colors last:border-0 hover:bg-primary/[0.03]"
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3.5 ${
                      j === 0 && (compactFirstCol || highlightFirstCol)
                        ? "max-w-[200px] font-semibold text-foreground"
                        : j > 0 && j < row.length - 1 && /FCFA/.test(cell)
                          ? "font-medium text-primary"
                          : "text-muted"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 p-3 md:hidden">
        {rows.map((row, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-[#f8faf7]/80 p-3"
          >
            {row.map((cell, j) => (
              <div
                key={j}
                className={`flex justify-between gap-2 border-b border-border/50 py-2.5 last:border-0 ${
                  j === 0 ? "flex-col items-stretch border-b border-border pb-3" : "items-center"
                }`}
              >
                {j === 0 ? (
                  <p className="text-sm font-bold leading-snug text-foreground">{cell}</p>
                ) : (
                  <>
                    <span className="max-w-[48%] text-[11px] leading-tight text-muted">
                      {columns[j]}
                    </span>
                    <span
                      className={`shrink-0 text-right text-sm ${
                        /FCFA/.test(cell) ? "font-semibold text-primary" : "font-medium text-foreground"
                      }`}
                    >
                      {cell}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-border/60 bg-[#f8faf7]/50 px-4 py-3 sm:px-5 sm:py-4">
        <p className="text-sm font-bold text-foreground">{boxTitle}</p>
        {isNote && boxContent ? (
          <p className="mt-2 text-xs leading-relaxed text-muted">{boxContent}</p>
        ) : (
          <ChipList chips={chips} chipClass={chipClass} />
        )}
      </div>
    </motion.article>
  );
}

const MOBILE_CHIP_LIMIT = 6;

function ChipList({ chips, chipClass }: { chips: string[]; chipClass: string }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = chips.length > MOBILE_CHIP_LIMIT;
  const visible = expanded || !hasMore ? chips : chips.slice(0, MOBILE_CHIP_LIMIT);

  return (
    <div className="mt-3">
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {visible.map((chip) => (
          <span
            key={chip}
            className={`rounded-full border px-2 py-0.5 text-[10px] font-medium leading-tight sm:px-2.5 sm:py-1 sm:text-[11px] ${chipClass}`}
          >
            {chip}
          </span>
        ))}
      </div>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-xs font-semibold text-primary hover:underline sm:text-sm"
        >
          {expanded ? "Voir moins" : `Voir les ${chips.length} filières`}
        </button>
      )}
    </div>
  );
}
