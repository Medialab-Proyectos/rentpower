import Image from "next/image";

export function ViewSonicLogo({
  className = "h-9 w-auto",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <Image
      src="/files/ViewSonic_logo.png"
      alt="ViewSonic"
      width={420}
      height={80}
      className={`${className} object-contain`}
    />
  );
}
