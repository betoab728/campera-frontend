import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { LayoutComponent } from './modules/dashboard/layout/layout.component';


export const routes: Routes = [
    //se carga el login en primer lugar
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    //se carga el login

    { path: 'login', component: LoginComponent },
    {path: 'dashboard', component: LayoutComponent}

];
