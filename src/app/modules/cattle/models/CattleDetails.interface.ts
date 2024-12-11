export interface CattleDetails {
    idganado: number;
    nombre: string;
    sexo: 'Macho' | 'Hembra';
    fechaNacimiento: string; // ISO 8601 (ej. "2020-05-15T05:00:00.000Z")
    tipoGanado: string;
    raza: string;
    ubicacion: string;
    dieta: string;
    fechaEstadoSalud: string | null; // Puede ser `null` si no hay registro
    peso: string | null; // Puede ser `null` si no hay registro
    temperatura: string | null; // Puede ser `null` si no hay registro
    fechaCelo: string | null; // Puede ser `null` si no aplica
    fechaFinCelo: string | null; // Puede ser `null` si no aplica
    fechaApareamiento: string | null; // Puede ser `null` si no aplica
    resultadoApareamiento: string | null; // Puede ser `null` si no aplica
    fechaReproduccion: string | null; // Puede ser `null` si no aplica
    resultadoReproduccion: string | null; // Puede ser `null` si no aplica
    fechaVacuna: string | null; // Puede ser `null` si no aplica
    tratamiento: string | null; // Puede ser `null` si no hay tratamiento registrado
  }
  