import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeProjecsComponent } from './components/home-projecs/home-projecs.component';
import { HomeBlogsComponent } from './components/home-blogs/home-blogs.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../material/material.module';

// import { SwiperModule } from 'swiper/angular';





@NgModule({
  declarations: [
    LandingComponent,
    AboutComponent,
    SkillsComponent,
    HomeProjecsComponent,
    HomeBlogsComponent,
    ExperienceComponent,
    StatisticsComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
