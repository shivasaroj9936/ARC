import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-earinging-management',
  templateUrl: './earinging-management.component.html',
  styleUrls: ['./earinging-management.component.scss']
})
export class EaringingManagementComponent implements OnInit {
  filterForm!: FormGroup;
  dataSource!: MatTableDataSource<any>;
  pageSize!: any;
  columns = [
    { heading: 'S.No.', key: 's_no', isSortable: '', type: 'text', },
    { heading: 'User ID', key: 'user_id', isSortable: '', type: 'text', },
    { heading: "First Name", key: 'first_name', isSortable: 'isSortable', type: 'link', link: 'client-details' },
    { heading: "Last Name", key: 'last_name', isSortable: '', type: 'text', },
    { heading: 'Email', key: 'email', isSortable: '', type: 'text', },
    { heading: 'Phone', key: 'phone', isSortable: '', type: 'text', },
    { heading: 'Transaction Status', key: 'transaction_status', isSortable: '', type: 'text', },
    { heading: 'Amount Paid', key: 'amount_paid', isSortable: 'isSortable', type: 'text', },
    { heading: 'Date & Time', key: 'date_time', isSortable: 'isSortable', type: 'text', },
  ]
  Table_DATA: any[] = [
    { 's_no': '1', 'user_id': 1, 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': '3232', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 2, 'first_name': 'sfs', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': '3214', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 3, 'first_name': 'dgg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': '654', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 4, 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': '987', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 5, 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': '765', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 6, 'first_name': 'trt', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': '876', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 4, 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': '9876', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 3, 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': '0987', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 8, 'first_name': 'geg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': '765', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 9, 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': '65', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 5, 'first_name': 'geg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': '54', "date_time": 'APR 21,2020 00:39:14' },
  ]

  constructor(private formBuilder: FormBuilder) {
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
      fromDate: [null],
      toDate: [null]
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
