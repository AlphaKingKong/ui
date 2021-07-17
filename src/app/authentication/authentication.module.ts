import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutes } from './authentication.routing';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(AuthenticationRoutes),
    CommonModule
  ],
})
export class AuthenticationModule { }
