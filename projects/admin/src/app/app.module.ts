import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
// import { NgxSpinnerModule } from "ngx-spinner";

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot(),
    // NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    FormsModule,
    NgbModule,
    NgxDropzoneModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
