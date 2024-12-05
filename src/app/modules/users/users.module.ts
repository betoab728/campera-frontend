import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './user/components/users-list/users-list.component';
import { UserFormComponent } from './user/components/user-form/user-form.component';
import { UserDetailComponent } from './user/components/user-detail/user-detail.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersListComponent,
    UserFormComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule {}
