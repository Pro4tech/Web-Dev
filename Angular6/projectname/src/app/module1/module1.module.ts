import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import{FormsModule} from '@angular/forms';


@NgModule({
  declarations: [Comp1Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[Comp1Component]
})
export class Module1Module { }
