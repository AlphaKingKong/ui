import { Routes } from '@angular/router';
import { HomeComponent } from '../shared/components/home/home.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';


export const UserRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'manage', pathMatch: 'full' },
      { path: 'manage', component: ManageUsersComponent },
    ]
  }
];

