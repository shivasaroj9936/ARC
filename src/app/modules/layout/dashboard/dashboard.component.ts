import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pageSize!: any;
  filterForm!: FormGroup;
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: 'S.No.', key: 's_no', isSortable: '', type: 'text', },
    { heading: 'User ID', key: 'user_id', isSortable: '', type: 'text', },
    { heading: "First Name", key: 'first_name', isSortable: 'isSortable', type: 'link', link: 'client-details' },
    { heading: "Last Name", key: 'last_name', isSortable: '', type: 'text', },
    { heading: 'Email', key: 'email', isSortable: '', type: 'text', },
    { heading: 'Phone', key: 'phone', isSortable: '', type: 'text', },
    { heading: 'Transaction Status', key: 'transaction_status', isSortable: '', type: 'text', },
    { heading: 'Amount Paid', key: 'amount_paid', isSortable: '', type: 'text', },
    { heading: 'Date & Time', key: 'date_time', isSortable: '', type: 'text', },
  ]
  Table_DATA: any[] = [
    { 's_no': '1', 'user_id': 1, 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': 'status', "date_time":'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 2, 'first_name': 'jhg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': 'status', "date_time":'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 3, 'first_name': 'jhg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': 'status', "date_time":'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 4, 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': 'status', "date_time":'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 5, 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': 'status', "date_time":'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 6, 'first_name': 'thn', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': 'status', "date_time":'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 4, 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': 'status', "date_time":'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 3, 'first_name': 'olhg', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': 'status', "date_time":'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 8, 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': 'status', "date_time":'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 9, 'first_name': 'abc', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': 'status', "date_time":'APR 21,2020 00:39:14' },
    { 's_no': '1', 'user_id': 5, 'first_name': 'qaz', 'last_name': 'qwe', 'email': 'H@gmail.com', 'phone': 1324235346547, 'transaction_status': 110044, 'amount_paid': 'status', "date_time":'APR 21,2020 00:39:14' },

  ]
  constructor(private formBuilder:FormBuilder) {
    this.createForm();
    this.dataSource=new MatTableDataSource<any>(this.Table_DATA)
  }

  ngOnInit(): void {
  }
  createForm() {
    this.filterForm = this.formBuilder.group({
      searchTitle: [null],
      week: [null],
      pageSize: [null]
    });
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
