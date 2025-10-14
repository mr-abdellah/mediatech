import Image from "next/image";

type LogoType = "icon" | "default" | "white";

interface LogoProps {
  type?: LogoType;
  className?: string;
  width?: number;
  height?: number;
}

export function AppLogo({
  type = "default",
  className = "",
  width = 120,
  height = 40,
}: LogoProps) {
  const logoSrc =
    type === "icon"
      ? "/icon.png"
      : type === "white"
      ? "/logo-white.png"
      : "/logo.png";

  return (
    <Image
      src={logoSrc}
      alt="Mediatech Agency Logo"
      className={className}
      width={width}
      height={height}
    />
  );
}
