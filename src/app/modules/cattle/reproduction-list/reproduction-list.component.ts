//codigo para el componente reproduccion
import { Component, OnInit } from '@angular/core';
import { Reproduction } from '../models/reproduction.interface';
import { ReproductionService } from '../services/reproduction.service';
import { CommonModule } from '@angular/common';
//fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reproduction-list',
  standalone: true,
  templateUrl: './reproduction-list.component.html',
  styleUrls: ['./reproduction-list.component.css'],
  imports: [CommonModule,FontAwesomeModule,RouterLink]
})
export class ReproductionListComponent implements OnInit {
  reproductionList: Reproduction[] = []; // Lista de reproducciones
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private reproductionService: ReproductionService) {}

  ngOnInit(): void {
    this.loadReproduction(); // Cargar el listado al inicializar el componente
  }

  // Método para obtener todos los registros de reproducciones
  loadReproduction(): void {
    this.reproductionService.getAll().subscribe({
      next: (data) => {
        this.reproductionList = data;
      },
      error: (err) => {
        console.error('Error al cargar la lista de reproducciones', err);
      },
    });
  }
}