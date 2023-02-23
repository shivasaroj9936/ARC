import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  uploadedFiles: any = [];
  spinner = false;
  @Input() fileType: any;
  @Output() Uploaded = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onFileChange(event: any) {

    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      // this.spinner = true;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          let img = event.target.result;
          let base64 = img.split(',').pop();
          this.uploadedFiles.push(base64)
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  deleteFile(index: any) {
    this.uploadedFiles.splice(index, 1);
  }
  
  onUpload() {
    console.log('upload in file upload');

    this.Uploaded.emit( {data: this.uploadedFiles,fileType:this.fileType});
  }

}
