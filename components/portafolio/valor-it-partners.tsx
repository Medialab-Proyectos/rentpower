"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const partners: { name: string; logo?: string }[] = [
  {
    name: "Aruba",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2016%201-oAhtIUaQNQuUVmgK1PjQiGwWZYh4HX.png",
  },
  {
    name: "Hewlett Packard Enterprise",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2028%201-CkByi8T3zSrGLrwVwQ2rlYmVDb2Ebd.png",
  },
  {
    name: "BeyondTrust",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2019%201-RiMvw7qMCUsNz5wazsjE4RlWByucWL.png",
  },
  {
    name: "CrossIdentity",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliad%2025o%20%201-yWyIbIqlWVPaNBtjoTPqjUkEV7ZXc4.png",
  },
  { name: "Luma" },
  { name: "Acronis" },
  { name: "Fortinet" },
  { name: "Alkira" },
  { name: "Azure" },
];

export function ValorITPartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="border-y border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Text */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Partners de valor tecnológico
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Soluciones respaldadas por los fabricantes líderes del sector IT
            </p>
          </div>

          {/* Carousel */}
          <div className="relative w-full overflow-hidden py-6">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />

            <div
              ref={scrollRef}
              className="flex gap-16 overflow-x-hidden overflow-y-hidden"
              style={{
                scrollBehavior: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center group"
                >
                  {partner.logo ? (
                    <div
                      className="transition-all duration-300 ease-in-out
                        grayscale opacity-50 dark:brightness-0 dark:invert dark:opacity-55
                        group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 dark:group-hover:brightness-100 dark:group-hover:invert-0"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={181}
                        height={112}
                        className="h-24 w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
