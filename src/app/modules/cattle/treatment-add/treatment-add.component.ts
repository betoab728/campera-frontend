import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Treatment } from '../models/treatment.interface';
import { TreatmentService } from '../services/treatment.service';
import { CattleService } from '../services/cattle.service';
import { Cattle } from '../models/cattle.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-treatment-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './treatment-add.component.html',
  styleUrls: ['./treatment-add.component.css'],
})
export class TreatmentAddComponent implements OnInit {
  treatment: Treatment = {
    idTratamiento: 0,
    idGanado: 0,
    fecha: new Date(),
    descripcion: '',
  };

  cattleList: Cattle[] = [];
  errorMessage: string = '';

  constructor(
    private treatmentService: TreatmentService,
    private cattleService: CattleService,
    private router: Router
  ) {}

  ngOnInit(): void {
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

  agregarTratamiento(): void {
    if (!this.treatment.idGanado || !this.treatment.fecha || !this.treatment.descripcion.trim()) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }

    this.confirmarAgregarTratamiento();
  }

  confirmarAgregarTratamiento(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas agregar este tratamiento?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.treatmentService.create(this.treatment).subscribe({
          next: (response) => {
            Swal.fire(
              '¡Tratamiento agregado!',
              'Los datos del tratamiento han sido registrados correctamente.',
              'success'
            );
            this.router.navigate(['/dashboard/tratamientos']);
          },
          error: (error) => {
            Swal.fire(
              '¡Error!',
              'Ocurrió un error al registrar el tratamiento.',
              'error'
            );
          },
        });
      }
    });
  }
}
