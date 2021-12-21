import { appConstants } from '../constants/app.constants';
import { appApiResources } from '../constants/api.constants';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { catchError, finalize, map } from 'rxjs/operators';

import {
  HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTPStatusService } from './http-status.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private localStorageService: LocalStorageService,
    private httpStatusService: HTTPStatusService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('intercepting')
      const token = this.localStorageService.getItem(appConstants.accessTokenLocalStorage);
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: "Bearer " + token,
          }
        })
      }
      this.httpStatusService.setHttpStatus(true);

      return next.handle(request).pipe(
        map((event: any) => {
          return event;
        }),
        catchError(error => {
          return Observable.throw(error);
        }),
        finalize(() => {
          this.httpStatusService.setHttpStatus(false);
        })
      )
  }
}
