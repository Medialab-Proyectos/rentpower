"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Apple, Facebook, Twitter, Linkedin, Instagram, MapPin } from "lucide-react";
import { MedialabCredit } from "@/components/layout/medialab-credit";

const footerLinks = {
  apple: {
    title: "Soluciones Apple",
    links: [
      { name: "Apple para empresas", href: "/mac-para-empresas" },
      { name: "Apple para educación", href: "/apple-educacion" },
      { name: "Catálogo Apple", href: "/mac" },
    ],
  },
  portafolio: {
    title: "Portafolio",
    links: [
      { name: "Soluciones IT", href: "/portafolio/valor-it" },
      { name: "Soluciones DaaS", href: "/portafolio/daas" },
      { name: "LabPower", href: "/labpower" },
    ],
  },
  empresa: {
    title: "Empresa",
    links: [
      { name: "Inicio", href: "/" },
      { name: "Nosotros", href: "/nosotros" },
      { name: "Eventos", href: "/#eventos" },
      { name: "Política de Protección de Datos", href: "/files/politica-proteccion-datos.pdf" },
    ],
  },
  
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/macpower_itsolutions" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/macpower-it-solutions" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/macpoweritsolutions" },
];

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/macpower-logo-original.svg"
                alt="MacPower IT Solutions"
                width={200}
                height={40}
                className="h-8 w-auto dark:hidden"
              />
              <Image
                src="/images/macpower-logo-white.svg"
                alt="MacPower IT Solutions"
                width={200}
                height={40}
                className="hidden h-8 w-auto dark:block"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Somos tu aliado para facilitar la inversión de soluciones IT que optimicen los procesos de tu empresa.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Calle 74 # 15-80, Oficina 101<br />
                  Edificio Osaka Center, Bogotá, Colombia<br />
                  Código Postal:110221
                </span>
              </div>
            </div>
           
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {year ?? ""} MacPower. Todos los derechos reservados.
          </p>

          <MedialabCredit
            className="text-xs text-muted-foreground"
            dotClassName="ml-1 inline-block h-px w-px rounded-full bg-current align-middle"
          />
        </div>
      </div>
    </footer>
  );
}
