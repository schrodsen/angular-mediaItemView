import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaViewComponent } from './mediaView/mediaView.component'
import { MaterialModule } from './material-module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, MediaViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
