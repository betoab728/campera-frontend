import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cattle } from '../models/cattle.interface';
import { CattleService } from '../services/cattle.service';
import { BreedService } from '../services/breed.service';
import { CattleTypeService } from '../services/cattle-type.service';
import { LocationService } from '../services/location.service';
import { Breed } from '../models/breed.interface';
import { CattleType } from '../models/cattle-type.interface';
import { Location } from '../models/location.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cattle-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cattle-add.component.html',
  styleUrls: ['./cattle-add.component.css'],
})
export class CattleAddComponent implements OnInit {
  cattle: Cattle = {
    idganado: 0,
    nombre: '',
    sexo: 'Macho',
    nacimiento: new Date(),
    idtipoganado: 0,
    idraza: 0,
    idubicacion: 0,
    estadoReproductivo: 'N',
  };

  breeds: Breed[] = [];
  cattleTypes: CattleType[] = [];
  locations: Location[] = [];

  constructor(
    private cattleService: CattleService,
    private breedService: BreedService,
    private cattleTypeService: CattleTypeService,
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarRazas();
    this.cargarTiposDeGanado();
    this.cargarUbicaciones();
  }

  cargarRazas(): void {
    this.breedService.getAll().subscribe({
      next: (breeds) => (this.breeds = breeds),
      error: (error) => console.error('Error al cargar razas', error),
    });
  }

  cargarTiposDeGanado(): void {
    this.cattleTypeService.getAll().subscribe({
      next: (cattleTypes) => (this.cattleTypes = cattleTypes),
      error: (error) => console.error('Error al cargar tipos de ganado', error),
    });
  }

  cargarUbicaciones(): void {
    this.locationService.getAll().subscribe({
      next: (locations) => (this.locations = locations),
      error: (error) => console.error('Error al cargar ubicaciones', error),
    });
  }

  agregarGanado(): void {
    if (!this.cattle.nombre || !this.cattle.idtipoganado || !this.cattle.idraza || !this.cattle.idubicacion) {
      Swal.fire('Campos obligatorios', 'Todos los campos son requeridos.', 'error');
      return;
    }

    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas agregar este ganado?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cattleService.create(this.cattle).subscribe({
          next: (response) => {
            Swal.fire('¡Éxito!', 'El ganado ha sido registrado con éxito.', 'success');
            this.router.navigate(['/dashboard/ganado']);
          },
          error: (error) => {
            Swal.fire('Error', 'Ocurrió un error al registrar el ganado.', 'error');
            console.error(error);
          },
        });
      }
    });
  }
}
