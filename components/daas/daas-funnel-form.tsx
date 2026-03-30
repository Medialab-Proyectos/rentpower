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
import { CheckCircle, Loader2 } from "lucide-react";

export function DaasFunnelForm() {
  const [formData, setFormData] = useState({
    company: "",
    product: "",
    quantity: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.company) newErrors.company = "Requerido";
    if (!formData.product) newErrors.product = "Requerido";
    if (!formData.quantity) newErrors.quantity = "Requerido";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email válido requerido";
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
      <div className="rounded-2xl bg-card/90 backdrop-blur-xl border border-white/10 p-8 text-center shadow-2xl">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
          <CheckCircle className="h-8 w-8 text-accent" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">¡Solicitud recibida!</h3>
        <p className="text-muted-foreground text-sm">
          Un asesor te contactará en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-card/90 backdrop-blur-xl border border-white/10 p-6 md:p-8 shadow-2xl space-y-4"
    >
      <div className="space-y-1 pb-2">
        <h3 className="text-lg font-bold text-foreground">Solicitar asesoría</h3>
        <p className="text-sm text-muted-foreground">Sin compromiso · Respuesta en 24 h.</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="funnel-product">Producto Apple</Label>
        <Select onValueChange={(val) => setFormData({ ...formData, product: val })}>
          <SelectTrigger id="funnel-product" className={errors.product ? "border-red-500" : ""}>
            <SelectValue placeholder="Seleccionar equipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="macbook-air">MacBook Air</SelectItem>
            <SelectItem value="macbook-pro">MacBook Pro</SelectItem>
            <SelectItem value="imac">iMac</SelectItem>
            <SelectItem value="mac-mini">Mac Mini</SelectItem>
            <SelectItem value="ipad">iPad</SelectItem>
            <SelectItem value="mixto">Flota mixta</SelectItem>
          </SelectContent>
        </Select>
        {errors.product && (
          <span className="text-xs text-red-500">{errors.product}</span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="funnel-quantity">Cantidad aproximada</Label>
        <Input
          id="funnel-quantity"
          type="number"
          min="1"
          placeholder="Ej: 50"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          className={errors.quantity ? "border-red-500" : ""}
        />
        {errors.quantity && (
          <span className="text-xs text-red-500">{errors.quantity}</span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="funnel-company">Nombre de la empresa</Label>
        <Input
          id="funnel-company"
          placeholder="Tu empresa"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className={errors.company ? "border-red-500" : ""}
        />
        {errors.company && (
          <span className="text-xs text-red-500">{errors.company}</span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="funnel-email">Correo electrónico</Label>
        <Input
          id="funnel-email"
          type="email"
          placeholder="contacto@empresa.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <span className="text-xs text-red-500">{errors.email}</span>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-black font-semibold py-6 shadow-lg shadow-orange-400/20 transition-all hover:scale-[1.02]"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader2 className="animate-spin h-5 w-5" />
        ) : (
          "Enviar"
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground/70 pt-1">
        Tus datos se usan solo para contactarte sobre tu solicitud.
      </p>
    </form>
  );
}
