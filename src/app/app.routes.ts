import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { LayoutComponent } from './modules/dashboard/layout/layout.component';
import { ReportsComponent } from './modules/dashboard/reports/reports.component';



export const routes: Routes = [
    //se carga el login en primer lugar
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    //se carga el login

    { path: 'login', component: LoginComponent },
    {path: 'dashboard', component: LayoutComponent ,
    children: [
        { path: '', component: ReportsComponent },
        {path:'dashboard/users-list',loadComponent: () => import('./modules/users/user/components/users-list/users-list.component').then(m => m.UsersListComponent) },
        { path:'dashboard/employees-list',loadComponent: () => import('./modules/users/employee/components/employee-list/employee-list.component').then(m => m.EmployeeListComponent) },
    ] },

  
];
