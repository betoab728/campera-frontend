//codigo para listar las ubicaciones

import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Location } from '../models/location.interface';
import { CommonModule } from '@angular/common';
//fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
//para las rutas
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-location-list',
  standalone: true,
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
  imports: [CommonModule,FontAwesomeModule,RouterLink]
})

export class LocationListComponent implements OnInit {
  locationList: Location[] = []; // Lista de ubicaciones
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.loadLocation(); // Cargar el listado al inicializar el componente
  }

  // Método para obtener todos los registros de ubicaciones
  loadLocation(): void {
    this.locationService.getAll().subscribe({
      next: (data) => {
        this.locationList = data;
      },
      error: (err) => {
        console.error('Error al cargar la lista de ubicaciones', err);
      },
    });
  }

}