import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Reproduction } from '../models/reproduction.interface';
import { ReproductionService } from '../services/reproduction.service';
import { CattleService } from '../services/cattle.service';
import { Cattle } from '../models/cattle.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reproduction-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reproduction-add.component.html',
  styleUrls: ['./reproduction-add.component.css'],
})
export class ReproductionAddComponent implements OnInit {
  reproduction: Reproduction = {
    idReproduccion: 0,
    idGanado: 0,
    fecha: new Date(),
    crias: 0,
    observaciones: '',
  };

  cattleList: Cattle[] = [];
  errorMessage: string = '';

  constructor(
    private reproductionService: ReproductionService,
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

  agregarReproduccion(): void {
    if (!this.reproduction.idGanado || !this.reproduction.fecha || !this.reproduction.crias) {
      this.errorMessage = 'Todos los campos son requeridos.';
      return;
    }

    this.confirmarAgregarReproduccion();
  }

  confirmarAgregarReproduccion(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas agregar esta reproducción?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.reproductionService.create(this.reproduction).subscribe({
          next: (response) => {
            Swal.fire(
              '¡Reproducción agregada!',
              'Los datos de reproducción han sido registrados correctamente.',
              'success'
            );
            this.router.navigate(['/dashboard/reproducciones']);
          },
          error: (error) => {
            Swal.fire(
              '¡Error!',
              'Ocurrió un error al registrar los datos de reproducción.',
              'error'
            );
          },
        });
      }
    });
  }
}
