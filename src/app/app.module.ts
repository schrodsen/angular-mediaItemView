import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { DndDirective } from './dnd.directive';

import { AppComponent } from './app.component';
import { MediaViewComponent } from './mediaView/mediaView.component'
import { UploadBoxComponent } from './uploadBox/uploadBox.component'


@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, MediaViewComponent, UploadBoxComponent, DndDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
