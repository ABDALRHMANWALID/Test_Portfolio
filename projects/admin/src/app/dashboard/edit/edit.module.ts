import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { InformationsComponent } from './components/informations/informations.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    EditComponent,
    InformationsComponent,
    AboutComponent,
    SkillsComponent,
    StatisticsComponent,
    ExperienceComponent,
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ]
})
export class EditModule { }
