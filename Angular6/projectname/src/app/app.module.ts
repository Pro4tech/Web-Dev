import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProjFileComponent } from './proj-file/proj-file.component';
import { ProjHelloComponent } from './proj-hello/proj-hello.component';
import { ProjDateComponent } from './proj-date/proj-date.component';
import { ProjAddressComponent } from './proj-address/proj-address.component';
import { ProjDataBindingComponent } from './proj-data-binding/proj-data-binding.component';
// import { Module } from 'module';
import { Module1Module } from './module1/module1.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjFileComponent,
    ProjHelloComponent,
    ProjDateComponent,
    ProjAddressComponent,
    ProjDataBindingComponent,
  ],
  imports: [
    BrowserModule,
    //These Modules are for 2-Way data Binding
    Module1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
