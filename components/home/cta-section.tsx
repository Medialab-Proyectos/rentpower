import { LeadForm } from "@/components/shared/lead-form";

export function CTASection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-secondary py-20">
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header Copy centered */}
          <div className="text-center mb-10">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Obtén una consultoría gratuita y descubre cómo nuestras soluciones pueden impulsar tu negocio.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xs font-semibold text-primary">1</span>
                </div>
                <p className="text-muted-foreground">Cuéntanos tus necesidades</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xs font-semibold text-primary">2</span>
                </div>
                <p className="text-muted-foreground">Recibe una propuesta</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xs font-semibold text-primary">3</span>
                </div>
                <p className="text-muted-foreground">Implementamos tu solución</p>
              </div>
            </div>
          </div>

          {/* Centered Form column */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-semibold text-foreground">
                Contáctanos
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Agenda una consultoría sin costo con nuestros especialistas.
              </p>
            </div>
            <LeadForm source="home-cta-bant" variant="bant" />
          </div>
        </div>
      </div>
    </section>
  );
}
