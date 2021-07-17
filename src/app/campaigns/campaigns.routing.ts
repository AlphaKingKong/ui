import { Routes } from '@angular/router';
import { HomeComponent } from '../shared/components/home/home.component';
import { ManageCampaignsComponent } from './manage-campaigns/manage-campaigns.component';


export const CampaignRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'manage', pathMatch: 'full' },
      { path: 'manage', component: ManageCampaignsComponent },
    ]
  }
];

