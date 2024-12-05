import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './user/components/users-list/users-list.component'
import { UserFormComponent } from './user/components/user-form/user-form.component';
import { UserDetailComponent } from './user/components/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'create', component: UserFormComponent },
  { path: ':id', component: UserDetailComponent },
  { path: 'edit/:id', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
