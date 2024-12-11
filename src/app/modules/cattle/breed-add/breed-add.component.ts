import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Breed } from './../models/breed.interface';
import { BreedService } from './../services/breed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breed-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './breed-add.component.html',
  styleUrls: ['./breed-add.component.css']
})
export class BreedAddComponent {
  // Objeto raza
  breed: Breed = {
    idraza: 0,
    nombre: '',
    descripcion: ''
  };

  // Mensaje de error
  errorMessage: string = '';

  constructor(private breedService: BreedService, private router: Router) {}

  agregarRaza(): void {
    // Validación de campos
    if (!this.breed.nombre || !this.breed.descripcion) {
      this.errorMessage = 'Todos los campos son requeridos';
      return;
    }

    // Confirmación con SweetAlert2
    this.confirmarAgregarRaza();
  }

  confirmarAgregarRaza(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas agregar esta raza?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        // Llamada al servicio para guardar la raza
        this.breedService.create(this.breed).subscribe({
          next: (breed) => {
            Swal.fire(
              '¡Raza agregada!',
              `La raza "${breed.nombre}" ha sido agregada con éxito.`,
              'success'
            );
            this.router.navigate(['/dashboard/raza']);
          },
          error: () => {
            Swal.fire('¡Error!', 'Ha ocurrido un error al agregar la raza', 'error');
          }
        });
      }
    });
  }
}
