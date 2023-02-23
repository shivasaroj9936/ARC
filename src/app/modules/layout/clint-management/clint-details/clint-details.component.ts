import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clint-details',
  templateUrl: './clint-details.component.html',
  styleUrls: ['./clint-details.component.scss']
})
export class ClintDetailsComponent implements OnInit {
  spinner = false;
  breakpoint: any;
  url: any = '';
  showImage: boolean = true
  pageSize!: any;
  filterForm!: FormGroup;
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: 'S.No.', key: 's_no', isSortable: '', type: 'text', },
    { heading: 'Transaction ID', key: 'transaction_id', isSortable: '', type: 'text', },
    { heading: 'Amount', key: 'amount_paid', isSortable: 'isSortable', type: 'text', },
    { heading: 'Date & Time', key: 'date_time', isSortable: 'isSortable', type: 'text', },
  ]
  Table_DATA: any[] = [
    { 's_no': '1', 'transaction_id': 1, 'amount_paid': '3232', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'transaction_id': 2, 'amount_paid': '3214', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'transaction_id': 3, 'amount_paid': '654', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'transaction_id': 4, 'amount_paid': '987', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'transaction_id': 5, 'amount_paid': '765', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'transaction_id': 6, 'amount_paid': '876', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'transaction_id': 4, 'amount_paid': '9876', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'transaction_id': 3, 'amount_paid': '0987', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'transaction_id': 8, 'amount_paid': '765', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'transaction_id': 9, 'amount_paid': '65', "date_time": 'APR 21,2020 00:39:14' },
    { 's_no': '1', 'transaction_id': 5, 'amount_paid': '54', "date_time": 'APR 21,2020 00:39:14' },
  ]


  constructor() {
    // this.createForm();
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 1300) ? 1 : 2;

  }
  onFileChange(event: any) {
    var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    if (file) {
      var pattern = /image-*/;
      var reader = new FileReader();
      if (!file.type.match(pattern)) {
        return;
      }
      reader.readAsDataURL(file);
    }
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 1300) ? 1 : 2;

  }
}
