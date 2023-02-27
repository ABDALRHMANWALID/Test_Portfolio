import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelDialogComponent } from './del-dialog/del-dialog.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    DelDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [
    DelDialogComponent,
  ]
})
export class SharedModule { }
