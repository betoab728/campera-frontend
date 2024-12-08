//servicio para el tratamiento de los animales
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Treatment } from '../models/treatment.interface';
import { Endpoints } from '../../../api/endpoints';

@Injectable({
  providedIn: 'root'
})

export class TreatmentService {
  private apiUrl = Endpoints.tratamiento;

  constructor(private http: HttpClient) {}

  // Método para listar todos los registros
  getAll(): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(`${this.apiUrl}`);
  }

  // Método para agregar un registro
  create(treatment: Treatment): Observable<Treatment> {
    return this.http.post<Treatment>(`${this.apiUrl}`, treatment);
  }
}