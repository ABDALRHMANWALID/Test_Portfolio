import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { AddBlogsComponent } from './components/add-blogs/add-blogs.component';
import { AllBlogsComponent } from './components/all-blogs/all-blogs.component';

const routes: Routes = [
  {
    path: '', component: BlogsComponent, children: [
      { path: '', component: AllBlogsComponent },
      { path: 'add_blogs', component: AddBlogsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
