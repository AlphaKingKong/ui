import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  constructor(
    private routerService: Router,
    private localStorageService: LocalStorageService
  ) { }

  logout(){
    this.localStorageService.clear();
    this.routerService.navigateByUrl('auth');
  }
}
