import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LabPowerHero } from "@/components/labpower/lab-power-hero";
import { ServicesContent } from "@/components/labpower/services-content";
import { StickyCTA } from "@/components/shared/sticky-cta";
import { Button } from "@/components/ui/button";
import { Calculator, Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactFormSection } from "@/components/nosotros/contact-form-section";

export const metadata = {
  title: "LabPower - Servicio Técnico Apple | MacPower",
  description: ": Centro de Servicio Autorizado Apple - Diagnóstico, reparación certificada y garantías extendidas con repuestos originales y técnicos certificados",
};

export default function LabPowerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LabPowerHero />
        <ServicesContent />

        {/* CTA Banner → Herramientas */}
        <section className="py-14 border-t border-border/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="rounded-2xl border border-[#00ffe3]/20 bg-gradient-to-r from-[#00ffe3]/5 to-[#00a6d6]/5 px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs font-semibold text-[#00ffe3] uppercase tracking-widest mb-2">Herramientas en línea</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Estimador de servicio y seguimiento de tu equipo
                </h2>
                <p className="text-muted-foreground text-sm max-w-xl">
                  Calcula el costo aproximado de tu reparación o consulta en tiempo real el estado de tu dispositivo en nuestro centro de servicio autorizado.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calculator className="h-4 w-4 text-[#00ffe3]" />
                    Estimador de costos
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Search className="h-4 w-4 text-[#00ffe3]" />
                    Seguimiento de orden
                  </div>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="shrink-0 bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold"
              >
                <Link href="/labpower/herramientas">
                  Ir a herramientas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <ContactFormSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

