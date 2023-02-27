import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { environment } from 'projects/user/src/environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  myFullName:string = "Abdalrhman Walid";
  myName:string = this.myFullName.split(" ")[0];
  myJob:string = "Software Engineer";
  myLevel:string = "junior";

  myCV:string = "assets/images/DSC_0490.jpg";
  myImg:string = "assets/images/DSC_0492.jpg";

  constructor() { }

  ngOnInit(): void {
  }
}
