//codigo para el componente de la lista de vacunas
import { Component, OnInit } from '@angular/core';
import { Vaccine } from '../models/vaccine.interface';
import { VaccineService } from '../services/vaccine.service';
import { CommonModule } from '@angular/common';
//fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vaccine-list',
  standalone: true,
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.css'],
  imports: [CommonModule,FontAwesomeModule]
})
export class VaccineListComponent implements OnInit {
  vaccineList: Vaccine[] = []; // Lista de vacunas
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private vaccineService: VaccineService) {}

  ngOnInit(): void {
    this.loadVaccine(); // Cargar el listado al inicializar el componente
  }

  // Método para obtener todos los registros de vacunas
  loadVaccine(): void {
    this.vaccineService.getAll().subscribe({
      next: (data) => {
        this.vaccineList = data;
      },
      error: (err) => {
        console.error('Error al cargar la lista de vacunas', err);
      },
    });
  }
}
