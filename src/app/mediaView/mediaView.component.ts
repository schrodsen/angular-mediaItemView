import { Component, Input, OnInit } from '@angular/core';
import { MediaItemModel } from '../model/mediaItemModel';

@Component({
  selector: 'mediaView',
  templateUrl: `./mediaView.component.html`,
  styles: [`./mediaView.component.css`]
})
export class MediaViewComponent implements OnInit {
  
  @Input() mediaItem: MediaItemModel;

  name: string;

  constructor() {}

  ngOnInit() {}
}