import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  myDescription:string = `My name is Abdalrhman Walid Mahmoud,
   from Egypt I am software engineer with 1+ years of experience,
    I work in Tech Company in Egypt "EngEgypt",`;
  myImg:string = "assets/images/DSC_0490.jpg";
  myNumExp:number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
