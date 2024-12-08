//codigo para el componente apareamiento 
import { Component, OnInit } from '@angular/core';
import { MatingService } from '../services/mating.service';
import { Mating } from '../models/mating.interface';
import { CommonModule } from '@angular/common';
//fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
//para las rutas
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mating-list',
  standalone: true,
  templateUrl: './mating-list.component.html',
  styleUrls: ['./mating-list.component.css'],
  imports: [CommonModule,FontAwesomeModule,RouterLink]
})
export class MatingListComponent implements OnInit {
  matingList: Mating[] = []; // Lista de apareamientos
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private matingService: MatingService) {}

  ngOnInit(): void {
    this.loadMating(); // Cargar el listado al inicializar el componente
  }

  // Método para obtener todos los registros de apareamientos
  loadMating(): void {
    this.matingService.getAll().subscribe({
      next: (data) => {
        this.matingList = data;
      },
      error: (err) => {
        console.error('Error al cargar la lista de apareamientos', err);
      },
    });

  } 
}