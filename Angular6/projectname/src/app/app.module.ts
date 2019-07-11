import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjFileComponent } from './proj-file/proj-file.component';
import { ProjHelloComponent } from './proj-hello/proj-hello.component';
import { ProjDateComponent } from './proj-date/proj-date.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjFileComponent,
    ProjHelloComponent,
    ProjDateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
