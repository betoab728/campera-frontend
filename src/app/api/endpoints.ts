import { environment } from './environment'; 

const BASE_URL_GANADO = environment.apiGanado;



export const Endpoints = {

    login: `${environment.apiUsers}/login`,

  ganado: `${BASE_URL_GANADO}/ganado`,
  tipoGanado: `${BASE_URL_GANADO}/tipo-ganado`,
  ubicacion: `${BASE_URL_GANADO}/ubicacion`,
  raza: `${BASE_URL_GANADO}/raza`,
  dieta: `${BASE_URL_GANADO}/dieta`,
  celo: `${BASE_URL_GANADO}/celo`,
  reproduccion: `${BASE_URL_GANADO}/reproduccion`,
  vacuna: `${BASE_URL_GANADO}/vacuna`,
  apareamiento: `${BASE_URL_GANADO}/apareamiento`,
  tratamiento: `${BASE_URL_GANADO}/tratamiento`,
  estadoSalud: `${BASE_URL_GANADO}/estado-salud`,
 
  };