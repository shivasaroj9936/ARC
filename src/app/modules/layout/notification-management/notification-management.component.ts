import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { staticRouts } from 'src/app/constant/routs';

@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.scss']
})
export class NotificationManagementComponent implements OnInit {
  pageSize!: any;
  filterForm!: FormGroup;
  dataSource!: MatTableDataSource<any>;
  spinner = false;
  sent = false
  columns = [
    { heading: 'S.No.', key: 's_no', isSortable: '', type: 'text', },
    { heading: 'Title', key: 'title', isSortable: '', type: 'text', },
    { heading: 'Description', key: 'description', isSortable: '', type: 'text', },
    { heading: 'Sent On', key: 'sent_on', isSortable: 'sortable', type: 'text', },
    { heading: 'Actionn', key: 'action', isSortable: '', type: 'action',action: [1] },

  ]
  Table_DATA: any[] = [
    { 's_no': '1',  'title': 'ewew', 'description': 'description1', "sent_on":'APR 23,2020 00:39:14','action':['delete'] },
    { 's_no': '2',  'title': 'ygfd', 'description': 'description2', "sent_on":'APR 21,2020 00:39:14','action':['delete'] },
  ]
  constructor(private _router: Router,private formBuilder:FormBuilder) {
    this.createForm();
    this.dataSource=new MatTableDataSource<any>(this.Table_DATA)
  }

  ngOnInit(): void {
  }
  createForm() {
    this.filterForm = this.formBuilder.group({
      searchTitle: [null],
      user: [null],
      pageSize: [null]
    });
  }
  // toClintDetails() { }
  toSendNotification() {
    this._router.navigate(['notification-management/send-notification']);
  }
  onReset() {
    console.log('reset');
    this.filterForm.reset;
    this.dataSource.filter = '';
  }

  filterData() {
    this.pageSize = this.filterForm.controls?.pageSize.value;
    if (this.filterForm?.get('searchTitle')) {
      this.dataSource.filter = this.filterForm.controls?.searchTitle?.value?.trim()?.toLowerCase();
    } else {
      this.dataSource.filter = '';

    }
  }

}
