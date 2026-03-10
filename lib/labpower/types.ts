/** Fila cruda tal como viene del Excel, antes de cualquier transformación */
export interface RawLabPowerRow {
  nombreProducto: string;
  descripcionPieza: string;
  numeroPieza: string;
  piezaSecundaria: string;
  precioIntercambio: string | number;
}

/** Item normalizado listo para consumir en UI */
export interface LabPowerItem {
  producto: string;
  tipoProducto: ProductType;
  categoriaUI: UICategory;
  descripcionPieza: string;
  numeroPieza: string;
  piezaSecundaria: string;
  precio: number | null;
  precioFormateado: string;
}

export type ProductType =
  | "iPhone"
  | "iPad"
  | "MacBook Air"
  | "MacBook Pro"
  | "iMac"
  | "Mac mini"
  | "Mac Studio"
  | "Mac Pro"
  | "AirPods"
  | "Apple Watch"
  | "Apple Pencil"
  | "Otro";

export type UICategory =
  | "Pantalla"
  | "Batería"
  | "Cámara"
  | "Bocina / Altavoz"
  | "Micrófono"
  | "Puerto de carga"
  | "Botones"
  | "Carcasa / Chasis"
  | "Face ID / Sensores"
  | "Teclado"
  | "Trackpad"
  | "Tarjeta lógica"
  | "Ventilación"
  | "Estuche de carga"
  | "Cable / Conector"
  | "Otros componentes";
