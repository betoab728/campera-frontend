import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '../models/location.interface';
import { LocationService } from '../services/location.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-location-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.css']
})
export class LocationAddComponent implements OnInit {
  // Objeto ubicación
  location: Location = {
    idUbicacion: 0,
    nombre: '',
    descripcion: ''
  };

  // Mensaje de error
  errorMessage: string = '';

  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Inicialización adicional si es necesario
  }

  agregarUbicacion(): void {
    // Validación de campos
    if (!this.location.nombre) {
      this.errorMessage = 'El nombre es obligatorio';
      return;
    }

    // Confirmación con SweetAlert2
    this.confirmarAgregarUbicacion();
  }

  confirmarAgregarUbicacion(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas agregar esta ubicación?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        // Llamada al servicio para guardar la ubicación
        this.locationService.create(this.location).subscribe({
          next: (location) => {
            Swal.fire(
              '¡Ubicación agregada!',
              `La ubicación "${location.nombre}" ha sido agregada con éxito.`,
              'success'
            );
            this.router.navigate(['/dashboard/ubicacion']);
          },
          error: (error) => {
            Swal.fire('¡Error!', 'Ha ocurrido un error al agregar la ubicación', 'error');
          }
        });
      }
    });
  }
}
