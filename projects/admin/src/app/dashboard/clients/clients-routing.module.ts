import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { AddClientsComponent } from './components/add-clients/add-clients.component';
import { AllClientsComponent } from './components/all-clients/all-clients.component';

const routes: Routes = [
  {
    path: '', component: ClientsComponent, children: [
      { path: '', component: AllClientsComponent },
      { path: 'add_clients', component: AddClientsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
