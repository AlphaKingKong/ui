import { Component } from '@angular/core';
import { HTTPStatusService } from './services/http-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoading: boolean;

  constructor(private  httpStatusService: HTTPStatusService){
    this.httpStatusService.getHttpStatus().subscribe(res => {
      this.isLoading = res;
      console.log(res);
    })
  }


}
