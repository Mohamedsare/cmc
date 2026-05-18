"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl bg-primary/10 p-8 text-center">
        <p className="font-semibold text-primary">Message préparé !</p>
        <p className="mt-2 text-sm text-muted">
          Contactez-nous par WhatsApp ou téléphone pour une réponse rapide.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-5 rounded-2xl border border-border bg-white p-6 shadow-sm"
    >
      <div>
        <Label htmlFor="cname">Nom complet</Label>
        <Input id="cname" required />
      </div>
      <div>
        <Label htmlFor="cphone">Téléphone</Label>
        <Input id="cphone" required type="tel" />
      </div>
      <div>
        <Label htmlFor="cemail">Email</Label>
        <Input id="cemail" type="email" />
      </div>
      <div>
        <Label htmlFor="cmsg">Message</Label>
        <Textarea id="cmsg" required rows={5} />
      </div>
      <Button type="submit" className="w-full">
        Envoyer le message
      </Button>
    </form>
  );
}