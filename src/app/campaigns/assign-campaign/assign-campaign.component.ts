import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { SnackBarService, SnackBarType } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-assign-campaign',
  templateUrl: './assign-campaign.component.html',
  styleUrls: ['./assign-campaign.component.scss']
})
export class AssignCampaignComponent implements OnInit {

  assignments: any = [];
  users: any = [];
  constructor(
    private apiService: ApiService, 
    public dialogRef: MatDialogRef<AssignCampaignComponent>,
    private snackBarService: SnackBarService,
    @Inject(MAT_DIALOG_DATA) public dialogueData: any
  ) { }

  ngOnInit(): void {
    console.log(this.dialogueData)
    this.users = this.dialogueData.users;
    this.assignments = this.dialogueData.assignments;
    console.log(this.assignments)
    console.log(this.users)

    this.users?.forEach((a:any) => {
      a.assignment = this.assignments.find((u: any) => u.user_id.$oid == a._id.$oid);
      a.is_assigned = !!a.assignment?.is_assigned;
    })
    console.log(this.users)
  }

  update(){

    const payload:any = [];

    this.users.forEach((u:any) => {
      const a:any = {};
      a.is_assigned = u.is_assigned;
      a.user_id = u._id.$oid;
      a.campaign_id = this.dialogueData.campaign._id.$oid;
      if(u.assignment)
        a.id = u.assignment._id.$oid;
      if(a.is_assigned  || (u.assignment && u.assignment.is_assigned != a.is_assigned))
        payload.push(a);
    })

    this.apiService.assignCampaign(payload).subscribe(data => {
      this.dialogRef.close(true);
      this.snackBarService.open("Campaign assigned successfully", SnackBarType.Success, undefined, 3000);
      }, error => {
        this.snackBarService.open("Something went wrong while assigning campaign. Please try again", SnackBarType.Error, undefined, 3000);
      })

    console.log(payload);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onChange(e: any, assignment: any){
    console.log(e, assignment)
    assignment.is_assigned = e.checked;
  }

}
