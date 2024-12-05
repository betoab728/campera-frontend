import { Routes } from '@angular/router';


export const userRoutes: Routes = [

    { path: 'users-list',loadComponent: () => import('./user/components/users-list/users-list.component').then(m => m.UsersListComponent) },  
    {path :'user-detail/:id',loadComponent: () => import('./user/components/user-detail/user-detail.component').then(m => m.UserDetailComponent) }
];

