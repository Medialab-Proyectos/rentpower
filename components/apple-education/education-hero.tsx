import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function EducationHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f0a] dark:bg-black">
      {/* Background - Subtle abstract texture */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,30,40,0.4),transparent_70%)]" />
      </div>

      {/* Neon Cyan Energy Pulses - Very subtle */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 227, 0.1) 0%, rgba(0, 166, 214, 0.05) 50%, transparent 100%)'
          }}
        />
        <div
          className="absolute right-0 top-1/4 h-[500px] w-[500px] translate-x-1/3 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 227, 0.08) 0%, rgba(0, 166, 214, 0.04) 50%, transparent 100%)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 227, 0.06) 0%, rgba(0, 166, 214, 0.03) 50%, transparent 100%)',
            animation: 'float 10s ease-in-out infinite 2s'
          }}
        />
      </div>

      {/* Animated gradient overlay - Slow movement */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#00a6d6]/20 via-transparent to-[#00ffe3]/10"
          style={{ animation: 'gradient-shift 15s ease-in-out infinite alternate' }}
        />
      </div>

      {/* Subtle grid pattern for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="relative z-10">
          

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl text-balance">
              <span className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] bg-clip-text text-transparent drop-shadow-lg">Apple</span>{" "}
              para Educación
            </h1>

            <p className="mb-8 text-lg text-gray-200 md:text-xl text-pretty leading-relaxed">
              Implementamos el ecosistema Apple en instituciones educativas de forma segura, ordenada y escalable, integrando Apple School Manager, MDM y dispositivos listos para el aula desde el primer día.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold border-0 transition-all duration-300">
                <Link href="/contacto-empresas">
                  Solicitar información
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/mac">Ver catálogo</Link>
              </Button>
            </div>
          </div>

          {/* Image with glassmorphism */}
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 -z-10 translate-y-4 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent blur-2xl" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-xl">
              <Image
                src="/images/empresas.png"
                alt="Apple devices for education"
                fill
                className="object-cover opacity-90"
                priority
              />
              {/* Glassmorphic overlay with subtle cyan tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

              {/* Soft light reflection effect */}
              <div className="absolute right-0 top-0 h-1/2 w-1/2 bg-gradient-to-br from-white/5 to-transparent blur-2xl" />
            </div>

            {/* Floating card 1 */}
            <div
              className="hidden md:block absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-gray-900/80 dark:bg-gray-900/40 p-4 shadow-2xl backdrop-blur-xl transition-transform hover:-translate-y-1"
              style={{ animation: 'float-card 6s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20 shadow-lg shadow-cyan-500/20">
                  <svg className="h-6 w-6 text-cyan-400 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Listos para el aula</p>
                  <p className="text-sm text-gray-300">Apple School Manager</p>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div
              className="hidden md:block absolute -right-4 top-8 rounded-xl border border-white/10 bg-gray-900/80 dark:bg-gray-900/40 p-4 shadow-2xl backdrop-blur-xl transition-transform hover:-translate-y-1"
              style={{ animation: 'float-card 6s ease-in-out infinite 1s' }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 shadow-lg shadow-blue-500/20">
                  <svg className="h-6 w-6 text-blue-400 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Gestión Segura</p>
                  <p className="text-sm text-gray-300">Soluciones MDM</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
