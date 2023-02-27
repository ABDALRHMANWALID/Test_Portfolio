import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortTextPipe } from './pipe/short-text.pipe';



@NgModule({
  declarations: [
    ShortTextPipe
  ],
  imports: [
    CommonModule
  ],exports: [ 
    ShortTextPipe
  ]
})
export class SharedModule { }
