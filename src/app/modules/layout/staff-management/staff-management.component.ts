import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.scss']
})
export class StaffManagementComponent implements OnInit {
  filterForm!: FormGroup;
  dataSource!: MatTableDataSource<any>;
  pageSize!: any;
  spinner = false;
  columns = [
    { heading: 'S.No.', key: 's_no', isSortable: '', type: 'text', },
    { heading: "First Name", key: 'first_name', isSortable: 'isSortable', type: 'link', link: 'client-details' },
    { heading: "Last Name", key: 'last_name', isSortable: '', type: 'text', },
    { heading: 'Email', key: 'email', isSortable: '', type: 'text', },
    { heading: 'Status', key: 'status', isSortable: '', type: 'text', },
    { heading: 'Actionn', key: 'action', isSortable: '', type: 'action', action: [1] },
  ]

  Table_DATA: any[] = [
    { 's_no': '1', 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'status': 110044, 'action': ['delete', 'block'] },
    { 's_no': '1', 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'status': 110044, 'action': ['delete', 'block'] },
    { 's_no': '1', 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'status': 110044, 'action': ['delete', 'block'] },
    { 's_no': '1', 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'status': 110044, 'action': ['delete', 'block'] },
    { 's_no': '1', 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'status': 110044, 'action': ['delete', 'block'] },
    { 's_no': '1', 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'status': 110044, 'action': ['delete', 'block'] },
    { 's_no': '1', 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'status': 110044, 'action': ['delete', 'block'] },
    { 's_no': '1', 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'status': 110044, 'action': ['delete', 'block'] },
    { 's_no': '1', 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'status': 110044, 'action': ['delete', 'block'] },
  ]
  constructor(private formBuilder:FormBuilder) {
    this.createForm();
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

   }

  ngOnInit(): void {

  }
  createForm() {
    this.filterForm = this.formBuilder.group({
      searchTitle: [null],
      pageSize: [null],
      status: [null],
    })
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
