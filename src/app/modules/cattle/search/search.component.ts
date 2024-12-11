import { Component,OnInit  } from '@angular/core';
import { CattleService } from '../services/cattle.service';
import { CattleDetails } from '../models/CattleDetails.interface';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  animalId: number | null = null;
  animal: CattleDetails | null = null;
  errorMessage: string | null = null;


  constructor(private cattleService: CattleService) {}

  searchAnimal(): void {
    if (!this.animalId) {
      this.errorMessage = 'Por favor, ingrese un ID válido.';
      this.animal = null;
      return;
    }

    this.cattleService.getById(this.animalId).subscribe({
      next: (data) => {
        this.animal = data;
        this.errorMessage = null;

        console.log('Animal encontrado:', this.animal);
      },
      error: () => {
        this.errorMessage = 'No se encontró el animal con el ID proporcionado.';
        this.animal = null;
      },
    });
  }

  getAnimalImage(tipoGanado: string): string {
    const animalImages: { [key: string]: string } = {

      'vaca': 'img/vaca.png',
      'pavo': 'img/pavo.png',
      'cerdo': 'img/cerdo.png',
      'pollo': 'img/pollo.png',
      'oveja': 'img/oveja.png',
      'conejo': 'img/conejo.png',
      'caballo': 'img/caballo.png',
      'cabra': 'img/cabra.png',
      'gallo': 'img/gallo.png',
      'gallina': 'img/gallina.png',
      'pato': 'img/pato.png',

     

    };

    console.log('Tipo de ganado:', tipoGanado);
  
    // Convertimos el tipo a minúsculas para que la comparación sea insensible a mayúsculas/minúsculas
    const image = animalImages[tipoGanado.toLowerCase()];
    
    console.log('Imagen encontrada:', image);

    // Si no se encuentra la imagen, devolvemos una imagen predeterminada
    return image || 'assets/default.jpg';
  }

}
