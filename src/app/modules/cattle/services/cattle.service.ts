import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cattle } from '../models/cattle.interface'; // Ajusta la ruta del modelo si es diferente
import { Endpoints } from '../../../api/endpoints'; // Archivo con los endpoints

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
    return this.http.post<Cattle>(`${this.apiUrl}`, cattle);
  }
}
