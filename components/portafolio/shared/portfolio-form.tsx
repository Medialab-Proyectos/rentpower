"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2, Send, Building2, Mail, Phone, User, MapPin, Zap, Award, Wrench } from "lucide-react";

interface FormInterest {
  value: string;
  label: string;
}

interface PortfolioFormProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  accentColor?: string;
  accentColorLight?: string;
  interests?: FormInterest[];
  ctaLabel?: string;
}

const defaultInterests: FormInterest[] = [
  { value: "valor-it", label: "Soluciones IT" },
  { value: "daas", label: "Soluciones DaaS" },
  { value: "otro", label: "Otro" },
];

export function PortfolioForm({
  title = "¿Listo para transformar tu empresa?",
  subtitle = "Descubre cómo nuestras soluciones pueden integrarse en su operación con el respaldo y acompañamiento de MacPower.",
  badgeText = "Conozca más con MacPower",
  accentColor = "var(--accent)",
  accentColorLight = "rgba(82, 103, 141, 0.08)",
  interests = defaultInterests,
  ctaLabel = "Solicitar asesoría especializada",
}: PortfolioFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = "Nombre requerido";
    if (!formData.company.trim()) newErrors.company = "Empresa requerida";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email válido requerido";
    if (!formData.interest) newErrors.interest = "Seleccione una opción";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section id="contacto" className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="rounded-3xl bg-card border border-border p-12 text-center shadow-xl">
            <div
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-lg"
              style={{ background: accentColorLight, boxShadow: `0 12px 32px ${accentColor}30` }}
            >
              <CheckCircle className="h-10 w-10" style={{ color: accentColor }} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">¡Gracias por contactarnos!</h3>
            <p className="text-lg text-muted-foreground">
              Recibimos tu solicitud. Un asesor especializado te contactará en las próximas horas.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold mb-4"
            style={{
              borderColor: `${accentColor !== "var(--accent)" ? accentColor + "40" : "rgb(82 103 141 / 0.4)"}`,
              background: accentColorLight,
              color: accentColor !== "var(--accent)" ? accentColor : undefined,
            }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: accentColor }} />
            {badgeText}
          </div>
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-balance text-foreground">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Two-column layout: info + form */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left info panel */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              {[
                {
                  icon: <MapPin className="h-5 w-5" />,
                  title: "Colombia",
                  desc: "Atención en todo el territorio nacional",
                },
                {
                  icon: <Zap className="h-5 w-5" />,
                  title: "Respuesta rápida",
                  desc: "Un asesor te contactará en menos de 24h",
                },
                {
                  icon: <Award className="h-5 w-5" />,
                  title: "Partner Oficial",
                  desc: "Distribuidor autorizado ViewSonic",
                },
                {
                  icon: <Wrench className="h-5 w-5" />,
                  title: "Soporte incluido",
                  desc: "Acompañamiento técnico post-venta",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-opacity-50 hover:shadow-md hover:scale-[1.02]"
                  style={{ borderColor: `${accentColor !== "var(--accent)" ? accentColor + "20" : ""}` }}
                >
                  <div
                    className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl text-lg transition-transform group-hover:scale-110"
                    style={{ background: accentColorLight }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">
                Confianza empresarial
              </p>
              <p className="text-2xl font-black text-foreground">+500</p>
              <p className="text-sm text-muted-foreground">empresas confían en MacPower en Colombia</p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5 bg-card rounded-3xl border border-border p-8 md:p-10 shadow-2xl"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Nombre */}
                <div className="space-y-2">
                  <Label htmlFor="vs-name" className="flex items-center gap-1.5 text-sm font-semibold">
                    <User className="h-3.5 w-3.5 text-muted-foreground" />
                    Nombre completo
                  </Label>
                  <Input
                    id="vs-name"
                    placeholder="Juan Pérez"
                    value={formData.name}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`transition-all ${errors.name ? "border-red-500 focus:ring-red-500/30" : ""} ${focused === "name" ? "shadow-md" : ""}`}
                    style={focused === "name" && !errors.name
                      ? { borderColor: accentColor !== "var(--accent)" ? accentColor : undefined, boxShadow: `0 0 0 3px ${accentColor}15` }
                      : {}}
                  />
                  {errors.name && <span className="text-xs text-red-500 flex items-center gap-1">⚠ {errors.name}</span>}
                </div>

                {/* Empresa */}
                <div className="space-y-2">
                  <Label htmlFor="vs-company" className="flex items-center gap-1.5 text-sm font-semibold">
                    <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                    Empresa
                  </Label>
                  <Input
                    id="vs-company"
                    placeholder="Mi Empresa S.A.S."
                    value={formData.company}
                    onFocus={() => setFocused("company")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={`transition-all ${errors.company ? "border-red-500" : ""} ${focused === "company" ? "shadow-md" : ""}`}
                    style={focused === "company" && !errors.company
                      ? { borderColor: accentColor !== "var(--accent)" ? accentColor : undefined, boxShadow: `0 0 0 3px ${accentColor}15` }
                      : {}}
                  />
                  {errors.company && <span className="text-xs text-red-500 flex items-center gap-1">⚠ {errors.company}</span>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="vs-email" className="flex items-center gap-1.5 text-sm font-semibold">
                    <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                    Email corporativo
                  </Label>
                  <Input
                    id="vs-email"
                    type="email"
                    placeholder="juan@empresa.com"
                    value={formData.email}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`transition-all ${errors.email ? "border-red-500" : ""} ${focused === "email" ? "shadow-md" : ""}`}
                    style={focused === "email" && !errors.email
                      ? { borderColor: accentColor !== "var(--accent)" ? accentColor : undefined, boxShadow: `0 0 0 3px ${accentColor}15` }
                      : {}}
                  />
                  {errors.email && <span className="text-xs text-red-500 flex items-center gap-1">⚠ {errors.email}</span>}
                </div>

                {/* Teléfono */}
                <div className="space-y-2">
                  <Label htmlFor="vs-phone" className="flex items-center gap-1.5 text-sm font-semibold">
                    <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                    Teléfono <span className="text-muted-foreground font-normal">(opcional)</span>
                  </Label>
                  <Input
                    id="vs-phone"
                    type="tel"
                    placeholder="+57 300 000 0000"
                    value={formData.phone}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`transition-all ${focused === "phone" ? "shadow-md" : ""}`}
                    style={focused === "phone"
                      ? { borderColor: accentColor !== "var(--accent)" ? accentColor : undefined, boxShadow: `0 0 0 3px ${accentColor}15` }
                      : {}}
                  />
                </div>
              </div>

              {/* Interés */}
              <div className="space-y-2">
                <Label htmlFor="vs-interest" className="text-sm font-semibold">
                  Me interesa
                </Label>
                <Select onValueChange={(val) => setFormData({ ...formData, interest: val })}>
                  <SelectTrigger
                    id="vs-interest"
                    className={`transition-all ${errors.interest ? "border-red-500" : ""}`}
                  >
                    <SelectValue placeholder="Seleccionar solución ViewSonic" />
                  </SelectTrigger>
                  <SelectContent>
                    {interests.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.interest && <span className="text-xs text-red-500 flex items-center gap-1">⚠ {errors.interest}</span>}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="group w-full rounded-xl font-bold h-auto py-5 text-sm md:text-base whitespace-normal text-center transition-all hover:scale-[1.02] hover:shadow-xl active:scale-95"
                style={{
                  background: accentColor !== "var(--accent)"
                    ? `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`
                    : undefined,
                  boxShadow: accentColor !== "var(--accent)"
                    ? `0 8px 24px ${accentColor}30`
                    : undefined,
                  color: "white",
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {ctaLabel}
                    <Send className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </div>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground pt-1">
                🔒 Tus datos están seguros. Solo los usaremos para responder tu solicitud.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
