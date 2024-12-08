//servicio para la gestion de vacunas
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaccine } from '../models/vaccine.interface';
import { Endpoints } from '../../../api/endpoints';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  private apiUrl = Endpoints.vacuna;

  constructor(private http: HttpClient) {}

  // Método para listar todos los registros
  getAll(): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>(`${this.apiUrl}`);
  }

  // Método para agregar un registro
  create(vaccine: Vaccine): Observable<Vaccine> {
    return this.http.post<Vaccine>(`${this.apiUrl}`, vaccine);
  }
}