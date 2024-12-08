//servicio para la gestion de reproduccion
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reproduction } from '../models/reproduction.interface';
import { Endpoints } from '../../../api/endpoints';

@Injectable({
  providedIn: 'root'
})

export class ReproductionService {
  private apiUrl = Endpoints.reproduccion;

  constructor(private http: HttpClient) {}

  // Método para listar todos los registros
  getAll(): Observable<Reproduction[]> {
    return this.http.get<Reproduction[]>(`${this.apiUrl}`);
  }

  // Método para agregar un registro
  create(reproduction: Reproduction): Observable<Reproduction> {
    return this.http.post<Reproduction>(`${this.apiUrl}`, reproduction);
  }
}