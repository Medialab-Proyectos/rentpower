import { Laptop, Code, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";

export function EducationEcosystem() {
  const features = [
    {
      icon: Laptop,
      title: "Tecnología intuitiva",
      description: "Dispositivos fáciles de usar que facilitan la adopción y reducen la curva de aprendizaje, optimizando el tiempo en el aula.",
    },
    {
      icon: Code,
      title: "Apple School Manager",
      description: "Administración centralizada de dispositivos, usuarios y contenido, integrada con MDM para control institucional y despliegue simplificado.",
    },
    {
      icon: Palette,
      title: "Apps educativas",
      description: "Herramientas especializadas que potencian el aprendizaje activo, la creatividad y la colaboración en el entorno académico.",
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ecosistema educativo Apple
          </h2>
          <p className="text-muted-foreground text-lg">
            Herramientas y servicios diseñados específicamente para instituciones educativas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card key={i} className="p-8 bg-card border-border">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
