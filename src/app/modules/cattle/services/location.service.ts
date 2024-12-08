//servicio para la ubicación
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Location } from '../models/location.interface';
import { Endpoints } from '../../../api/endpoints';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = Endpoints.ubicacion;

  constructor(private http: HttpClient) {}

  // Método para listar todos los registros
  getAll(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.apiUrl}`);
  }

  // Método para agregar un registro
  create(location: Location): Observable<Location> {
    return this.http.post<Location>(`${this.apiUrl}`, location);
  }
}