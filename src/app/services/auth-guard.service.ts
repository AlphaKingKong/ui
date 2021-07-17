import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { appConstants } from "../constants/app.constants";
import { ModuleRoutes, staticRoutes } from "../constants/route.constants";
import { LocalStorageService } from "./local-storage.service";

@Injectable()

export class AuthGuardService implements CanActivate{

    constructor(
        private localStorageService: LocalStorageService,
        private routerService: Router
    ){
        
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): boolean {

        const {url} =  state;

        const authenticatedRoutes = Object.values(staticRoutes.authenticatedRoutes);
        const unAuthenticatedRoutes = Object.values(staticRoutes.unAuthenticatedRoutes);

        const token = this.localStorageService.getItem(appConstants.accessTokenLocalStorage);

        if(token && authenticatedRoutes.indexOf(url) > -1){
            return this.canNavigate(url);
        }else if(token && unAuthenticatedRoutes.indexOf(url) > -1){
            this.routerService.navigateByUrl("/campaigns");
            return false;
        }else{
            if(authenticatedRoutes.indexOf(url) > -1){
                this.routerService.navigateByUrl("/auth");
                return false;
            }
            return true;
        }
      }

      canNavigate(url: string): boolean{
        const user = this.localStorageService.getItem(appConstants.userLocalStorage);
        const moduleRoute = ModuleRoutes.filter(item => item.role === user.role);
        const urlModule = url.split("/")[1];

        if(moduleRoute && moduleRoute[0]){
            if(moduleRoute[0].modules.indexOf(urlModule) > -1){
                return true;
            }else{
                this.routerService.navigateByUrl("/"+moduleRoute);
                return false;
            }
        }
        return false;
      }
}