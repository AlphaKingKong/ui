import { Component, OnInit } from '@angular/core';
import { appConstants } from 'src/app/constants/app.constants';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showUsers: boolean = false;
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.showUsers = this.localStorageService.isAdminOrSuperAdmin;
  }

}
  