import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appConstants, RoleTypes } from 'src/app/constants/app.constants';
import { ApiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/services/loader.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SnackBarService, SnackBarType } from 'src/app/services/snack-bar.service';

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
    private loaderService: LoaderService,
    private apiService: ApiService,
    private snackBarService: SnackBarService,
    private localStorageService: LocalStorageService
  ) { 
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

 

  onSubmit() {
    if (!this.loginForm.valid) {
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control && control.markAsTouched({ onlySelf: true });
      });
    } else {
      this.loaderService.loader(true);
      this.isSignInProgress = true;
      const {email, password} = this.loginForm.value;
      this.apiService.login(email, password).subscribe(
        (response: any) => {
          const {token, user} = response;
          if(token && user){
            this.localStorageService.setItem(appConstants.accessTokenLocalStorage, token);
            this.localStorageService.setItem(appConstants.userLocalStorage, user);
            this.snackBarService.open('user logged successfully', SnackBarType.Error, undefined, 3000);
            this.router.navigateByUrl("/campaigns");
          }else{
            this.snackBarService.open('Something went wrong, Please try again!!', SnackBarType.Error, undefined, 3000);
          }
        },
        err => {
          this.loaderService.loader(false);
          this.isSignInProgress = false;
          this.loginForm.reset();
          this.showApiErrorMessage = true;
          this.apiErrorMessage = err.error.message;
          this.snackBarService.open(this.apiErrorMessage, SnackBarType.Error, undefined, 3000);
        },
        () => {
          this.isSignInProgress = false;
          this.loaderService.loader(false);
        }
      );
    }
  }

}
