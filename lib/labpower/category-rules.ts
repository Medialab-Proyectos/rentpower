import type { UICategory, ProductType } from "./types";

/**
 * Reglas para detectar el tipo de producto a partir del nombre.
 * El orden importa: las reglas más específicas van primero.
 */
export const PRODUCT_TYPE_RULES: Array<{ type: ProductType; pattern: RegExp }> = [
  { type: "MacBook Air", pattern: /macbook\s*air/i },
  { type: "MacBook Pro", pattern: /macbook\s*pro/i },
  { type: "Mac mini",   pattern: /mac\s*mini/i },
  { type: "Mac Studio", pattern: /mac\s*studio/i },
  { type: "Mac Pro",    pattern: /mac\s*pro/i },
  { type: "iMac",       pattern: /imac/i },
  { type: "iPhone",     pattern: /iphone/i },
  { type: "iPad",       pattern: /ipad/i },
  { type: "AirPods",    pattern: /airpods/i },
  { type: "Apple Watch",pattern: /apple\s*watch/i },
  { type: "Apple Pencil",pattern: /apple\s*pencil/i },
];

/**
 * Reglas para asignar categoría UI a partir de la descripción de la pieza.
 * Basadas en palabras clave del catálogo de Apple.
 * El orden importa: las reglas más específicas van primero.
 *
 * Para ampliar: agregar un nuevo objeto { category, pattern } en la posición adecuada.
 */
export const CATEGORY_RULES: Array<{ category: UICategory; pattern: RegExp }> = [
  // Estuche antes de "carga" para no colisionar con Puerto de carga
  { category: "Estuche de carga",   pattern: /charging\s*case|estuche\s*de\s*carga/i },
  // Pantalla
  { category: "Pantalla",           pattern: /display|screen|lcd|retina|oled|panel|glass/i },
  // Batería
  { category: "Batería",            pattern: /battery|batería/i },
  // Cámara
  { category: "Cámara",             pattern: /camera|cámara/i },
  // Bocina / Altavoz
  { category: "Bocina / Altavoz",   pattern: /speaker|bocina|altavoz|earpiece|audio\s*module/i },
  // Micrófono
  { category: "Micrófono",          pattern: /microphone|micrófono/i },
  // Puerto de carga / conectores
  { category: "Puerto de carga",    pattern: /port|lightning|usb[-\s]?c|connector|charging\s*port/i },
  // Botones / controles físicos
  { category: "Botones",            pattern: /button|crown|side\s*key|volume|power\s*key/i },
  // Face ID y sensores
  { category: "Face ID / Sensores", pattern: /face\s*id|truedepth|sensor|proximity|touch\s*id/i },
  // Teclado
  { category: "Teclado",            pattern: /keyboard|keycap|key\s*cap/i },
  // Trackpad
  { category: "Trackpad",           pattern: /trackpad|touchpad/i },
  // Tarjeta lógica
  { category: "Tarjeta lógica",     pattern: /logic\s*board|motherboard|mlb|main\s*board/i },
  // Ventilación / disipación
  { category: "Ventilación",        pattern: /fan|heatsink|heat\s*pipe|thermal/i },
  // Carcasa / chasis
  { category: "Carcasa / Chasis",   pattern: /housing|enclosure|top\s*case|bottom\s*case|chassis|cover|back\s*glass|frame/i },
  // Cable / conector (genérico, sin puerto específico)
  { category: "Cable / Conector",   pattern: /cable|cord|wire/i },
];
