import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {appApiResources} from "../constants/api.constants";


@Injectable()


export class ApiService{

    constructor(
        private httpCient: HttpClient
    ){

    }

    login(email: string, password: string): Observable<any>{
        return this.httpCient.post(appApiResources.loginApi, {email, password});
    }

    logout(){

    }
}