"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Home,
  Info,
  Menu,
  Phone,
  UserPlus,
  Wallet,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { TopBar } from "./TopBar";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  "/": Home,
  "/formations": BookOpen,
  "/a-propos": Info,
  "/inscription": Wallet,
  "/contact": Phone,
};

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const mobileMenu = mounted
    ? createPortal(
        <AnimatePresence>
          {open && (
            <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998] bg-[#0f2419]/50 backdrop-blur-sm lg:hidden"
            >
              <button
                type="button"
                className="absolute inset-0"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
              />
            </motion.div>
            <motion.nav
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed right-0 top-0 z-[9999] flex h-full w-[min(88vw,22rem)] flex-col bg-white shadow-2xl lg:hidden"
            >
              <motion.div className="border-b border-border bg-white px-5 py-5">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-0"
                  >
                    <Logo height={40} className="shrink-0" />
                    <div className="-ml-1">
                      <p className="text-sm font-bold leading-tight text-primary">
                        CMC Formation
                      </p>
                      <p className="text-[11px] text-muted">Koudougou</p>
                    </div>
                  </Link>
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-primary/5"
                    onClick={() => setOpen(false)}
                    aria-label="Fermer le menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-widest text-muted">
                  Navigation
                </p>
                {NAV_LINKS.map((link) => {
                  const Icon = NAV_ICONS[link.href] ?? Home;
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "mb-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                        active
                          ? "bg-primary text-white shadow-md shadow-primary/20"
                          : "text-foreground hover:bg-primary/5 hover:text-primary"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-lg",
                          active ? "bg-white/20" : "bg-primary/10 text-primary"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="space-y-3 border-t border-border bg-[#f8faf7] p-4">
                <Button variant="accent" className="w-full gap-2 rounded-xl shadow-md" asChild>
                  <Link href="/inscription" onClick={() => setOpen(false)}>
                    <UserPlus className="h-4 w-4" />
                    S&apos;inscrire
                  </Link>
                </Button>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 py-2.5 text-sm font-semibold text-[#1a7a3a] transition-colors hover:bg-[#25D366]/15"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </motion.nav>
            </>
          )}
        </AnimatePresence>,
        document.body
      )
    : null;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[box-shadow,background,border-color] duration-300",
        scrolled
          ? "border-b border-primary/10 bg-white/95 shadow-md shadow-primary/[0.06] backdrop-blur-xl"
          : "border-b border-primary/5 bg-white/90 backdrop-blur-md"
      )}
    >
      <TopBar />

      {/* Bandeau mobile — intégré au header */}
      <div className="border-b border-primary/10 bg-primary lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5 text-[11px] text-white/95 sm:px-6">
          <p className="truncate font-medium">
            Centre agréé · n° {SITE.agrement}
          </p>
          <a
            href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
            className="flex shrink-0 items-center gap-1 rounded-full bg-white/15 px-2.5 py-0.5 font-semibold transition-colors hover:bg-white/25"
          >
            <Phone className="h-3 w-3" />
            Appeler
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 flex-1 items-center gap-0 sm:flex-none"
        >
          <Logo
            height={42}
            className="h-[42px] w-auto max-w-[3.25rem] shrink-0 object-contain sm:h-11 sm:max-w-none"
          />
          <span className="-ml-1 min-w-0 sm:block">
            <span className="block truncate text-sm font-extrabold tracking-tight text-primary sm:text-base">
              CMC Formation
            </span>
            <span className="hidden truncate text-xs text-muted min-[380px]:block sm:text-[13px]">
              {SITE.location}
            </span>
          </span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-0.5 lg:flex"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-primary"
                    : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            variant="accent"
            size="sm"
            className="hidden rounded-xl shadow-sm sm:inline-flex"
            asChild
          >
            <Link href="/inscription">
              <UserPlus className="h-4 w-4" />
              <span className="hidden md:inline">S&apos;inscrire</span>
              <span className="md:hidden">Inscription</span>
            </Link>
          </Button>

          <button
            type="button"
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl transition-all lg:hidden",
              open
                ? "bg-primary/10 text-primary"
                : "bg-transparent text-foreground hover:bg-primary/5"
            )}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenu}
    </header>
  );
}
