//codigo para el componente de la lista de celos
  import { Component, OnInit } from '@angular/core';
import { HeatService } from '../services/heat.service';
import { Heat } from '../models/heat.interface';
import { CommonModule } from '@angular/common';
//fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
//para las rutas
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heat-list',
  standalone: true,
  templateUrl: './heat-list.component.html',
  styleUrls: ['./heat-list.component.css'],
  imports: [CommonModule,FontAwesomeModule,RouterLink]
})
export class HeatListComponent implements OnInit {
  heatList: Heat[] = []; // Lista de celos
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private heatService: HeatService) {}

  ngOnInit(): void {
    this.loadHeat(); // Cargar el listado al inicializar el componente
  }

  // Método para obtener todos los registros de celos
  loadHeat(): void {
    this.heatService.getAll().subscribe({
      next: (data) => {
        this.heatList = data;
      },
      error: (err) => {
        console.error('Error al cargar la lista de celos', err);
      },
    });

  } 
}

