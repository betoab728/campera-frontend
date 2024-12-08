export interface HealthStatus {
    idEstado: number;
    idganado: number;
    fecha: Date;
    peso: number; // Hasta 5 decimales
    temperatura: string;
    observacion?: string; // Opcional
    estadovida: string;
  }
  