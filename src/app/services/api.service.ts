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

    getUsers(per_page: number, page: number, query: string):Observable<any>{
        return this.httpCient.get(appApiResources.getUsers, {
            params: {per_page, page, query}
        });
    }

    getUsersRole():Observable<any>{
        return this.httpCient.get(appApiResources.getUsersRole);
    }

    getCampaigns(per_page: number, page: number, query: string, country?: string):Observable<any>{
        return this.httpCient.get(appApiResources.getCampaigns, {
            params: {per_page, page, query, country: country || ''}
        });
    }

    getCountries(): Observable<any>{
        return this.httpCient.get(appApiResources.countries);
    }

    createCampaign(formData: any): Observable<any>{
        return this.httpCient.post(appApiResources.postCampaigns, formData);
    }

    assignCampaign(formData: any): Observable<any>{
        return this.httpCient.post(appApiResources.assignCampaign, formData);
    }

    updateCampaign(formData: any, campaignId: string): Observable<any>{
        return this.httpCient.put(appApiResources.putCampaigns + "/" + campaignId, formData);
    }

    createUser(formData: any): Observable<any>{
        return this.httpCient.post(appApiResources.postUsers, formData);
    }

    updateUser(formData: any, campaignId: string): Observable<any>{
        return this.httpCient.put(appApiResources.putUsers + "/" + campaignId, formData);
    }
}