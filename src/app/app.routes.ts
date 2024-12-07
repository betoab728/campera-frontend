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
        {path:'users-list',loadComponent: () => import('./modules/users/user/components/users-list/users-list.component').then(m => m.UsersListComponent) },
        { path:'employees-list',loadComponent: () => import('./modules/users/employee/components/employee-list/employee-list.component').then(m => m.EmployeeListComponent) },
        {path: 'apareamiento',loadComponent: () => import('./modules/cattle/mating-list/mating-list.component').then(m => m.MatingListComponent) },
        {path: 'celo',loadComponent: () => import('./modules/cattle/heat-list/heat-list.component').then(m => m.HeatListComponent) },
        {path: 'vacunas',loadComponent: () => import('./modules/cattle/vaccine-list/vaccine-list.component').then(m => m.VaccineListComponent) },
        {path: 'tratamientos',loadComponent: () => import('./modules/cattle/treatment-list/treatment-list.component').then(m => m.TreatmentListComponent) },
        {path: 'reproduccion',loadComponent: () => import('./modules/cattle/reproduction-list/reproduction-list.component').then(m => m.ReproductionListComponent) },
        {path: 'estado-salud',loadComponent: () => import('./modules/cattle/health-status-list/health-status-list.component').then(m => m.HealthStatusListComponent) },
        {path: 'dieta',loadComponent: () => import('./modules/cattle/diet-list/diet-list.component').then(m => m.DietListComponent) },
        {path: 'ubicacion',loadComponent: () => import('./modules/cattle/location-list/location-list.component').then(m => m.LocationListComponent) },
        {path: 'raza',loadComponent: () => import('./modules/cattle/breed-list/breed-list.component').then(m => m.BreedListComponent) },
        {path: 'tipo',loadComponent: () => import('./modules/cattle/type-list/type-list.component').then(m => m.TypeListComponent) },
        {path: 'ganado',loadComponent: () => import('./modules/cattle/cattle-list/cattle-list.component').then(m => m.CattleListComponent) },
        {path: 'ganado/nuevo',loadComponent: () => import('./modules/cattle/cattle-add/cattle-add.component').then(m => m.CattleAddComponent) },
    ] },

  
];
