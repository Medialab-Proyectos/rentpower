"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, MessageCircle, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LabPowerItem, ProductType, UICategory } from "@/lib/labpower/types";

// Íconos simples por tipo de producto
const PRODUCT_ICONS: Partial<Record<ProductType, string>> = {
  "MacBook Air":  "💻",
  "MacBook Pro":  "💻",
  "iMac":         "🖥️",
  "Mac mini":     "🖥️",
  "Mac Studio":   "🖥️",
  "Mac Pro":      "🖥️",
  "iPhone":       "📱",
  "iPad":         "📲",
  "AirPods":      "🎧",
  "Apple Watch":  "⌚",
  "Apple Pencil": "✏️",
  "Otro":         "🔧",
};

type Step = 1 | 2 | 3 | 4;

export function ServiceEstimator() {
  const [items, setItems]         = useState<LabPowerItem[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState<string | null>(null);

  const [step, setStep]                     = useState<Step>(1);
  const [selectedType, setSelectedType]     = useState<ProductType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<UICategory | null>(null);
  const [issueKind, setIssueKind]           = useState<"Hardware" | "Software" | null>(null);

  useEffect(() => {
    fetch("/api/labpower/parts")
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
        return r.json();
      })
      .then((data: { items: LabPowerItem[] }) => setItems(data.items))
      .catch(() => setError("No se pudieron cargar los datos de cotización."))
      .finally(() => setLoading(false));
  }, []);

  const reset = () => {
    setStep(1);
    setSelectedType(null);
    setSelectedCategory(null);
    setIssueKind(null);
  };

  // Tipos de producto disponibles en los datos
  const availableTypes: ProductType[] = [
    ...new Set(items.map((i) => i.tipoProducto)),
  ].sort();

  // Categorías disponibles para el tipo seleccionado
  const availableCategories: UICategory[] = selectedType
    ? [...new Set(
        items
          .filter((i) => i.tipoProducto === selectedType)
          .map((i) => i.categoriaUI)
      )].sort()
    : [];

  // Items del resultado final
  const resultItems: LabPowerItem[] = (selectedType && selectedCategory)
    ? items.filter(
        (i) => i.tipoProducto === selectedType && i.categoriaUI === selectedCategory
      )
    : [];

  const openWhatsApp = () => {
    const msg = `Hola, quisiera cotizar un servicio:\n- Dispositivo: ${selectedType}\n- Componente: ${selectedCategory}`;
    window.open(
      `https://wa.me/573002345678?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const totalSteps = issueKind === "Software" ? 2 : 3;

  return (
    <section id="service-estimator" className="py-16 md:py-20 lg:py-24 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Estimador de Servicio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Obtén una estimación aproximada del costo de reparación
          </p>
        </div>

        <Card className="bg-card border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                {step <= totalSteps
                  ? `Paso ${step} de ${totalSteps}`
                  : "Resultados"}
              </CardTitle>
              {step > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (step === 4) { setStep(3); setSelectedCategory(null); }
                    else if (step === 3) { setStep(2); setIssueKind(null); }
                    else if (step === 2) { setStep(1); setSelectedType(null); }
                  }}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Atrás
                </Button>
              )}
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Estado de carga / error */}
            {loading && (
              <div className="flex flex-col items-center gap-3 py-12 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p>Cargando datos de cotización…</p>
              </div>
            )}

            {!loading && error && (
              <div className="flex flex-col items-center gap-3 py-12 text-destructive">
                <AlertCircle className="h-8 w-8" />
                <p>{error}</p>
              </div>
            )}

            {/* Paso 1: Tipo de producto */}
            {!loading && !error && step === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Selecciona tu dispositivo</h3>
                {availableTypes.length === 0 ? (
                  <p className="text-muted-foreground text-sm">
                    No hay datos disponibles en este momento.
                  </p>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {availableTypes.map((type) => (
                      <Card
                        key={type}
                        className={cn(
                          "cursor-pointer transition-all hover:scale-105 hover:border-accent/50",
                          selectedType === type && "border-accent bg-accent/5"
                        )}
                        onClick={() => {
                          setSelectedType(type);
                          setStep(2);
                        }}
                      >
                        <CardContent className="pt-6 pb-6 flex flex-col items-center gap-2">
                          <span className="text-4xl">{PRODUCT_ICONS[type] ?? "🔧"}</span>
                          <span className="font-semibold text-sm text-center">{type}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Paso 2: Tipo de problema */}
            {!loading && !error && step === 2 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">¿Qué tipo de problema tienes?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(["Hardware", "Software"] as const).map((kind) => (
                    <Card
                      key={kind}
                      className={cn(
                        "cursor-pointer transition-all hover:scale-105 hover:border-accent/50",
                        issueKind === kind && "border-accent bg-accent/5"
                      )}
                      onClick={() => {
                        setIssueKind(kind);
                        setStep(kind === "Software" ? 99 : 3);
                      }}
                    >
                      <CardContent className="pt-6 pb-6 text-center">
                        <span className="font-semibold text-lg">{kind}</span>
                        <p className="text-sm text-muted-foreground mt-2">
                          {kind === "Hardware"
                            ? "Problemas físicos o de componentes"
                            : "Problemas de sistema operativo"}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Software: derivar a asesor */}
            {!loading && !error && step === 99 && issueKind === "Software" && (
              <div className="space-y-6 text-center">
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <p className="text-lg mb-4">
                    Los problemas de software se revisan directamente con un asesor
                  </p>
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground"
                    onClick={() =>
                      window.open(
                        "https://wa.me/573002345678?text=Hola,%20necesito%20ayuda%20con%20un%20problema%20de%20software",
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Hablar por WhatsApp
                  </Button>
                </div>
                <Button variant="outline" onClick={reset}>
                  Reiniciar estimación
                </Button>
              </div>
            )}

            {/* Paso 3: Categoría de componente */}
            {!loading && !error && step === 3 && issueKind === "Hardware" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">¿Qué componente está afectado?</h3>
                {availableCategories.length === 0 ? (
                  <p className="text-muted-foreground text-sm">
                    No hay categorías disponibles para este dispositivo.
                  </p>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {availableCategories.map((cat) => (
                      <Card
                        key={cat}
                        className={cn(
                          "cursor-pointer transition-all hover:scale-105 hover:border-accent/50",
                          selectedCategory === cat && "border-accent bg-accent/5"
                        )}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setStep(4);
                        }}
                      >
                        <CardContent className="pt-4 pb-4 text-center">
                          <span className="font-medium text-sm">{cat}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Paso 4: Resultados del Excel */}
            {!loading && !error && step === 4 && selectedType && selectedCategory && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Precios de referencia</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedType} · {selectedCategory}
                  </p>
                </div>

                {resultItems.length === 0 ? (
                  <p className="text-muted-foreground text-sm">
                    No se encontraron piezas para esta combinación.
                  </p>
                ) : (
                  <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                    {resultItems.map((item, idx) => (
                      <div
                        key={`${item.numeroPieza}-${idx}`}
                        className="flex justify-between items-start gap-4 bg-muted/30 rounded-lg px-4 py-3"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium leading-tight truncate">
                            {item.descripcionPieza || item.producto}
                          </p>
                          {item.numeroPieza && (
                            <p className="text-xs text-muted-foreground mt-0.5">
                              #{item.numeroPieza}
                            </p>
                          )}
                        </div>
                        <span className="text-sm font-bold text-accent whitespace-nowrap">
                          {item.precioFormateado}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                  Precios de referencia por pieza (sin mano de obra). El costo final
                  puede variar según diagnóstico técnico y estado del equipo.
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="flex-1 bg-accent text-accent-foreground"
                    onClick={openWhatsApp}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Cotizar por WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                    onClick={() =>
                      window.open("https://wa.me/573002345678", "_blank")
                    }
                  >
                    Hablar con un asesor
                  </Button>
                </div>

                <div className="text-center">
                  <Button variant="ghost" size="sm" onClick={reset}>
                    Hacer una nueva estimación
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
