import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cattle } from '../models/cattle.interface'; // Ajusta la ruta del modelo si es diferente
import { Endpoints } from '../../../api/endpoints'; // Archivo con los endpoints
import { CattleType } from '../models/cattle-type.interface';
import { CattleDetails } from '../models/CattleDetails.interface';

@Injectable({
  providedIn: 'root'
})
export class CattleService {
  private apiUrl = Endpoints.ganado;

  constructor(private http: HttpClient) {}

  // Método para listar todos los registros
  getAll(): Observable<Cattle[]> {
    return this.http.get<Cattle[]>(`${this.apiUrl}`);
  }

  // Método para agregar un registro
  create(cattle: Cattle): Observable<Cattle> {
    console.log("ganado registrado en servicio:",cattle);
    return this.http.post<Cattle>(`${this.apiUrl}`, cattle);
  }

  //metodo para obtener un registro por id
  getById(id: number): Observable<CattleDetails> {
    return this.http.get<CattleDetails>(`${this.apiUrl}/${id}`);
  }
}
