import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HealthStatus } from '../models/health-status.interface';
import { HealthStatusService } from '../services/health-status.service';
import { CattleService } from '../services/cattle.service';
import { Cattle } from '../models/cattle.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-health-status-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './health-status-add.component.html',
  styleUrls: ['./health-status-add.component.css'],
})
export class HealthStatusAddComponent implements OnInit {
  // Objeto estado de salud
  healthStatus: HealthStatus = {
    idEstado: 0,
    idganado: 0,
    fecha: new Date(),
    peso: 0,
    temperatura: '',
    observacion: '',
    estadovida: '',
  };

  // Lista de ganado
  cattleList: Cattle[] = [];

  // Mensaje de error
  errorMessage: string = '';

  constructor(
    private healthStatusService: HealthStatusService,
    private cattleService: CattleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Cargar la lista de ganado
    this.cargarGanado();
  }

  cargarGanado(): void {
    this.cattleService.getAll().subscribe({
      next: (cattle) => {
        this.cattleList = cattle;
      },
      error: (error) => {
        console.error('Error al cargar la lista de ganado', error);
      },
    });
  }

  agregarEstadoSalud(): void {
    // Validar los campos obligatorios
    if (
      !this.healthStatus.idganado ||
      !this.healthStatus.fecha ||
      !this.healthStatus.peso ||
      !this.healthStatus.temperatura ||
      !this.healthStatus.estadovida
    ) {
      this.errorMessage = 'Todos los campos son requeridos.';
      return;
    }

    this.confirmarAgregarEstadoSalud();
  }

  confirmarAgregarEstadoSalud(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas agregar este estado de salud?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.healthStatusService.create(this.healthStatus).subscribe({
          next: (status) => {
            Swal.fire(
              '¡Estado agregado!',
              `El estado de salud ha sido agregado con éxito.`,
              'success'
            );
            this.router.navigate(['/dashboard/estado-salud']);
          },
          error: (error) => {
            Swal.fire(
              '¡Error!',
              'Ha ocurrido un error al agregar el estado de salud.',
              'error'
            );
          },
        });
      }
    });
  }
}
