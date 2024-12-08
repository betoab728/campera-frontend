//codigo para el componente estado de salud
import { Component, OnInit } from '@angular/core';
import { HealthStatus } from '../models/health-status.interface';
import { HealthStatusService } from '../services/health-status.service';
import { CommonModule } from '@angular/common';
//fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-health-status-list',
  standalone: true,
  templateUrl: './health-status-list.component.html',
  styleUrls: ['./health-status-list.component.css'],
  imports: [CommonModule,FontAwesomeModule,RouterLink]
})
export class HealthStatusListComponent implements OnInit {
  healthStatusList: HealthStatus[] = []; // Lista de estados de salud
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private healthStatusService: HealthStatusService) {}

  ngOnInit(): void {
    this.loadHealthStatus(); // Cargar el listado al inicializar el componente
  }

  // Método para obtener todos los registros de estados de salud
  loadHealthStatus(): void {
    this.healthStatusService.getAll().subscribe({
      next: (data) => {
        this.healthStatusList = data;
      },
      error: (err) => {
        console.error('Error al cargar la lista de estados de salud', err);
      },
    });
  }

  mapEstadoVida(estado: string): string {
  
    switch (estado) {
      case 'v':
        return 'Vivo';
      case 'm':
        return 'Muerto';
      case 'e':
        return 'Enfermo';
    
      default:
        return 'Desconocido';
  }
}
}