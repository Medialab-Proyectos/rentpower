import Image from "next/image";
import { Linkedin } from "lucide-react";

export function TeamSection() {
  const team = [
    {
      name: "David Alejandro Daza Delgado",
      role: "CEO (Chief Executive Officer)",
      image: "/images/uno.jpg",
      linkedin: "https://www.linkedin.com/in/ddazad/"
    },
    {
      name: "Juan Felipe Galindo Vargas",
      role: "CSMO (Chief Sales and Marketing Officer)",
      image: "/images/dos.jpg",
      linkedin: "https://www.linkedin.com/in/juan-felipe-galindo/"
    },
    {
      name: "Juan Camilo Galindo Vargas",
      role: "CFO (Chief Financial Officer)",
      image: "/images/tres.jpg",
      linkedin: "https://www.linkedin.com/in/juancamilogalindovargas-supplychain/"
    },
    {
      name: "Juan Carlos Carranza Martinez",
      role: "Country Manager, Colombia",
      image: "/images/cuatro.jpg",
      linkedin: "https://www.linkedin.com/in/juan-carlos-carranza-martinez-73668157/"
    },
     {
      name: "Maria Fernanda Mesa",
      role: "Chief Legal Officer, Colombia",
      image: "/images/cinco.jpg",
      linkedin: "https://www.linkedin.com/in/mariafernandamesad/"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Talento que transforma ideas en soluciones, comprometidos para hacer que las cosas pasen.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="text-center group flex flex-col items-center">
              <div className="relative mx-auto mb-4 w-32 h-32 md:w-40 md:h-40">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-border/50 group-hover:border-accent/50 transition-all shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 right-0 md:bottom-1 md:right-1 bg-[#0A66C2] text-white border-2 border-background rounded-full p-2 shadow-lg hover:scale-110 hover:bg-[#004182] transition-all z-10"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                )}
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
