"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageSquare, CheckCircle } from "lucide-react";

export function ContactFormSection() {
  const [empresa, setEmpresa] = useState("");
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    email: "",
    telefono: "",
    cargo: "",
    solucion: "",
    mensaje: "",
    periodo: "",
    presupuesto: "",
    contacto: "",
    contactoOtro: "",
  });

  const showBANT = empresa.trim().length > 0;

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/332dd2aa53b9df395cd70a5f37347886", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Empresa: empresa || "No especificada",
          Nombre: formData.nombreCompleto,
          Email: formData.email,
          Teléfono: formData.telefono,
          Cargo: formData.cargo,
          Solución: formData.solucion,
          Mensaje: formData.mensaje,
          Periodo: formData.periodo,
          Presupuesto: formData.presupuesto,
          Contacto: formData.contacto === "otro" ? formData.contactoOtro : formData.contacto,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuéntanos tus necesidades y te ayudaremos a encontrar la mejor solución
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8 max-w-6xl mx-auto">
          {/* Form Section */}
          <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8">
            {status === "success" ? (
              <div className="text-center h-full flex flex-col justify-center items-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  ¡Mensaje enviado correctamente!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Pronto uno de nuestros asesores se comunicará contigo.
                </p>
                <Button 
                  onClick={() => {
                    setStatus("idle");
                    setEmpresa("");
                    setFormData({
                      nombreCompleto: "", email: "", telefono: "", cargo: "",
                      solucion: "", mensaje: "", periodo: "", presupuesto: "", contacto: "", contactoOtro: ""
                    });
                  }}
                  variant="outline"
                  className="border-border bg-transparent mt-4"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nombre Completo */}
                <div className="space-y-2">
                  <Label htmlFor="nombreCompleto">
                    Nombre Completo <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="nombreCompleto"
                    placeholder="Juan Rodriguez"
                    required
                    value={formData.nombreCompleto}
                    onChange={(e) =>
                      setFormData({ ...formData, nombreCompleto: e.target.value })
                    }
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jrodriguez@scp.com.co"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Teléfono */}
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input
                    id="telefono"
                    placeholder="+57 3013054079"
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                  />
                </div>

                {/* Empresa */}
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input
                    id="empresa"
                    placeholder="Nombre de tu empresa"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                  />
                </div>
              </div>

              {/* BANT Fields - Show when empresa is filled */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: showBANT ? "500px" : "0",
                  opacity: showBANT ? 1 : 0,
                }}
              >
                {showBANT && (
                  <div className="space-y-6 pt-2">
                    {/* Cargo */}
                    <div className="space-y-2">
                      <Label htmlFor="cargo">Cargo</Label>
                      <Input
                        id="cargo"
                        placeholder="Personal de Compras"
                        value={formData.cargo}
                        onChange={(e) =>
                          setFormData({ ...formData, cargo: e.target.value })
                        }
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Qué solución estás buscando */}
              <div className="space-y-2">
                <Label htmlFor="solucion">¿Qué solución estás buscando?</Label>
                <Select
                  value={formData.solucion}
                  onValueChange={(value) =>
                    setFormData({ ...formData, solucion: value })
                  }
                >
                  <SelectTrigger id="solucion">
                    <SelectValue placeholder="Productos Apple" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="productos-apple">Productos Apple</SelectItem>
                    <SelectItem value="soluciones-it">Soluciones IT</SelectItem>
                    <SelectItem value="daas">Device as a Service (DaaS)</SelectItem>
                    <SelectItem value="labpower">Servicio Técnico LabPower</SelectItem>
                    <SelectItem value="consultoria">Consultoría</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Cómo podemos ayudarte */}
              <div className="space-y-2">
                <Label htmlFor="mensaje">
                  ¿Cómo te podemos ayudar? <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="mensaje"
                  placeholder="Describe tu necesidad..."
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                />
              </div>

              {/* BANT Fields - Period and Budget */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: showBANT ? "300px" : "0",
                  opacity: showBANT ? 1 : 0,
                }}
              >
                {showBANT && (
                  <div className="space-y-6">
                    {/* Periodo */}
                    <div className="space-y-2">
                      <Label htmlFor="periodo">
                        ¿En qué periodo piensas implementar la solución?
                      </Label>
                      <Select
                        value={formData.periodo}
                        onValueChange={(value) =>
                          setFormData({ ...formData, periodo: value })
                        }
                      >
                        <SelectTrigger id="periodo">
                          <SelectValue placeholder="Q1 (Ene - Mar)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="q1">Q1 (Ene - Mar)</SelectItem>
                          <SelectItem value="q2">Q2 (Abr - Jun)</SelectItem>
                          <SelectItem value="q3">Q3 (Jul - Sep)</SelectItem>
                          <SelectItem value="q4">Q4 (Oct - Dic)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Presupuesto */}
                    <div className="space-y-2">
                      <Label>¿Cuenta con Presupuesto?</Label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="presupuesto"
                            value="si"
                            checked={formData.presupuesto === "si"}
                            onChange={(e) =>
                              setFormData({ ...formData, presupuesto: e.target.value })
                            }
                            className="w-4 h-4 accent-accent"
                          />
                          <span className="text-sm">Sí</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="presupuesto"
                            value="no"
                            checked={formData.presupuesto === "no"}
                            onChange={(e) =>
                              setFormData({ ...formData, presupuesto: e.target.value })
                            }
                            className="w-4 h-4 accent-accent"
                          />
                          <span className="text-sm">No</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Cómo se contactó */}
              <div className="space-y-2">
                <Label htmlFor="contacto">Cómo se contactó con nosotros</Label>
                <Select
                  value={formData.contacto}
                  onValueChange={(value) =>
                    setFormData({ ...formData, contacto: value })
                  }
                >
                  <SelectTrigger id="contacto">
                    <SelectValue placeholder="Web" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="google">Google</SelectItem>
                    <SelectItem value="familia-amigos">Familiares y/o amigos</SelectItem>
                    <SelectItem value="evento">Evento</SelectItem>
                    <SelectItem value="otro">Otro (campo abierto)</SelectItem>
                  </SelectContent>
                </Select>
                {formData.contacto === "otro" && (
                  <div className="pt-2">
                    <Input
                      placeholder="Especifica cómo nos conociste"
                      value={formData.contactoOtro}
                      onChange={(e) =>
                        setFormData({ ...formData, contactoOtro: e.target.value })
                      }
                    />
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Enviando..." : "Enviar"}
              </Button>
            </form>
            )}
          </div>

          {/* Right Panel - WhatsApp Only */}
          <div className="bg-gradient-to-br from-[#1e5a47] to-[#0f3d2f] rounded-2xl p-6 md:p-8 text-white h-fit lg:sticky lg:top-24">
            <h3 className="text-2xl font-bold mb-6">Contáctanos por WhatsApp</h3>

            <div className="space-y-4">
              {/* Ventas Corporativas */}
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 transition-all hover:scale-105"
              >
                <MessageSquare className="h-6 w-6 text-[#00ffe3]" />
                <span className="font-medium">Ventas Corporativas</span>
              </a>

              {/* Servicio Técnico */}
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 transition-all hover:scale-105"
              >
                <MessageSquare className="h-6 w-6 text-[#00ffe3]" />
                <span className="font-medium">Servicio Técnico</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
