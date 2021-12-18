import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCampaignsComponent } from './manage-campaigns/manage-campaigns.component';
import { RouterModule } from '@angular/router';
import { CampaignRoutes } from './campaigns.routing';
import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { AssignCampaignComponent } from './assign-campaign/assign-campaign.component';
import { MatListModule } from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  declarations: [
    ManageCampaignsComponent,
    AddCampaignComponent,
    AssignCampaignComponent
  ],
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(CampaignRoutes)
  ]
})
export class CampaignsModule { }
