import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Heat } from '../models/heat.interface';
import { HeatService } from '../services/heat.service';
import { CattleService } from '../services/cattle.service';
import { Cattle } from '../models/cattle.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heat-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './heat-add.component.html',
  styleUrls: ['./heat-add.component.css'],
})
export class HeatAddComponent implements OnInit {
  heat: Heat = {
    id: 0,
    idganado: 0,
    fechaInicio: new Date(),
    fechafin: new Date(),
    observaciones: '',
  };

  cattleList: Cattle[] = [];
  errorMessage: string = '';

  constructor(
    private heatService: HeatService,
    private cattleService: CattleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCattle();
  }

  loadCattle(): void {
    this.cattleService.getAll().subscribe({
      next: (cattle) => {
        this.cattleList = cattle;
      },
      error: (error) => {
        console.error('Error al cargar la lista de ganado:', error);
      },
    });
  }

  addHeat(): void {
    if (!this.heat.idganado || !this.heat.fechaInicio || !this.heat.fechafin) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }

    if (this.heat.fechaInicio > this.heat.fechafin) {
      this.errorMessage = 'La fecha de inicio no puede ser mayor que la fecha de fin.';
      return;
    }

    this.confirmAddHeat();
  }

  confirmAddHeat(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas registrar este celo?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, registrar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.heatService.create(this.heat).subscribe({
          next: (response) => {
            Swal.fire(
              '¡Celo registrado!',
              'El celo del ganado ha sido registrado correctamente.',
              'success'
            );
            this.router.navigate(['/dashboard/celo']);
          },
          error: (error) => {
            Swal.fire(
              '¡Error!',
              'Ocurrió un error al registrar el celo.',
              'error'
            );
          },
        });
      }
    });
  }
}
