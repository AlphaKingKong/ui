import { Injectable } from '@angular/core';
// import { LocalStorage } from '@ngx-pwa/local-storage';
import { Subject } from 'rxjs';
import { ILocalStorageService } from '../../interfaces/service-interface';
import { appApiResources } from 'src/app/constants/api.constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LocalStorageService implements ILocalStorageService {

  public localStorageCampaignData = new Subject<any>();

  constructor(
    private http: HttpClient,
    // private indexedDb: LocalStorage
  ) { }

  
  setItem(key: string, value: string) {
    const encryptedData = this.encrypt(value);
    localStorage.setItem(key, encryptedData);
  }

  getItem(key: string): any {
    if (localStorage.getItem(key)) {
      return this.decrypt(localStorage.getItem(key));
    } else {
      return null;
    }
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  private encrypt(data: any): string {
    if (data && (data.constructor.name === 'Array' || data.constructor.name === 'Object')) {
      return JSON.stringify(data);
    } else {
      return data;
    }
  }

  private decrypt(data: any): string {
    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  }

  clear() {
    localStorage.clear();
  }

  // setIndexItem(key: string, value: any): Observable<any> {
  //   return this.indexedDb.setItem(key, value);
  // }

  // getIndexItem(key: string): Observable<any> {
  //   return this.indexedDb.getItem(key);
  // }

  // clearIndexedDb(): Observable<any> {
  //   return this.indexedDb.clear();
  // }
  
  
}

