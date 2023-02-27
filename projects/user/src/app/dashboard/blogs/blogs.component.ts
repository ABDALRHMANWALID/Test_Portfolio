import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  title: string = "My Blog";
  image: string = "assets/images/microsoft_2.jfif";
  subTitle: string = "Title Blog";
  description: string = `Lorem Ipsum is simply dummy text
   of the printing and typesetting industry. Lorem Ipsum 
   has been the industry's standard dummy text ever since
    the 1500s, when an unknown printer took a galley of type
     and scrambled it to make a type specimen book.
      It has survived not only five centuries, but
       also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised
         in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently
           with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`;
  attachments: any[] = [
    { name: "Attachment", link: "https://www.google.com/" },
    { name: "Attachment", link: "https://www.google.com/" },
    { name: "Attachment", link: "https://www.google.com/" },
  ];
  date: string = "20th June 2023";
  upDate: string = "20th June 2023";
  relatedBlogs: any[] = [
    { id: "fshnof3484", title: "My Blog", image: "assets/images/bg_skills_2.png" },
    { id: "fshnof3484", title: "My Blog", image: "assets/images/bg_skills_2.png" },
    { id: "fshnof3484", title: "My Blog", image: "assets/images/bg_skills_2.png" },
    { id: "fshnof3484", title: "My Blog", image: "assets/images/bg_skills_2.png" },
    { id: "fshnof3484", title: "My Blog", image: "assets/images/bg_skills_2.png" },
    { id: "fshnof3484", title: "My Blog", image: "assets/images/bg_skills_2.png" },
    { id: "fshnof3484", title: "My Blog", image: "assets/images/bg_skills_2.png" },
  ]

  constructor(private dashboardServices: DashboardService) { }

  ngOnInit(): void {
    this.headerStyle();
  }
  headerStyle() {
    this.dashboardServices.emitChange({ headerStyle: 1 });
  }

}
