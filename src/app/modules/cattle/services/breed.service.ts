//servicio para la raza de ganado
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breed } from '../models/breed.interface';
import { Endpoints } from '../../../api/endpoints';

@Injectable({
  providedIn: 'root'
})

export class BreedService {
  private apiUrl = Endpoints.raza;

  constructor(private http: HttpClient) {}

  // Método para listar todos los registros
  getAll(): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${this.apiUrl}`);
  }

  // Método para agregar un registro
  create(breed: Breed): Observable<Breed> {
    return this.http.post<Breed>(`${this.apiUrl}`, breed);
  }
}
