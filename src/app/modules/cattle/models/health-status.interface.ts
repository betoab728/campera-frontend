export interface HealthStatus {
    idEstado: number;
    idGanado: number;
    fecha: Date;
    peso: number; // Hasta 5 decimales
    temperatura: string;
    observaciones?: string; // Opcional
    estadoVida: string;
  }
  