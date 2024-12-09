import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Vaccine } from '../models/vaccine.interface';
import { VaccineService } from '../services/vaccine.service';
import { CattleService } from '../services/cattle.service';
import { Cattle } from '../models/cattle.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vaccine-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './vaccine-add.component.html',
  styleUrls: ['./vaccine-add.component.css'],
})
export class VaccineAddComponent implements OnInit {
  vaccine: Vaccine = {
    idVacuna: 0,
    idganado: 0,
    fecha: new Date(),
    observaciones: '',
  };

  cattleList: Cattle[] = [];
  errorMessage: string = '';

  constructor(
    private vaccineService: VaccineService,
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

  addVaccine(): void {
    if (!this.vaccine.idganado || !this.vaccine.fecha || !this.vaccine.observaciones?.trim()) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }

    this.confirmAddVaccine();
  }

  confirmAddVaccine(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas agregar esta vacuna?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.vaccineService.create(this.vaccine).subscribe({
          next: (response) => {
            Swal.fire(
              '¡Vacuna agregada!',
              'Los datos de la vacuna han sido registrados correctamente.',
              'success'
            );
            this.router.navigate(['/dashboard/vacunas']);
          },
          error: (error) => {
            Swal.fire(
              '¡Error!',
              'Ocurrió un error al registrar la vacuna.',
              'error'
            );
          },
        });
      }
    });
  }
}
