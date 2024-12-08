import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CattleType } from '../models/cattle-type.interface';
import { CattleTypeService } from '../services/cattle-type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-cattle-type',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './type-add.component.html',
  styleUrls: ['./type-add.component.css']
})
export class TypeAddComponent implements OnInit {
  // Objeto tipo de ganado
  cattleType: CattleType = {
    idTipo: 0,
    nombre: '',
    descripcion: ''
  };

  // Mensaje de error
  errorMessage: string = '';

  constructor(
    private cattleTypeService: CattleTypeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Inicialización adicional si es necesario
  }

  agregarTipoGanado(): void {
    // Validación de campos
    if (!this.cattleType.nombre || !this.cattleType.descripcion) {
      this.errorMessage = 'Todos los campos son requeridos';
      return;
    }

    // Confirmación con SweetAlert2
    this.confirmarAgregarTipoGanado();
  }

  confirmarAgregarTipoGanado(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas agregar este tipo de ganado?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        // Llamada al servicio para guardar el tipo de ganado
        this.cattleTypeService.create(this.cattleType).subscribe({
          next: (cattleType) => {
            Swal.fire(
              '¡Tipo de ganado agregado!',
              `El tipo de ganado "${cattleType.nombre}" ha sido agregado con éxito.`,
              'success'
            );
            this.router.navigate(['/dashboard/ganado']);
          },
          error: (error) => {
            Swal.fire('¡Error!', 'Ha ocurrido un error al agregar el tipo de ganado', 'error');
          }
        });
      }
    });
  }
}
