import {
  Mountain,
  Truck,
  Zap,
  Factory,
  BriefcaseBusiness,
  ShieldCheck,
  GraduationCap,
  Users,
  Wrench,
  HardHat,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Mountain,
  Truck,
  Zap,
  Factory,
  BriefcaseBusiness,
  ShieldCheck,
  GraduationCap,
  Users,
  Wrench,
  HardHat,
};

interface DomainIconProps {
  name: string;
  className?: string;
}

export function DomainIcon({ name, className = "h-6 w-6" }: DomainIconProps) {
  const Icon = iconMap[name] ?? GraduationCap;
  return <Icon className={className} />;
}
