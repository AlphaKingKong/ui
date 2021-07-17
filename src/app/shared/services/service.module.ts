import { NgModule, ModuleWithProviders } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HTTPStatusService } from './http-status.service';
import { SnackBarService } from './snack-bar.service';
import { LoaderService } from './loader.service';

@NgModule({})

export class ServiceModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ServiceModule,
      providers: [
        LocalStorageService,
        HTTPStatusService,
        SnackBarService,
        LoaderService
      ]
    };
  }
}
