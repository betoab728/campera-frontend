import { Component, OnInit } from '@angular/core';
import { CattleService } from '../services/cattle.service'; //
import { Cattle } from '../models/cattle.interface';
import { CommonModule } from '@angular/common';
//fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

//pipe fecha

@Component({
  selector: 'app-cattle-list',
  standalone: true,
  templateUrl: './cattle-list.component.html',
  styleUrls: ['./cattle-list.component.css'],
  imports: [CommonModule,FontAwesomeModule]
})
export class CattleListComponent implements OnInit {
  cattleList: Cattle[] = []; // Lista de ganado
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private cattleService: CattleService) {}

  ngOnInit(): void {
    this.loadCattle(); // Cargar el listado al inicializar el componente
  }

  // Método para obtener todos los registros de ganado
  loadCattle(): void {
    this.cattleService.getAll().subscribe({
      next: (data) => {
        this.cattleList = data;
      },
      error: (err) => {
        console.error('Error al cargar la lista de ganado', err);
      },
    });
  }

  nuevo(): void{

  }
  
}
