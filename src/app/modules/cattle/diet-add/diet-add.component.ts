import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Diet } from '../models/diet.interface';
import { DietService } from '../services/diet.service';
import { CattleTypeService } from '../services/cattle-type.service';
import { CattleType } from '../models/cattle-type.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-diet-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './diet-add.component.html',
  styleUrls: ['./diet-add.component.css'],
})
export class DietAddComponent implements OnInit {
  // Objeto dieta
  diet: Diet = {
    idDieta: 0,
    nombre: '',
    idtipoganado: 0,
    descripcion: '',
    fecha: new Date(),
  };

  // Lista de tipos de ganado
  cattleTypes: CattleType[] = [];

  // Mensaje de error
  errorMessage: string = '';

  constructor(
    private dietService: DietService,
    private cattleTypeService: CattleTypeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Cargar los tipos de ganado
    this.cargarTiposDeGanado();
  }

  cargarTiposDeGanado(): void {
    this.cattleTypeService.getAll().subscribe({
      next: (cattleTypes) => {
        this.cattleTypes = cattleTypes;
      },
      error: (error) => {
        console.error('Error al cargar tipos de ganado', error);
      },
    });
  }

  agregarDieta(): void {
    if (!this.diet.nombre || !this.diet.idtipoganado || !this.diet.fecha) {
      this.errorMessage = 'Todos los campos son requeridos';
      return;
    }

    this.confirmarAgregarDieta();
  }

  confirmarAgregarDieta(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas agregar esta dieta?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        
        console.log(this.diet);

        this.dietService.create(this.diet).subscribe({
          next: (diet) => {
            Swal.fire(
              '¡Dieta agregada!',
              `La dieta "${diet.nombre}" ha sido agregada con éxito.`,
              'success'
            );
            this.router.navigate(['/dashboard/dieta']);
          },
          error: (error) => {
            Swal.fire(
              '¡Error!',
              'Ha ocurrido un error al agregar la dieta',
              'error'
            );
          },
        });
      }
    });
  }
}
