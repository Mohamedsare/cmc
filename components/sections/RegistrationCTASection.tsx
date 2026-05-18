import Image from "next/image";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";

export function RegistrationCTASection() {
  return (
    <section className="py-6">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-[#1a5c3a] shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_90%,rgba(255,255,255,0.06),transparent_55%)]" />

          <div className="relative flex items-center gap-3 px-4 py-3 sm:gap-4 sm:px-5 sm:py-4 lg:gap-5 lg:px-6">
            <div className="relative hidden h-24 w-20 shrink-0 self-center overflow-hidden sm:block md:h-28 md:w-24">
              <Image
                src="/images/cta-reference.png"
                alt="Apprenant CMC Formation"
                fill
                className="scale-[2.4] object-cover object-[8%_100%]"
                sizes="112px"
              />
            </div>

            <div className="min-w-0 flex-1 self-center">
              <h2 className="text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl">
                Prêt à construire votre avenir ?
              </h2>
              <p className="mt-1 text-xs leading-snug text-white/90 sm:text-sm">
                Rejoignez des centaines d&apos;apprenants déjà formés à CMC Formation
                Koudougou. L&apos;inscription est simple et rapide !
              </p>
              <div className="mt-2.5 flex flex-col gap-2 sm:flex-row sm:items-center sm:flex-wrap">
                <Button
                  variant="accent"
                  size="sm"
                  className="h-9 rounded-lg px-4 text-xs font-semibold sm:text-sm"
                  asChild
                >
                  <Link href="/inscription">Demander une inscription</Link>
                </Button>
                <Button
                  size="sm"
                  className="h-9 rounded-lg border-0 bg-white px-4 text-xs font-semibold text-primary hover:bg-gray-50 sm:text-sm"
                  asChild
                >
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                    Nous contacter sur WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative hidden h-20 w-16 shrink-0 self-center lg:block">
              <GraduationCap
                className="absolute top-0 left-1/2 h-10 w-10 -translate-x-1/2 text-[#243b5c] drop-shadow-md"
                strokeWidth={1.2}
              />
              <div className="absolute right-0 bottom-0 h-10 w-14 rotate-[-10deg] rounded-sm bg-gradient-to-br from-white to-gray-100 shadow-md">
                <div className="absolute left-1/2 top-[40%] h-1.5 w-7 -translate-x-1/2 rounded-sm bg-red-500" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}