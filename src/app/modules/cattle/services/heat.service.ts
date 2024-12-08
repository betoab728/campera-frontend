//servicio para la gestion de celos
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heat } from '../models/heat.interface';
import { Endpoints } from '../../../api/endpoints';

@Injectable({
  providedIn: 'root'
})
export class HeatService {
  private apiUrl = Endpoints.celo;

  constructor(private http: HttpClient) {}

  // Método para listar todos los registros
  getAll(): Observable<Heat[]> {
    return this.http.get<Heat[]>(`${this.apiUrl}`);
  }

  // Método para agregar un registro
  create(heat: Heat): Observable<Heat> {
    return this.http.post<Heat>(`${this.apiUrl}`, heat);
  }
}