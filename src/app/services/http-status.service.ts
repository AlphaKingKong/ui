import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

interface IHttpStatus{
  setHttpStatus(inFlight: boolean): void;
  getHttpStatus(): Observable<boolean>;
}

@Injectable()
export class HTTPStatusService implements IHttpStatus {
  requestInFlight$: BehaviorSubject<boolean>;
  constructor() {
    this.requestInFlight$ = new BehaviorSubject<boolean>(false);
  }

  setHttpStatus(inFlight: boolean): void {
    this.requestInFlight$.next(inFlight);
  }

  getHttpStatus(): Observable<boolean> {
    return this.requestInFlight$.asObservable();
  }
}
