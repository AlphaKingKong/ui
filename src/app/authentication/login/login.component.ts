import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appConstants } from 'src/app/constants/app.constants';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any ;
  email: any;
  password: any;
  isSignInProgress: boolean = false;
  apiErrorMessage = "";
  showApiErrorMessage = false;
  credentials: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loaderService: LoaderService
  ) { 
      // this.buildForm();
      this.loginForm = this.formBuilder.group({
        email: this.formBuilder.control(null, [Validators.required]),
        password: this.formBuilder.control(null, [
          Validators.required,
          Validators.minLength(3)
        ]),
        isRememberMeChecked: [false]
      });
  
      const credentials = localStorage.getItem("credentials")
      if(credentials){
        this.credentials = JSON.parse(credentials);
        if (this.credentials && this.credentials !== undefined) {
          this.loginForm.patchValue({
            email: this.credentials.email,
            password: this.credentials.password
          });
        }
      }
  }

  ngOnInit() {
    // if (this.isUserLoggedIn()) {
    //   // this.router.navigate([this.authService.getRedirectUrl()]);
    // } else {
    //   this.buildForm();
    // }
  }

  isUserLoggedIn() {
    const user = localStorage.getItem(appConstants.accessTokenLocalStorage);
    if (user && user != undefined) {
      return true;
    } else {
      return false;
    }
  }

  buildForm() {
    // this.loginForm = this.formBuilder.group({
    //   email: this.formBuilder.control(null, [Validators.required]),
    //   password: this.formBuilder.control(null, [
    //     Validators.required,
    //     Validators.minLength(3)
    //   ]),
    //   isRememberMeChecked: [false]
    // });

    // this.credentials = JSON.parse(localStorage.getItem("credentials"));
    // if (this.credentials && this.credentials !== undefined) {
    //   this.loginForm.patchValue({
    //     email: this.credentials.email,
    //     password: this.credentials.password
    //   });
    // }
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control && control.markAsTouched({ onlySelf: true });
      });
    } else {
      this.loaderService.loader(true);
      this.isSignInProgress = true;
      // this.authService.login(this.loginForm.value).subscribe(
      //   (response: any) => {
      //     this.authService.processLoginResponse(response);
      //     let kk = this.authService.getRedirectUrl();
      //     this.router.navigate([kk]).then(()=>{
      //       this.isSignInProgress = false;
      //       this.snackBarService.open('user logged successfully', SnackBarType.Error, undefined, 3000);
      //     });
      //     // this.dashboardService.resetCardData();
      //     // this.dashboardService.fireDashboardOverviewEvent(true);
      //   },
      //   err => {
      //     this.loaderService.loader(false);
      //     this.isSignInProgress = false;
      //     this.loginForm.reset();
      //     this.showApiErrorMessage = true;
      //     this.apiErrorMessage = err.error.message;
      //   },
      //   () => {
      //     this.isSignInProgress = false;
      //     this.loaderService.loader(false);
      //   }
      // );
    }
  }
}
