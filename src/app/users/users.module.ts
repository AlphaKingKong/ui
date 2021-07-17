import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './users.routing';

@NgModule({
  declarations: [
    ManageUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UsersModule { }
