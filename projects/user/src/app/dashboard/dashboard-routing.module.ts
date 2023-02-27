import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsModule } from './blogs/blogs.module';
import { DashboardComponent } from './dashboard.component';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';

const routes: Routes = [
  
  { path: '', component: DashboardComponent,children:[
    { path: '', loadChildren: () =>import('./home/home.module').then(m => m.HomeModule) },
    { path: 'blogs', loadChildren: () =>import('./blogs/blogs.module').then(m => m.BlogsModule) },
    { path: 'projects', loadChildren: () =>import('./projects/projects.module').then(m => m.ProjectsModule) },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
