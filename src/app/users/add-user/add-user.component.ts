import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddCampaignComponent } from 'src/app/campaigns/add-campaign/add-campaign.component';
import { SnackBarType } from 'src/app/constants/app.constants';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  isEdit: boolean;
  userRole: string;
  
  constructor(
    private apiService: ApiService, 
    public dialogRef: MatDialogRef<AddUserComponent>,
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private snackBarService: SnackBarService,
    @Inject(MAT_DIALOG_DATA) public dialogueData: any
   ) {}

  ngOnInit(){
    this.isEdit = !!this.dialogueData;
    this.setData(this.dialogueData);
    this.getUserRole();
  }

  getUserRole(){
    const user = this.localStorageService.getItem('user');
    this.userRole = user?.role;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setData(obj: any){
    const formObj:any = {
      username: this.formBuilder.control(obj?.username, [Validators.required]),
      email: this.formBuilder.control(obj?.email, [Validators.required, Validators.email]),
      work_type: this.formBuilder.control(obj?.work_type, [Validators.required]),
      role: this.formBuilder.control(obj?.role, [Validators.required]),
    };

    if(!this.isEdit){
      formObj.password = this.formBuilder.control(obj?.password, [Validators.required])
    }
    
    this.userForm = this.formBuilder.group(formObj);
  }

  saveUser(){
    const formValues = this.userForm.value;
    console.log(formValues);

    if(!this.dialogueData){
      this.apiService.createUser(formValues).subscribe(data => {
        this.snackBarService.open("User created successfully", SnackBarType.Success, undefined, 3000);
        this.dialogRef.close(true);
      }, error => {
        this.snackBarService.open("Something went wrong while creating user. Please try again", SnackBarType.Error, undefined, 3000);
      })
    }else{
      this.apiService.updateUser(formValues, this.dialogueData._id.$oid).subscribe(data => {
        this.dialogRef.close(true);
        this.snackBarService.open("User updated successfully", SnackBarType.Success, undefined, 3000);
      }, error => {
        this.snackBarService.open("Something went wrong while updating user. Please try again", SnackBarType.Error, undefined, 3000);
      })
    }
  }
}
