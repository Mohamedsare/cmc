import Image from "next/image";
import { getFormationImage } from "@/data/formation-images";
import { cn } from "@/lib/utils";

const domainGradients: Record<string, string> = {
  mines: "from-stone-700 to-amber-800",
  "conduite-engins": "from-orange-700 to-amber-600",
  electricite: "from-yellow-600 to-orange-500",
  industrie: "from-slate-700 to-slate-500",
  commerce: "from-teal-700 to-cyan-600",
  hse: "from-green-700 to-lime-600",
  informatique: "from-indigo-700 to-purple-600",
  logistique: "from-blue-700 to-cyan-600",
};

interface FormationCoverProps {
  slug: string;
  domain: string;
  domainLabel: string;
  name: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function FormationCover({
  slug,
  domain,
  domainLabel,
  name,
  className,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
}: FormationCoverProps) {
  const src = getFormationImage(slug);
  const gradient = domainGradients[domain] ?? "from-emerald-700 to-emerald-500";

  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <GradientFallback
      gradient={gradient}
      domainLabel={domainLabel}
      className={className}
    />
  );
}

function GradientFallback({
  gradient,
  domainLabel,
  className,
}: {
  gradient: string;
  domainLabel: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center bg-gradient-to-br",
        gradient,
        className
      )}
      aria-hidden
    >
      <span className="text-6xl font-bold text-white opacity-20">
        {domainLabel[0]}
      </span>
    </div>
  );
}
