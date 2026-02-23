import Image from "next/image";

export function EducationVisualBanner() {
  return (
    <section className="relative w-full h-[20vh] min-h-[280px] overflow-hidden">
      {/* Imagen de fondo proporcionada por el usuario */}
      <Image
        src="/images/education-banner.png"
        alt="Aulas tecnológicas con equipos Mac"
        fill
        className="object-cover object-center scale-105 transition-transform duration-1000 hover:scale-100"
        priority
      />

      {/* Overlays para suavizar los bordes superior e inferior y fusionarse con el sitio,
          y para darle un tono elegante que no sea demasiado brillante */}
      <div className="absolute inset-0 bg-black/30 transition-opacity hover:bg-black/10 duration-500" />
      <div className="absolute inset-x-0 top-0 h-32 hidden dark:block bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 hidden dark:block bg-gradient-to-t from-background to-transparent" />

      {/* Badge decorativo centrado - opcional pero da un toque premium */}
      
    </section>
  );
}
