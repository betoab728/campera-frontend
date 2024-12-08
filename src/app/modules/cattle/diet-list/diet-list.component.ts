//codigo para el componente de la lista de dietas
import { Component, OnInit } from '@angular/core';
import { Diet } from '../models/diet.interface';
import { DietService } from '../services/diet.service';
import { CommonModule } from '@angular/common';
//para las rutas
import { RouterLink } from '@angular/router';
//fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-diet-list',
  standalone: true,
  templateUrl: './diet-list.component.html',
  styleUrls: ['./diet-list.component.css'],
  imports: [CommonModule,FontAwesomeModule,RouterLink]
})
export class DietListComponent implements OnInit {
  dietList: Diet[] = []; // Lista de dietas
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private dietService: DietService) {}

  ngOnInit(): void {
    this.loadDiet(); // Cargar el listado al inicializar el componente
  }

  // Método para obtener todos los registros de dietas
  loadDiet(): void {
    this.dietService.getAll().subscribe({
      next: (data) => {
        this.dietList = data;
      },
      error: (err) => {
        console.error('Error al cargar la lista de dietas', err);
      },
    });
  }
}
