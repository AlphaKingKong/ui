import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCampaignsComponent } from './manage-campaigns/manage-campaigns.component';
import { RouterModule } from '@angular/router';
import { CampaignRoutes } from './campaigns.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ManageCampaignsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(CampaignRoutes)
  ]
})
export class CampaignsModule { }
