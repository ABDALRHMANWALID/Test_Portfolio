import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-projecs',
  templateUrl: './home-projecs.component.html',
  styleUrls: ['./home-projecs.component.scss']
})
export class HomeProjecsComponent implements OnInit {
  myProjs:any[] = [
    {id:"23423423423424",title:"My Project",image:"assets/images/microsoft.jfif",demo:"https://www.google.com/"},
    {id:"23423423423424",title:"My Project",image:"assets/images/microsoft.jfif",demo:"https://www.google.com/"},
    {id:"23423423423424",title:"My Project",image:"assets/images/microsoft.jfif",demo:"https://www.google.com/"},
    {id:"23423423423424",title:"My Project",image:"assets/images/microsoft.jfif",demo:"https://www.google.com/"},
    {id:"23423423423424",title:"My Project",image:"assets/images/microsoft.jfif",demo:"https://www.google.com/"},
    {id:"23423423423424",title:"My Project",image:"assets/images/microsoft.jfif",demo:"https://www.google.com/"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
