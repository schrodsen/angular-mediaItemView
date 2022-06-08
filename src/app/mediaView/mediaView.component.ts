import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MediaItemModel } from '../model/mediaItemModel';

export interface UploadFile {
  name: string;
  rawFile: File;
  preview: any;
}

@Component({
  selector: 'mediaView',
  templateUrl: `./mediaView.component.html`,
  styleUrls: [`./mediaView.component.css`],
})
export class MediaViewComponent implements OnInit {
  @ViewChild('file', { static: false }) file;
  @Input() mediaItem: MediaItemModel;

  progress;
  name: string;
  canBeClosed = true;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;
  imageUrl: any;

  public files: Set<File> = new Set();

  uploadFiles: Set<UploadFile> = new Set();

  constructor() {}

  ngOnInit() {}

  onChange(fileList: FileList) {
    if (fileList.length > 0) {
      Array.from(fileList).forEach((item) => {
        let tmp = <UploadFile>{ name: item.name, rawFile: item };

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
    this.file.nativeElement.click();
  }
}
