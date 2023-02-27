import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  name: string = "My Projects";
  subTitle: string = "My Projects";
  image: string = "assets/images/Microsoft-Loop.jpg";
  client: { image: string, name: string } = {
    image: "assets/images/microsoft_logo.svg",
    name: "Microsoft"
  };
  demoLink:string = "https://www.microsoft.com/";
  description:string = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
  leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
  publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  `;
  relatedProjects:any[] = [
    {id:"23423423423424",title:"My Project",image:"assets/images/microsoft.jfif",demo:"https://www.google.com/"},
    {id:"23423423423424",title:"My Project",image:"assets/images/microsoft.jfif",demo:"https://www.google.com/"},
    {id:"23423423423424",title:"My Project",image:"assets/images/microsoft.jfif",demo:"https://www.google.com/"},
    {id:"23423423423424",title:"My Project",image:"assets/images/microsoft.jfif",demo:"https://www.google.com/"},
  ]
  date:string= "20th June 2023";
  upDate:string= "20th June 2023";
  constructor() { }

  ngOnInit(): void {
  }

}
