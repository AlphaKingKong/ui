import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule,} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return <ModuleWithProviders<any>>{
      ngModule: SharedModule,
      providers: [
      ]
    };
  }
 }
