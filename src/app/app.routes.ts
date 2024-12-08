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
        {path: '', component: ReportsComponent },
        {path:'users-list',loadComponent: () => import('./modules/users/user/components/users-list/users-list.component').then(m => m.UsersListComponent) },
        {path:'employees-list',loadComponent: () => import('./modules/users/employee/components/employee-list/employee-list.component').then(m => m.EmployeeListComponent) },
        {path: 'apareamiento',loadComponent: () => import('./modules/cattle/mating-list/mating-list.component').then(m => m.MatingListComponent) },
        {path:'apareamiento/nuevo',loadComponent: () => import('./modules/cattle/mating-add/mating-add.component').then(m => m.MatingAddComponent) },
        {path: 'celo',loadComponent: () => import('./modules/cattle/heat-list/heat-list.component').then(m => m.HeatListComponent) },
        {path: 'celo/nuevo',loadComponent: () => import('./modules/cattle/heat-add/heat-add.component').then(m => m.HeatAddComponent) },
        {path: 'vacunas',loadComponent: () => import('./modules/cattle/vaccine-list/vaccine-list.component').then(m => m.VaccineListComponent) },
        {path: 'vacunas/nuevo',loadComponent: () => import('./modules/cattle/vaccine-add/vaccine-add.component').then(m => m.VaccineAddComponent) },
        {path: 'tratamientos',loadComponent: () => import('./modules/cattle/treatment-list/treatment-list.component').then(m => m.TreatmentListComponent) },
        {path: 'tratamientos/nuevo',loadComponent: () => import('./modules/cattle/treatment-add/treatment-add.component').then(m => m.TreatmentAddComponent) },
        {path: 'reproduccion',loadComponent: () => import('./modules/cattle/reproduction-list/reproduction-list.component').then(m => m.ReproductionListComponent) },
        {path: 'reproduccion/nuevo',loadComponent: () => import('./modules/cattle/reproduction-add/reproduction-add.component').then(m => m.ReproductionAddComponent) },
        {path: 'estado-salud',loadComponent: () => import('./modules/cattle/health-status-list/health-status-list.component').then(m => m.HealthStatusListComponent) },
        {path: 'estado-salud/nuevo',loadComponent: () => import('./modules/cattle/health-status-add/health-status-add.component').then(m => m.HealthStatusAddComponent) },
        {path: 'dieta',loadComponent: () => import('./modules/cattle/diet-list/diet-list.component').then(m => m.DietListComponent) },
        {path: 'dieta/nuevo',loadComponent: () => import('./modules/cattle/diet-add/diet-add.component').then(m => m.DietAddComponent) },
        {path: 'ubicacion',loadComponent: () => import('./modules/cattle/location-list/location-list.component').then(m => m.LocationListComponent) },
        {path: 'ubicacion/nuevo',loadComponent: () => import('./modules/cattle/location-add/location-add.component').then(m => m.LocationAddComponent) },
        {path: 'raza',loadComponent: () => import('./modules/cattle/breed-list/breed-list.component').then(m => m.BreedListComponent) },
        {path: 'raza/nuevo',loadComponent: () => import('./modules/cattle/breed-add/breed-add.component').then(m => m.BreedAddComponent) },
        {path: 'tipo',loadComponent: () => import('./modules/cattle/type-list/type-list.component').then(m => m.TypeListComponent) },
        {path: 'tipo/nuevo',loadComponent: () => import('./modules/cattle/type-add/type-add.component').then(m => m.TypeAddComponent) },
        {path: 'ganado',loadComponent: () => import('./modules/cattle/cattle-list/cattle-list.component').then(m => m.CattleListComponent) },
        {path: 'ganado/nuevo',loadComponent: () => import('./modules/cattle/cattle-add/cattle-add.component').then(m => m.CattleAddComponent) },
    ] },

  
];
