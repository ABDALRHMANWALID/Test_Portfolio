import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { AllClientsComponent } from './components/all-clients/all-clients.component';
import { AddClientsComponent } from './components/add-clients/add-clients.component';
import { MaterialModule } from '../../material/material.module';
import { ClientsComponent } from './clients.component';
import { SharedModule } from "../../../../../user/src/app/shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AllClientsComponent,
        AddClientsComponent,
        ClientsComponent
    ],
    imports: [
        CommonModule,
        ClientsRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        SharedModule,
    ]
})
export class ClientsModule { }
