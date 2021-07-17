import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: "full"
  },
  {
    canActivate: [AuthGuardService],
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    canActivate: [AuthGuardService],
    path: 'campaigns',
    loadChildren: () => import('./campaigns/campaigns.module').then(m => m.CampaignsModule)
  },
  {
    canActivate: [AuthGuardService],
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
