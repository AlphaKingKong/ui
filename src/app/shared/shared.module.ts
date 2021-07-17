import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
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
