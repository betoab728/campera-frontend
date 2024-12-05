import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../models/login.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials: Login = { name: '', password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {

    //si no hay usuario o clave

    if (!this.credentials.name || !this.credentials.password) {
      this.errorMessage = 'Usuario y clave son requeridos';
      return;
    }
    
    
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log( "respuesta de la api :"+ response);
        // Guarda el token en localStorage o como desees manejarlo
        localStorage.setItem('token', response.token);
        // Redirige al dashboard o alguna página protegida
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
      
        this.errorMessage = 'Usuario o clave incorrectos';
        
      }
    });
  }


}
