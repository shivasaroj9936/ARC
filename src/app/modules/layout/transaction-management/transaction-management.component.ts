import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transaction-management',
  templateUrl: './transaction-management.component.html',
  styleUrls: ['./transaction-management.component.scss']
})
export class TransactionManagementComponent implements OnInit {
  filterForm!: FormGroup;
  dataSource!: MatTableDataSource<any>;
  pageSize!: any;
  columns = [
    { heading: 'S.No.', key: 's_no', isSortable: '', type: 'text', },
    { heading: 'Transaction ID', key: 'transaction_id', isSortable: '', type: 'text', },
    { heading: "First Name", key: 'first_name', isSortable: 'sortable', type: 'link', link: 'client-details' },
    { heading: 'Date of Payment', key: 'date_of_payment', isSortable: '', type: 'text', },
    { heading: 'Amount Paid', key: 'amount_paid', isSortable: '', type: 'text', },
    { heading: 'Status', key: 'status', isSortable: '', type: 'text', },
  ]
  Table_DATA: any[] = [
    { 's_no': 1, 'transaction_id': '1abc', 'first_name': 'gf2dsasdfg',  'date_of_payment': 'H@gmail.com', 'amount_paid': 1324235346547, 'status': 'status' },
    { 's_no': 2, 'transaction_id': '3abc', 'first_name': 'gfdadsasdfg',  'date_of_payment': 'H@gmail.com', 'amount_paid': 1324235346547, 'status': 'status' },
    { 's_no': 3, 'transaction_id': 'abc', 'first_name': 'gfdsaqwesdfg',  'date_of_payment': 'H@gmail.com', 'amount_paid': 1324235346547, 'status': 'status' },
    { 's_no': 4, 'transaction_id': 'fsa5bc', 'first_name': 'gfdsrqrasdfg',  'date_of_payment': 'H@gmail.com', 'amount_paid': 1324235346547, 'status': 'status' },
    { 's_no': 5, 'transaction_id': 'agsbc', 'first_name': 'gfdsasdrqeqfg',  'date_of_payment': 'H@gmail.com', 'amount_paid': 1324235346547, 'status': 'status' },
    { 's_no': 6, 'transaction_id': 'abchdg', 'first_name': 'gfdsasdfrqwrfg',  'date_of_payment': 'H@gmail.com', 'amount_paid': 1324235346547, 'status': 'status' },
    { 's_no': 7, 'transaction_id': 'abcdg', 'first_name': 'gfdsasdfeqqehrqg',  'date_of_payment': 'H@gmail.com', 'amount_paid': 1324235346547, 'status': 'status' },
    { 's_no': 8, 'transaction_id': 'abc', 'first_name': 'gfdsasryrydfg',  'date_of_payment': 'H@gmail.com', 'amount_paid': 1324235346547, 'status': 'status' },
    { 's_no': 9, 'transaction_id': 'abcky', 'first_name': 'gfdsasdhry6fg',  'date_of_payment': 'H@gmail.com', 'amount_paid': 1324235346547, 'status': 'status' },
    { 's_no': 10, 'transaction_id': 'abctu', 'first_name': 'gfdsasdyeryfg',  'date_of_payment': 'H@gmail.com', 'amount_paid': 1324235346547, 'status': 'status' },
    { 's_no': 11, 'transaction_id': 'abctwt', 'first_name': 'gfdsasdjyukifg',  'date_of_payment': 'H@gmail.com', 'amount_paid': 1324235346547, 'status': 'status' },


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
