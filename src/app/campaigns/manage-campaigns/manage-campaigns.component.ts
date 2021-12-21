import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AddCampaignComponent } from '../add-campaign/add-campaign.component';
import { AssignCampaignComponent } from '../assign-campaign/assign-campaign.component';

@Component({
  selector: 'app-manage-campaigns',
  templateUrl: './manage-campaigns.component.html',
  styleUrls: ['./manage-campaigns.component.scss']
})
export class ManageCampaignsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'offer_id', 'url', 'country', 'campaign_type'];
  campaigns: Campaign[] = [];
  assignments: any = {};
  countryFilters: any[];
  selectedCountry: any;
  dataSource : MatTableDataSource<Campaign> = new MatTableDataSource<Campaign>(this.campaigns);
  length = 100;
  pageSize = 10;
  users: any = [];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  countries: any;
  showUsers: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService, public dialog: MatDialog, public localStorageService: LocalStorageService){

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    if(this.showUsers)
      this.displayedColumns.push('actions')

    
  }

  ngOnInit(){
    this.showUsers = this.localStorageService.isAdminOrSuperAdmin;
    this.localStorageService.getIndexItem('countries').subscribe(data =>{
      this.countries = data;
      this.getCampaigns();
      this.getAllUsers();
    })
  }

  getCampaigns(pageIndex: number = 0){
    this.apiService.getCampaigns(this.pageSize, pageIndex+1, "", this.selectedCountry?.code).subscribe((data:{count: number, data: Campaign[], assignments: any, countries: any}) => {
      this.length = data.count;
      this.campaigns = data.data;
      this.campaigns.forEach((item: any) => {
        item.countryObj = this.countries?.find((c:any) => c.code === item.country)
      })
      this.dataSource = new MatTableDataSource<Campaign>(this.campaigns)
      this.assignments = data.assignments;
      this.countryFilters = this.countries.filter((item: any) => data.countries.indexOf(item.code) > -1);
    })
  }

  getAllUsers(){
    if(this.showUsers){
      this.apiService.getUsersRole().subscribe(users => {
        this.users = users;
      })
    }
  }

  onPageEvent(pageEvent: PageEvent){
    this.getCampaigns(pageEvent.pageIndex);
  }

  openDialog(data?: any): void {
    const dialogRef = this.dialog.open(AddCampaignComponent, {
      width: '500px', data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result && this.getCampaigns();
    });
  }

  openAssignDialog(campaign: any): void {

    const assignments = this.assignments[campaign._id.$oid];
    const dialogRef = this.dialog.open(AssignCampaignComponent, {
      width: '500px', data: {campaign, users: this.users?.data, assignments}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result && this.getCampaigns();
    });
  }

  onCountrySelect(c: any){
    if(c.code !== this.selectedCountry?.code){
      this.selectedCountry = c;
    }else{
      this.selectedCountry = undefined;
    }
    this.getCampaigns();
  }

  openLink(url: string){
    window.open(url, '_blank');
  }
}

export interface Campaign {
  name: string;
  url: string;
  offer_id: string;
  campaign_type: string;
  country: string;
  countryObj?: any
}
