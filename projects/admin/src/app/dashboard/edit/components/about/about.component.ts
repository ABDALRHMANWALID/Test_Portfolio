import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import * as $ from "jquery";
// import { HttpClient } from '@angular/common/http';
export interface info {
  name: string;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('aboutDrop') aboutDrop!: ElementRef;
  @ViewChild('image_about') image_about!: ElementRef;
  formAbout!: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formAbout = this.fb.group({
      numberExp: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  selectImage(event: any) {
    let reader: any = new FileReader();
    reader.addEventListener("load", () => {
      this.aboutDrop.nativeElement.classList.add("act");
      this.formAbout.get("image")?.setValue(reader.result);
      this.image_about.nativeElement.src = reader.result;
    });
    reader.readAsDataURL(event.target.files[0]);
  }

  
  upload() {
    console.log(this.formAbout.value);
  }
}



