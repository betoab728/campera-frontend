
import { Component, OnInit } from '@angular/core';
import { CattleTypeService } from '../services/cattle-type.service'; //
import { CattleType  } from '../models/cattle-type.interface';
import { CommonModule } from '@angular/common'; 
//fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
//para las rutas
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-type-list',
  standalone: true,
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css'],
  imports: [CommonModule,FontAwesomeModule,RouterLink]
})

export class TypeListComponent implements OnInit {
  typeList: CattleType[] = []; // Lista de tipos de ganado
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private cattleTypeService: CattleTypeService) {}

  ngOnInit(): void {
    this.loadType(); // Cargar el listado al inicializar el componente
  }

  // Método para obtener todos los registros de tipos de ganado
  loadType(): void {
    this.cattleTypeService.getAll().subscribe({
      next: (data) => {
        this.typeList = data;
      },
      error: (err) => {
        console.error('Error al cargar la lista de tipos de ganado', err);
      },
    });
  }

}



