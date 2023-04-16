import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilesPipe } from './shared/pipes/files.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { BackgroundImageComponent } from './shared/component/background-image/background-image.component';

@NgModule({
  declarations: [
    AppComponent,
    FilesPipe,
    FilterPipe,
    BackgroundImageComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
