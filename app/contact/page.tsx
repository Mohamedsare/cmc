import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE, whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | CMC Formation Koudougou",
  description: "Contactez CMC Formation Koudougou par téléphone, WhatsApp ou email.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Contactez-nous"
        description="Notre équipe est disponible pour répondre à toutes vos questions."
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">{SITE.name}</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted">{SITE.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <span>
                    {SITE.phones.join(" / ")}
                    <br />
                    Fixe : {SITE.landlines.join(" / ")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                    {SITE.email}
                  </a>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}>Appeler</a>
                </Button>
                <Button variant="whatsapp" asChild>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`mailto:${SITE.email}`}>Email</a>
                </Button>
              </div>
              <div className="mt-8 flex h-48 items-center justify-center rounded-2xl border border-dashed border-border bg-gray-50 text-muted">
                Carte — Koudougou, Quartier Burkina
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}