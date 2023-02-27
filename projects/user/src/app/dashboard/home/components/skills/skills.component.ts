import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  mySkills:string[] = ["HTML","CSS","SASS","Javascript","Typescript","Angular"];
  constructor() { }

  ngOnInit(): void {
  }

}
