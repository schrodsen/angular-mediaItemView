import { Component, ViewChild } from '@angular/core';

export interface UploadedFile {
  name: string;
  rawFile: File;
  preview: any;
}

@Component({
  selector: 'uploadBox',
  templateUrl: './uploadBox.component.html',
  styleUrls: [ './uploadBox.component.scss' ]
})
export class UploadBoxComponent  {
  @ViewChild('fileInput', { static: false }) fileInput;

  uploadFiles: Set<UploadedFile> = new Set();

  onFileDropped($event: FileList) {
    console.log($event);
    if ($event.length > 0) {
      Array.from($event).forEach((item) => {
        let tmp = <UploadedFile>{ name: item.name, rawFile: item };

        const reader = new FileReader();
        reader.readAsDataURL(item);

        reader.onload = (event) => {
          tmp.preview = reader.result;
        };

        this.uploadFiles.add(tmp);
      });
    }
  }

  onChange(fileList: FileList) {
    if (fileList.length > 0) {
      Array.from(fileList).forEach((item) => {
        let tmp = <UploadedFile>{ name: item.name, rawFile: item };

        const reader = new FileReader();
        reader.readAsDataURL(item);

        reader.onload = (event) => {
          tmp.preview = reader.result;
        };

        this.uploadFiles.add(tmp);
      });
    }
  }

  addFiles() {
    this.fileInput.nativeElement.click();
    console.log("add");
  }
}
