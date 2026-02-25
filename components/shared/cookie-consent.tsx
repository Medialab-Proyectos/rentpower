"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  const declineCookies = () => {
    // We won't block navigation, but we consider they declined tracking/analytics cookies
    localStorage.setItem("cookieConsent", "false");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-foreground text-center md:text-left flex-1">
          <p className="mb-2 font-semibold">Política de Cookies</p>
          Utilizamos cookies propias y de terceros para mejorar la experiencia de usuario y mostrar contenido personalizado. 
          Al continuar navegando aceptas su uso. Puedes obtener más información consultando nuestra{" "}
          <Link href="/files/politica-proteccion-datos.pdf" target="_blank" className="underline font-semibold hover:text-primary transition-colors">
            Política de Protección de Datos
          </Link>.
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Button onClick={declineCookies} variant="outline" className="whitespace-nowrap w-full sm:w-auto">
            Rechazar
          </Button>
          <Button onClick={acceptCookies} variant="default" className="whitespace-nowrap w-full sm:w-auto">
            Aceptar Cookies
          </Button>
        </div>
      </div>
    </div>
  );
}
