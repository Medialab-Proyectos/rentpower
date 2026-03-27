import Image from "next/image";
import { Button } from "@/components/ui/button";

export function LabPowerHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pb-24 min-h-[450px] md:min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-principal-1500x600px%20%283%29-6WdePWoKHw2NOkRSrp8Jd8nSKEyWe0.png"
          alt="LabPower Hero Background"
          fill
          className="object-cover sm:object-cover object-right lg:object-[right_center]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 md:via-black/70 to-transparent sm:to-black/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="max-w-2xl">
          <div className="flex flex-col items-start space-y-6 lg:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2 text-balance leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffe3] to-[#00a6d6]">
                LabPower
              </span>
              <br />
              Servicio especializado para empresas
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed text-white/90 text-pretty text-left">
              Diagnóstico, reparación y seguimiento de tu equipo con respaldo experto.
            </p>

            <div className="pt-2 flex items-center gap-3 flex-wrap">
              <Button
                disabled
                aria-disabled="true"
                size="lg"
                className="bg-gradient-to-r from-[#00ffe3]/20 to-[#00a6d6]/20 text-white/30 font-bold border border-white/10 shadow-none rounded-full px-10 py-6 text-lg cursor-not-allowed pointer-events-none"
              >
                Cotizar mi servicio
              </Button>
              <span
                aria-label="Próximamente disponible"
                className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase tracking-widest whitespace-nowrap"
              >
                Próximamente
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
