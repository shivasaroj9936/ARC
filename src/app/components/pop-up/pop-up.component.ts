import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  templateData: any;
  constructor(public dialogRef: MatDialogRef<PopUpComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.templateData = data;
  }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close();

  }
}
