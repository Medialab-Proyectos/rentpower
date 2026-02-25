import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-xl mx-auto py-20">
          {/* Animated 404 */}
          <div className="relative mb-8">
            <h1 className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter bg-gradient-to-br from-primary/30 via-primary/10 to-transparent bg-clip-text text-transparent select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center animate-pulse">
                <Image
                  src="/images/macpower-logo-white.png"
                  alt="MacPower"
                  width={80}
                  height={80}
                  className="w-12 h-12 md:w-16 md:h-16 opacity-60 object-contain hidden dark:block"
                />
                <Image
                  src="/images/macpower-logo-original.png"
                  alt="MacPower"
                  width={80}
                  height={80}
                  className="w-12 h-12 md:w-16 md:h-16 opacity-60 object-contain dark:hidden"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¡Oops! Página no encontrada
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-md mx-auto">
            La página que estás buscando no existe o ha sido movida. 
            No te preocupes, te ayudamos a volver al camino correcto.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Ir al inicio
            </Link>
            <Link
              href="/nosotros#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card hover:bg-secondary text-foreground font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Contáctanos
            </Link>
          </div>

          {/* Subtle decorative line */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-border" />
            <p className="text-xs text-muted-foreground">MacPower IT Solutions</p>
            <div className="h-px w-12 bg-border" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
