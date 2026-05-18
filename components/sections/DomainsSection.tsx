import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { DomainCard } from "@/components/cards/DomainCard";
import { domains } from "@/data/domains";

export function DomainsSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          label="Nos domaines"
          title="Des formations adaptées aux besoins du marché"
          description="Découvrez nos filières professionnelles dans les secteurs porteurs du Burkina Faso."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, i) => (
            <DomainCard key={domain.id} domain={domain} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}