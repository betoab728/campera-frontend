//codigo para listar las razas
 import { Component, OnInit } from '@angular/core';
  import { BreedService } from '../services/breed.service';
  import { Breed } from '../models/breed.interface';
  import { CommonModule } from '@angular/common';
  //fontawesome
  import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
  import { faEdit } from '@fortawesome/free-solid-svg-icons';
  import { faTrash } from '@fortawesome/free-solid-svg-icons';
  //para las rutas
  import { RouterLink } from '@angular/router';

  @Component({
    selector: 'app-breed-list',
    standalone: true,
    templateUrl: './breed-list.component.html',
    styleUrls: ['./breed-list.component.css'],
    imports: [CommonModule,FontAwesomeModule,RouterLink]
  })

  export class BreedListComponent implements OnInit {
    breedList: Breed[] = []; // Lista de razas de ganado
    faEdit = faEdit;
    faTrash = faTrash;

    constructor(private breedService: BreedService) {}

    ngOnInit(): void {
      this.loadBreed(); // Cargar el listado al inicializar el componente
    }

    // Método para obtener todos los registros de razas de ganado
    loadBreed(): void {
      this.breedService.getAll().subscribe({
        next: (data) => {
          this.breedList = data;
        },
        error: (err) => {
          console.error('Error al cargar la lista de razas de ganado', err);
        },
      });
    }

  }