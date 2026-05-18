import { SOCIAL_LINKS } from "@/lib/social-links";
import { cn } from "@/lib/utils";

export function FooterSocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {SOCIAL_LINKS.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} — CMC Formation (nouvel onglet)`}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary-light hover:text-[#0f2419]"
        >
          <Icon className="h-[1.125rem] w-[1.125rem]" />
        </a>
      ))}
    </div>
  );
}
