import { Observable } from 'rxjs/internal/Observable';

export interface IAuthService {
  // isUserLoggedIn(): boolean;
  // login(userCredentials: any): Observable<any>;
  // processLoginResponse(res: any);
  // setRedirectUrl(url);
  // getRedirectUrl(): string;
  // setRedirectUrlBasedOnRole(res: any);
  // resetUserPassword(body: any, code: string): Observable<any>;
  // forgetPassword(body: any): Observable<any>;
}

export interface ILocalStorageService {
  setItem(key: string, value: string) : void;
  getItem(key: string): any;
  removeItem(key: string): void;
  // setIndexItem(key: string, value: any): Observable<any>;
  // getIndexItem(key: string): Observable<any>;
  // clearIndexedDb(): Observable<any>;
}

export interface IHttpStatus {
  setHttpStatus(inFlight: boolean): void;
  getHttpStatus(): Observable<boolean>;
}

export interface IUserService {
  getUserRole(): string;
  getUserModules(): string[];
}
