//codigo para el componente tratamiento
import { Component, OnInit } from '@angular/core';
import { Treatment } from '../models/treatment.interface';
import { TreatmentService } from '../services/treatment.service';
import { CommonModule } from '@angular/common';
//fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-treatment-list',
  standalone: true,
  templateUrl: './treatment-list.component.html',
  styleUrls: ['./treatment-list.component.css'],
  imports: [CommonModule,FontAwesomeModule,RouterLink]
})
export class TreatmentListComponent implements OnInit {
  treatmentList: Treatment[] = []; // Lista de tratamientos
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private treatmentService: TreatmentService) {}

  ngOnInit(): void {
    this.loadTreatment(); // Cargar el listado al inicializar el componente
  }

  // Método para obtener todos los registros de tratamientos
  loadTreatment(): void {
    this.treatmentService.getAll().subscribe({
      next: (data) => {
        this.treatmentList = data;
      },
      error: (err) => {
        console.error('Error al cargar la lista de tratamientos', err);
      },
    });
  }
}