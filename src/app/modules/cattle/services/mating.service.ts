//servicio para la gestión de los apareamientos
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mating } from '../models/mating.interface';
import { Endpoints } from '../../../api/endpoints';

@Injectable({
  providedIn: 'root'
})
export class MatingService {

  constructor(private http: HttpClient) { }

  //método para obtener todos los apareamientos
  getAll(): Observable<Mating[]> {
    return this.http.get<Mating[]>(Endpoints.apareamiento);
  }

  //método para crear un apareamiento
  create(mating: Mating): Observable<Mating> {
    return this.http.post<Mating>(Endpoints.apareamiento, mating);
  }


}