import { Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="hidden bg-[#1a5c3a] text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
        <p>
          {SITE.agrementLabel} — Agrément n° {SITE.agrement}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 hover:text-primary-light"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phones[0]} / {SITE.phones[1]}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-1.5 hover:text-primary-light"
          >
            <Mail className="h-3.5 w-3.5" />
            {SITE.email}
          </a>
        </div>
      </div>
    </div>
  );
}
