//servicio para la gestion de dietas
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diet } from '../models/diet.interface';
import { Endpoints } from '../../../api/endpoints';

@Injectable({
  providedIn: 'root'
})
export class DietService {
  private apiUrl = Endpoints.dieta;

  constructor(private http: HttpClient) {}

  // Método para listar todos los registros
  getAll(): Observable<Diet[]> {
    return this.http.get<Diet[]>(`${this.apiUrl}`);
  }

  // Método para agregar un registro
  create(diet: Diet): Observable<Diet> {
    console.log( "registro de diet en servicio: ", diet);
    return this.http.post<Diet>(`${this.apiUrl}`, diet);
  }
}