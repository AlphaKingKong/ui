import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SnackBarService, SnackBarType } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.scss']
})
export class AddCampaignComponent implements OnInit {

  campaignForm: FormGroup;
  countries: any[]
  isEdit: boolean;

  constructor(
    private apiService: ApiService, 
    public dialogRef: MatDialogRef<AddCampaignComponent>,
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private snackBarService: SnackBarService,
    @Inject(MAT_DIALOG_DATA) public dialogueData: any
   ) {}

  ngOnInit(){
    this.setData(this.dialogueData);
    this.getCountries();
    this.isEdit = !!this.dialogueData;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getCountries(){
    this.localStorageService.getIndexItem('countries').subscribe((data: any) => {
      this.countries = data;
    })
  }

  setData(obj: any){
    this.campaignForm = this.formBuilder.group({
      name: this.formBuilder.control(obj?.name, [Validators.required]),
      country: this.formBuilder.control(obj?.country, [Validators.required]),
      campaign_type: this.formBuilder.control(obj?.campaign_type, [Validators.required]),
      offer_id: this.formBuilder.control(obj?.offer_id, [Validators.required]),
      affiliate_id: this.formBuilder.control(obj?.affiliate_id, [Validators.required]),
      url: this.formBuilder.control(obj?.url, [Validators.required])
    });
  }

  saveCampaign(){
    const formValues = this.campaignForm.value;
    console.log(formValues);

    if(!this.dialogueData){
      this.apiService.createCampaign(formValues).subscribe(data => {
        this.snackBarService.open("Campaign created successfully", SnackBarType.Success, undefined, 3000);
        this.dialogRef.close(true);
      }, error => {
        this.snackBarService.open("Something went wrong while creating campaign. Please try again", SnackBarType.Error, undefined, 3000);
      })
    }else{
      this.apiService.updateCampaign(formValues, this.dialogueData._id.$oid).subscribe(data => {
        this.dialogRef.close(true);
        this.snackBarService.open("Campaign updated successfully", SnackBarType.Success, undefined, 3000);
      }, error => {
        this.snackBarService.open("Something went wrong while updating campaign. Please try again", SnackBarType.Error, undefined, 3000);
      })
    }
  }

}
