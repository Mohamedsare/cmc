import type { ComponentType } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/shared/SocialIcons";
import { SITE } from "@/lib/constants";

export const SOCIAL_LINKS: {
  href: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
}[] = [
  { href: SITE.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: SITE.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SITE.social.tiktok, label: "TikTok", Icon: TikTokIcon },
];
