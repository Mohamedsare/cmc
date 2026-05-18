import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { FooterSocialLinks } from "@/components/layout/FooterSocialLinks";
import { NAV_LINKS, SITE } from "@/lib/constants";

const domainLinks = ["Mines", "BTP", "Industrie", "Commerce", "Électricité", "HSE"];

export function Footer() {
  return (
    <footer className="bg-[#0f2419] text-white">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-0">
              <Logo height={56} />
              <div className="-ml-2">
                <p className="text-sm font-bold leading-tight">CMC FORMATION</p>
                <p className="text-xs text-white/70">{SITE.name}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Centre de formations professionnelles basé à Koudougou, spécialisé dans
              les métiers des mines, du commerce, de l&apos;industrie, de
              l&apos;électricité, de la gestion et de la conduite d&apos;engins lourds.
            </p>
            <div className="mt-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/50">
                Suivez-nous
              </p>
              <FooterSocialLinks />
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Liens rapides</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-primary-light">
                      {link.label}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Nos domaines</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {domainLinks.map((d) => (
                <li key={d}>
                  <Link href="/formations" className="hover:text-primary-light">
                    {d}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Contactez-nous</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
                <span>
                  {SITE.phones.join(" / ")}
                  <br />
                  {SITE.landlines.join(" / ")}
                </span>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary-light">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/50">
        <Container>
          © 2026 {SITE.name}. Tous droits réservés.
          <br />
          Développé avec professionnalisme pour la formation professionnelle au Burkina
          Faso.
        </Container>
      </div>
    </footer>
  );
}
