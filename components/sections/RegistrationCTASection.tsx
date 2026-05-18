import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { whatsappLink } from "@/lib/constants";

export function RegistrationCTASection() {
  return (
    <section className="px-4 py-8 sm:py-10">
      <Container className="max-w-lg px-0 sm:max-w-7xl sm:px-4 lg:max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-[#1a5c3a] shadow-lg lg:overflow-visible">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_90%,rgba(255,255,255,0.05),transparent_45%)]" />
          </div>

          {/* Apprenant — desktop : débordement sans agrandir la carte */}
          <div className="pointer-events-none absolute bottom-0 left-3 z-10 hidden h-[22rem] w-52 lg:block xl:left-5 xl:h-[24rem] xl:w-60">
            <Image
              src="/images/cta-etudiant.png"
              alt=""
              fill
              className="object-contain object-bottom"
              sizes="240px"
              priority
            />
          </div>

          <div className="relative flex flex-col items-center px-4 pb-5 pt-3 text-center lg:flex-row lg:items-center lg:gap-6 lg:px-6 lg:py-4 lg:pl-56 lg:text-left xl:pl-64">
            {/* Apprenant — mobile / tablette : dans le flux */}
            <div className="relative -mt-1 h-40 w-[9.5rem] shrink-0 sm:h-44 sm:w-40 lg:hidden">
              <Image
                src="/images/cta-etudiant.png"
                alt="Apprenant satisfait — CMC Formation Koudougou"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 640px) 152px, 160px"
                priority
              />
            </div>

            <div className="mt-3 w-full min-w-0 lg:mt-0 lg:flex-1">
              <h2 className="text-xl font-bold leading-snug text-white sm:text-2xl lg:text-[1.65rem] lg:leading-tight">
                Prêt à construire votre avenir ?
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/90 lg:mx-0 lg:max-w-none lg:text-[0.9375rem]">
                Rejoignez des centaines d&apos;apprenants déjà formés à CMC Formation
                Koudougou. L&apos;inscription est simple et rapide !
              </p>

              <div className="mx-auto mt-5 flex w-full max-w-sm flex-col gap-2.5 sm:max-w-md lg:mx-0 lg:max-w-none lg:flex-row lg:flex-wrap lg:gap-3">
                <Button
                  variant="accent"
                  size="lg"
                  className="h-12 w-full rounded-xl text-sm font-semibold shadow-md lg:h-11 lg:w-auto lg:px-6"
                  asChild
                >
                  <Link href="/inscription">Demander une inscription</Link>
                </Button>
                <Button
                  size="lg"
                  className="h-12 w-full rounded-xl border-0 bg-white text-sm font-semibold text-primary shadow-sm hover:bg-gray-50 lg:h-11 lg:w-auto lg:px-6"
                  asChild
                >
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                    Nous contacter sur WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative mt-1 h-24 w-32 shrink-0 sm:h-28 sm:w-36 lg:mt-0 lg:h-28 lg:w-36">
              <Image
                src="/images/cta-diplome.png"
                alt="Diplôme et réussite professionnelle"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 144px, 144px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
