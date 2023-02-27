import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,children:[
    { path: '', loadChildren: () =>import('./statistics/statistics.module').then(m => m.StatisticsModule) },
    { path: 'projects', loadChildren: () =>import('./projects/projects.module').then(m => m.ProjectsModule) },
    { path: 'blogs', loadChildren: () =>import('./blogs/blogs.module').then(m => m.BlogsModule) },
    { path: 'edit', loadChildren: () =>import('./edit/edit.module').then(m => m.EditModule) },
    { path: 'statistics', loadChildren: () =>import('./statistics/statistics.module').then(m => m.StatisticsModule) },
    { path: 'clients', loadChildren: () =>import('./clients/clients.module').then(m => m.ClientsModule) },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
