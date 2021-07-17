import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { appConstants } from "../constants/app.constants";
import { staticRoutes } from "../constants/route.constants";
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

        if(token && authenticatedRoutes.indexOf(url)){
            if(this.canNavigate()){
                return true;
            }else{
                this.routerService.navigateByUrl("/campaigns");
                return false;
            }
        }else if(token && unAuthenticatedRoutes.indexOf(url)){
            this.routerService.navigateByUrl("/auth");
            return false;
        }else{
            if(authenticatedRoutes.indexOf(url)){
                this.routerService.navigateByUrl("/auth");
                return false;
            }
            return true;
        }
      }

      canNavigate(): boolean{
        return true;
      }
}