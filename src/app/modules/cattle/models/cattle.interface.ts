export interface Cattle {
    idGanado: number;
    nombre: string;
    sexo: 'Macho' | 'Hembra';
    nacimiento: Date;
    idTipo: number;
    idRaza: number;
    idUbicacion: number;
    estadoReproductivo: string; // 'P' (Preñada) o 'N' (Normal)
  }
  