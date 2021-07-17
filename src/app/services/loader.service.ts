import { Injectable } from '@angular/core';
// import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    // private spinner: NgxSpinnerService
  ) { }

    private snapshot = null;


  loader(show: boolean) {
    // if (show) {
    //   this.spinner.show();
    // } else {
    //   this.spinner.hide();
    // }
  }

  setSnapshotData(obj: any){
    this.snapshot = obj;
  }

  getSnapshotData(){
    return this.snapshot;
  }

  resetSnapshotData(){
    this.snapshot = null;
  }

}
