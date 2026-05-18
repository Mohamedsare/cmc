"use client";

import Link from "next/link";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InscriptionMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/10 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <Button
        variant="accent"
        size="lg"
        className="w-full gap-2 rounded-xl shadow-md"
        asChild
      >
        <Link href="#inscription-form">
          <UserPlus className="h-4 w-4" />
          Demande d&apos;inscription
        </Link>
      </Button>
    </div>
  );
}
