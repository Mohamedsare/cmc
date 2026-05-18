"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formations } from "@/data/formations";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { registrationWhatsAppMessage, whatsappLink } from "@/lib/constants";

const fieldClass =
  "h-11 rounded-xl border-border/80 bg-[#f8faf7]/50 pl-10 focus-visible:bg-white";

function FieldIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted/70">
      {children}
    </span>
  );
}

export function RegistrationForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("formation") ?? "";

  const [submitted, setSubmitted] = useState(false);
  const [formation, setFormation] = useState(preselected);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    level: "",
    message: "",
  });

  const selectedFormation = formations.find((f) => f.slug === formation);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative max-w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-1 hidden rounded-[1.35rem] bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 opacity-60 blur-sm sm:block"
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white shadow-lg shadow-primary/5 ring-1 ring-black/[0.04] sm:shadow-xl">
        <motion.div
          className="h-1.5 bg-gradient-to-r from-primary via-emerald-500 to-accent"
        />

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
              >
                <CheckCircle2 className="h-9 w-9 text-primary" />
              </motion.div>
              <h2 className="text-xl font-bold text-foreground">Demande prête !</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Votre demande a été préparée. Finalisez votre inscription en un clic sur WhatsApp —
                notre équipe vous répond rapidement.
              </p>
              <Button variant="whatsapp" className="mt-6 w-full gap-2" size="lg" asChild>
                <a
                  href={whatsappLink(registrationWhatsAppMessage(selectedFormation?.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  Finaliser sur WhatsApp
                </a>
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 sm:p-6 lg:p-7"
            >
              <motion.div
                className="mb-6"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  Étape 1 sur 2
                </p>
                <h2 className="mt-1 text-xl font-extrabold tracking-tight text-foreground">
                  Demande d&apos;inscription
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Remplissez ce formulaire — nous vous guidons ensuite sur WhatsApp pour finaliser.
                </p>
              </motion.div>

              <motion.div
                className="mb-5 flex items-center gap-2 rounded-xl border border-primary/15 bg-primary/5 px-3 py-2.5"
              >
                <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
                <p className="text-xs text-muted">
                  Données utilisées uniquement pour traiter votre inscription.
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Nom complet *
                  </Label>
                  <div className="relative mt-1.5">
                    <FieldIcon>
                      <User className="h-4 w-4" />
                    </FieldIcon>
                    <Input
                      id="name"
                      required
                      className={fieldClass}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div>
                    <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Téléphone / WhatsApp *
                    </Label>
                    <div className="relative mt-1.5">
                      <FieldIcon>
                        <Phone className="h-4 w-4" />
                      </FieldIcon>
                      <Input
                        id="phone"
                        required
                        type="tel"
                        className={fieldClass}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Email
                    </Label>
                    <div className="relative mt-1.5">
                      <FieldIcon>
                        <Mail className="h-4 w-4" />
                      </FieldIcon>
                      <Input
                        id="email"
                        type="email"
                        className={fieldClass}
                        placeholder="optionnel"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div>
                    <Label htmlFor="city" className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Ville *
                    </Label>
                    <div className="relative mt-1.5">
                      <FieldIcon>
                        <MapPin className="h-4 w-4" />
                      </FieldIcon>
                      <Input
                        id="city"
                        required
                        className={fieldClass}
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="level" className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Niveau d&apos;étude *
                    </Label>
                    <div className="relative mt-1.5">
                      <FieldIcon>
                        <GraduationCap className="h-4 w-4" />
                      </FieldIcon>
                      <Input
                        id="level"
                        required
                        placeholder="BEPC, Bac..."
                        className={fieldClass}
                        value={form.level}
                        onChange={(e) => setForm({ ...form, level: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Formation souhaitée *
                  </Label>
                  <Select value={formation} onValueChange={setFormation} required>
                    <SelectTrigger className="mt-1.5 h-11 w-full rounded-xl border-border/80 bg-[#f8faf7]/50">
                      <SelectValue placeholder="Choisir une formation" />
                    </SelectTrigger>
                    <SelectContent>
                      {formations.map((f) => (
                        <SelectItem key={f.slug} value={f.slug}>
                          {f.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Message
                  </Label>
                  <div className="relative mt-1.5">
                    <MessageSquare className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-muted/70" />
                    <Textarea
                      id="message"
                      className="min-h-[88px] rounded-xl border-border/80 bg-[#f8faf7]/50 pl-10 pt-3 focus-visible:bg-white"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Questions, disponibilités..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 rounded-xl bg-gradient-to-r from-primary to-emerald-600 shadow-md shadow-primary/20 transition-shadow hover:shadow-lg hover:shadow-primary/25"
                >
                  <Send className="h-4 w-4" />
                  Envoyer ma demande
                </Button>
              </form>

              <motion.div
                className="mt-6 rounded-xl border border-dashed border-border bg-[#f8faf7]/80 p-4"
              >
                <p className="text-sm font-semibold text-foreground">Après l&apos;envoi</p>
                <p className="mt-1 text-xs text-muted">
                  Étape 2 : contactez-nous sur WhatsApp pour confirmer et payer l&apos;inscription.
                </p>
                <Button
                  variant="secondary"
                  className="mt-3 w-full gap-2 rounded-xl border border-border bg-white hover:bg-[#f8faf7]"
                  asChild
                >
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="text-[#25D366]" />
                    Nous contacter sur WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
