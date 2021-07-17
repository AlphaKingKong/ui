import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './users.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ManageUsersComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UsersModule { }
