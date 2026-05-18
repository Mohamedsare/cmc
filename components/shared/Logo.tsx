import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_WIDTH = 1536;
const LOGO_HEIGHT = 1024;

type LogoProps = {
  className?: string;
  height?: number;
};

export function Logo({ className, height = 48 }: LogoProps) {
  const width = Math.round((height * LOGO_WIDTH) / LOGO_HEIGHT);

  return (
    <Image
      src="/images/logo.png"
      alt="CMC Formation Koudougou"
      width={width}
      height={height}
      className={cn("object-contain", className)}
      priority
    />
  );
}
