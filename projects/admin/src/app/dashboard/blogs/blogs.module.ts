import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { AllBlogsComponent } from './components/all-blogs/all-blogs.component';
import { AddBlogsComponent } from './components/add-blogs/add-blogs.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DelDialogComponent } from '../../shared/del-dialog/del-dialog.component';


@NgModule({
  declarations: [
    BlogsComponent,
    AllBlogsComponent,
    AddBlogsComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ]
})
export class BlogsModule { }
