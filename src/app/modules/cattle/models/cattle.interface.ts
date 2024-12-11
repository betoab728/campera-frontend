export interface Cattle {
    idganado: number;
    nombre: string;
    sexo: 'Macho' | 'Hembra';
    nacimiento: Date;
    idtipoganado: number;
    idraza: number;
    idubicacion: number;
    estadoReproductivo: string; // 'P' (Preñada) o 'N' (Normal)
  }
  