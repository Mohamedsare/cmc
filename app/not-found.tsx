import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold">Page introuvable</h1>
        <p className="mt-2 text-muted">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Button className="mt-8" asChild>
          <Link href="/">Retour à l&apos;accueil</Link>
        </Button>
      </Container>
    </section>
  );
}
