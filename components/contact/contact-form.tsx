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
import { CheckCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/vdaza@macpower.com.co", {
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

  if (status === "success") {
    return (
      <div className="bg-card rounded-2xl border border-border p-8 text-center h-full flex flex-col justify-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
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
          }}
          variant="outline"
          className="border-border bg-transparent"
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 text-balance">
        ¿Listo para transformar tu empresa?
      </h2>
      <p className="text-muted-foreground mb-8">
        Cuéntanos tus necesidades y te ayudaremos a encontrar la mejor solución
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Nombre Completo */}
          <div className="space-y-2">
            <Label htmlFor="nombreCompleto">
              Nombre Completo <span className="text-destructive">*</span>
            </Label>
            <Input
              id="nombreCompleto"
              placeholder="Valentina Daza"
              required
              className="bg-secondary border-border"
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
              placeholder="vdaza@macpower.com.co"
              required
              className="bg-secondary border-border"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Teléfono */}
          <div className="space-y-2">
            <Label htmlFor="telefono">Teléfono</Label>
            <Input
              id="telefono"
              placeholder="+57 3013054079"
              className="bg-secondary border-border"
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
              className="bg-secondary border-border"
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
                  className="bg-secondary border-border"
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
            <SelectTrigger id="solucion" className="bg-secondary border-border">
              <SelectValue placeholder="Selecciona una opción" />
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
            className="bg-secondary border-border min-h-32 resize-none"
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
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {/* Periodo */}
              <div className="space-y-2">
                <Label htmlFor="periodo">
                  ¿En qué periodo piensas implementarlo?
                </Label>
                <Select
                  value={formData.periodo}
                  onValueChange={(value) =>
                    setFormData({ ...formData, periodo: value })
                  }
                >
                  <SelectTrigger id="periodo" className="bg-secondary border-border">
                    <SelectValue placeholder="Selecciona" />
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
                <Label className="block mb-2">¿Cuenta con Presupuesto?</Label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer bg-secondary px-4 py-2 rounded-md border border-border transition-colors w-full">
                    <input
                      type="radio"
                      name="presupuesto"
                      value="si"
                      checked={formData.presupuesto === "si"}
                      onChange={(e) =>
                        setFormData({ ...formData, presupuesto: e.target.value })
                      }
                      className="w-4 h-4 accent-primary"
                    />
                    <span className="text-sm">Sí</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer bg-secondary px-4 py-2 rounded-md border border-border transition-colors w-full">
                    <input
                      type="radio"
                      name="presupuesto"
                      value="no"
                      checked={formData.presupuesto === "no"}
                      onChange={(e) =>
                        setFormData({ ...formData, presupuesto: e.target.value })
                      }
                      className="w-4 h-4 accent-primary"
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
            <SelectTrigger id="contacto" className="bg-secondary border-border">
              <SelectValue placeholder="Selecciona" />
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
                className="bg-secondary border-border"
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
          {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </div>
  );
}
