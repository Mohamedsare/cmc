import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { SITE, whatsappLink } from "@/lib/constants";

export function ContactSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-10 rounded-3xl border border-border bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-12">
          <div>
            <h2 className="text-2xl font-bold">Contact rapide</h2>
            <p className="mt-2 text-muted">
              Une question ? Contactez CMC Formation Koudougou dès maintenant.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">{SITE.phones.join(" / ")}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href={`mailto:${SITE.email}`} className="text-sm hover:text-primary">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Page contact complète</Link>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}>Appeler</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
