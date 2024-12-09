import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Mating } from '../models/mating.interface';
import { CattleService } from '../services/cattle.service';
import { MatingService } from '../services/mating.service';
import { Cattle } from '../models/cattle.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mating-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './mating-add.component.html',
  styleUrls: ['./mating-add.component.css'],
})
export class MatingAddComponent implements OnInit {
  mating: Mating = {
    idApareamiento: 0,
    idhembra: 0,
    idmacho: 0,
    fecha: new Date(),
    observaciones: '',
    resultado: '',
  };

  femaleCattleList: Cattle[] = [];
  maleCattleList: Cattle[] = [];
  errorMessage: string = '';

  constructor(
    private cattleService: CattleService,
    private matingService: MatingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCattle();
  }

  loadCattle(): void {
    this.cattleService.getAll().subscribe({
      next: (cattle) => {
        // Filtra correctamente hembras y machos
        
       
        this.femaleCattleList = cattle.filter((animal) => animal.sexo === 'Hembra');
        this.maleCattleList = cattle.filter((animal) => animal.sexo === 'Macho');

        console.log('Hembras:', this.femaleCattleList);
        console.log('Machos:', this.maleCattleList);

      },
      error: (error) => {
        console.error('Error al cargar la lista de ganado:', error);
      },
    });
  }

  addMating(): void {
    if (!this.mating.idhembra || !this.mating.idmacho || !this.mating.fecha || !this.mating.resultado) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }

    if (this.mating.idhembra === this.mating.idmacho) {
      this.errorMessage = 'El macho y la hembra no pueden ser el mismo animal.';
      return;
    }

    this.confirmAddMating();
  }

  confirmAddMating(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas registrar este apareamiento?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, registrar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.matingService.create(this.mating).subscribe({
          next: (response) => {
            Swal.fire(
              '¡Apareamiento registrado!',
              'El apareamiento se ha registrado correctamente.',
              'success'
            );
            this.router.navigate(['/dashboard/apareamiento']);
          },
          error: (error) => {
            Swal.fire('¡Error!', 'Ocurrió un error al registrar el apareamiento.', 'error');
          },
        });
      }
    });
  }
}
