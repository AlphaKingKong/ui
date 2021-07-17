import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutes } from './authentication.routing';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule,} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from '../shared/services/service.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent
  ],
  imports: [
    ServiceModule,
    
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthenticationRoutes),
    CommonModule
  ],
})
export class AuthenticationModule { }
