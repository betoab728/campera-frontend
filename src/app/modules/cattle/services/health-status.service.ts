//servicio para el estado de salud de los animales
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HealthStatus } from '../models/health-status.interface';
import { Endpoints } from '../../../api/endpoints';

@Injectable({
  providedIn: 'root'
})

export class HealthStatusService {
  private apiUrl = Endpoints.estadoSalud;

  constructor(private http: HttpClient) {}

  // Método para listar todos los registros
  getAll(): Observable<HealthStatus[]> {
    return this.http.get<HealthStatus[]>(`${this.apiUrl}`);
  }

  // Método para agregar un registro
  create(healthStatus: HealthStatus): Observable<HealthStatus> {
    return this.http.post<HealthStatus>(`${this.apiUrl}`, healthStatus);
  }
}