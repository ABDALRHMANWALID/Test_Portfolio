import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { MaterialModule } from '../../material/material.module';
import {  ReactiveFormsModule } from '@angular/forms';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DelDialogComponent } from '../../shared/del-dialog/del-dialog.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    AllProjectsComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ]
  ,
  entryComponents:[DelDialogComponent]
})
export class ProjectsModule { }
