import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ApiService } from './services/api.service';
import { HTTPStatusService } from './services/http-status.service';
import { LocalStorageService } from './services/local-storage.service';
import { SnackBarService } from './services/snack-bar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthGuardService } from './services/auth-guard.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    ApiService,
    HTTPStatusService,
    LocalStorageService,
    SnackBarService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
