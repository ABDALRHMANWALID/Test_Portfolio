import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  myFullName: string = "Abdalrhman Walid";
  myName: string = this.myFullName.split(" ")[0];
  myJob: string = "Software Engineer";
  myLinks_social: string[] = [
    "https://www.facebook.com/bodygrapic",
    "https://www.instagram.com/a.walid_11/",
    "https://www.linkedin.com/in/abdalrhman-walid-8bb392204/",
    "https://t.me/AbdalrhmanWalidDev",
    "",
    "https://wa.me/+201019609406",
    "",
  ]
  my_social: any[] = [];
  myPhone:string ="201019609406";

  constructor() { }

  ngOnInit(): void {
    this.myLinks_social.forEach((ele: string) => {
      if (ele.includes("facebook.com")) {
        this.my_social.push({link:ele,icon:"assets/images/social/icons8-facebook.svg"});
      } else if (ele.includes("instagram.com")) {
        this.my_social.push({link:ele,icon:"assets/images/social/icons8-instagram.svg"});
      } else if (ele.includes("linkedin.com")) {
        this.my_social.push({link:ele,icon:"assets/images/social/icons8-linkedin.svg"});
      } else if (ele.includes("t.me")) {
        this.my_social.push({link:ele,icon:"assets/images/social/icons8-telegram-app.svg"});
      } else if (ele.includes("twitter.com")) {
        this.my_social.push({link:ele,icon:"assets/images/social/icons8-twitter.svg"});
      } else if (ele.includes("wa.me")) {
        this.my_social.push({link:ele,icon:"assets/images/social/icons8-whatsapp.svg"});
      } else if (ele.includes("youtube.com")) {
        this.my_social.push({link:ele,icon:"assets/images/social/icons8-youtube.svg"});
      } else {
        this.my_social.push({link:ele,icon:"assets/images/social/icons8-dynamic-links.svg"});
      }
    });
  }

}
