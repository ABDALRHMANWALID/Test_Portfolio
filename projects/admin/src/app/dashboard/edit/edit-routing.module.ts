import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { InformationsComponent } from './components/informations/informations.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EditComponent } from './edit.component';

const routes: Routes = [
  {
    path: '', component: EditComponent, children: [
      { path: '', component:InformationsComponent},
      { path: 'about', component:AboutComponent},
      { path: 'skills', component:SkillsComponent},
      { path: 'experience', component:ExperienceComponent},
      { path: 'statistics', component:StatisticsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
