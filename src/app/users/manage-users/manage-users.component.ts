import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})


export class ManageUsersComponent implements OnInit {

  displayedColumns: string[] = ['username', 'email', 'work_type', 'role', 'actions'];
  users: User[] = [];
  dataSource : MatTableDataSource<User> = new MatTableDataSource<User>(this.users);
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService, public dialog: MatDialog){

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.getUsers();
  }

  getUsers(pageIndex: number = 0){
    this.apiService.getUsers(this.pageSize, pageIndex+1, "").subscribe((data:{count: number, data: User[]}) => {
      this.length = data.count;
      this.users = data.data;
      this.dataSource = new MatTableDataSource<User>(this.users)
    })
  }

  onPageEvent(pageEvent: PageEvent){
    this.getUsers(pageEvent.pageIndex);
  }

  openDialog(data?: any): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '500px', data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result && this.getUsers();
    });
  }

}

export interface User {
  email: string;
  user_name: string;
  work_type: string;
  role: string;
}
