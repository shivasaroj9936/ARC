import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit, AfterViewInit {
  headerRow: any = [];
  data = {
    Module: '',
    typeOfPopUp: '',
    acceptLabel: '',
    warning: '',
    rejectLable: '',
  }

  testPaginator = {
    length: 1000,
    pageSize: 10,
    pageIndex: 1
  };
  @Input() columns!: any;
  @Input() dataSource!: any;
  @Input() paginationSizes: number[] = [5, 10, 15, 23];
  @Input() defaultPageSize = this.paginationSizes[1];

  @ViewChild(MatPaginator, { static: false }) matPaginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort!: MatSort;

  @Input() set pageSize(size: any) {
    if (size) {
      this.matPaginator._changePageSize(size);
    }
  }

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {

    this.columns.map((tableColumn: any) => this.headerRow.push(tableColumn.heading));
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.matSort;

    this.dataSource.paginator = this.matPaginator;
  }
  openDialog(dialogType: string): void {
    // console.log(dialogType);
    switch (dialogType) {

      case 'visibility': {
        this.data.Module = 'ClientManagement';
        this.data.typeOfPopUp = 'Are you sure you want to unblock this client ?'
        this.data.warning = 'Unblock Client ?'

        this.data.acceptLabel = 'Yes'
        this.data.rejectLable = 'No'
      }
        break;
      case 'block': {
        this.data.Module = 'ClientManagement';
        this.data.warning = 'Are you sure you want to block this client ?'
        this.data.typeOfPopUp = 'Unblock Client ?'

        this.data.acceptLabel = 'Yes'
        this.data.rejectLable = 'No'
      }
        break;
      case 'archive': {
        this.data.Module = 'ClientManagement';
        this.data.warning = 'Are you sure you want to remove this client ?'
        this.data.typeOfPopUp = 'Unblock Client ?'

        this.data.acceptLabel = 'Yes'
        this.data.rejectLable = 'No'
      }

        break;
        case 'delete': {
          this.data.Module = 'ClientManagement';
          this.data.warning = 'Are you sure you want to delete ?'
          this.data.typeOfPopUp = 'Do you want to delete ?'

          this.data.acceptLabel = 'Yes'
          this.data.rejectLable = 'No'
        }

          break;

      default:
        break;
    }

    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '450px',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}


