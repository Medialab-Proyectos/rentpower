import Image from "next/image";

export function MacVisualBanner() {
  return (
    <section className="relative w-full h-[20vh] min-h-[280px] overflow-hidden">
      {/* Imagen de fondo proporcionada por el usuario */}
      <Image
        src="/images/mac-empresas-banner.png"
        alt="Equipo de trabajo en una sala de reuniones usando equipos Mac"
        fill
        className="object-cover object-center scale-105 transition-transform duration-1000 hover:scale-100"
        priority
      />

      {/* Overlays para suavizar los bordes superior e inferior y fusionarse con el sitio oscuro */}
      <div className="absolute inset-0 bg-black/40 transition-opacity hover:bg-black/20 duration-500" />
      <div className="absolute inset-x-0 top-0 h-32 hidden dark:block bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 hidden dark:block bg-gradient-to-t from-background to-transparent" />

      {/* Badge decorativo centrado (opcional) */}
      
    </section>
  );
}
