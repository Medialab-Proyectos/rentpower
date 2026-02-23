import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageHighlightProps {
  imageSrc: string;
  fallbackGradient?: string;
  text: string;
  className?: string;
}

export function ImageHighlight({
  imageSrc,
  fallbackGradient = "from-cyan-900 via-blue-900 to-indigo-900",
  text,
  className,
}: ImageHighlightProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden flex items-center justify-center",
        className,
      )}
    >
      {/* Fallback dark gradient behind the image */}
      <div className={cn("absolute inset-0 bg-gradient-to-br", fallbackGradient)} />

      {/* Background image with strong overlay for contrast in BOTH light and dark modes */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Highlights"
          fill
          className="object-cover"
          priority={false}
        />
        {/* Overlay: strong enough so white text is always readable regardless of page theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />
      </div>

      {/* Top and bottom fade to page background */}
      <div className="absolute top-0 left-0 right-0 h-16 hidden dark:block bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 hidden dark:block bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      {/* Content — always white text because of the dark overlay above */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center py-12 md:py-16">
        <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight drop-shadow-2xl text-balance leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#2dd4bf]">
            {text}
          </span>
        </h2>
      </div>
    </section>
  );
}
