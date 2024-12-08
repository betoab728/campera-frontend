//codigo para el servicio de tipo de ganado
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CattleType } from '../models/cattle-type.interface';
import { Endpoints } from '../../../api/endpoints';

@Injectable({
  providedIn: 'root'
})

export class CattleTypeService {
  private apiUrl = Endpoints.tipoGanado;

  constructor(private http: HttpClient) {}

  // Método para listar todos los registros
  getAll(): Observable<CattleType[]> {
    return this.http.get<CattleType[]>(`${this.apiUrl}`);
  }

  // Método para agregar un registro
  create(cattleType: CattleType): Observable<CattleType> {
    return this.http.post<CattleType>(`${this.apiUrl}`, cattleType);
  }
}