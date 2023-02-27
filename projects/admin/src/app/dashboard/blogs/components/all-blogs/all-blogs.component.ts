import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DelDialogComponent } from 'projects/admin/src/app/shared/del-dialog/del-dialog.component';
@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss']
})
export class AllBlogsComponent implements OnInit {
  @ViewChild('titSearch') titSearch!: ElementRef;
  @ViewChild('startDateSearch') startDateSearch!: ElementRef;
  @ViewChild('endDateSearch') endDateSearch!: ElementRef;

  blogs: any[] = [
    {
      id: "dfgdfg78788",
      title: "Title",
      subTitle: "Sub Title",
      image: "assets/images/bg_skills_2.png",
      update: "",
      notUpdated: true,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      attchName: "Attachment",
      attchLink: "https://www.microsoft.com",
      relatedBlogsId: ["dfgdfg78788", "wqweafasdff", "hgjhjgfg", "thgjhj"],
      active: true,
      numViews: 888,
      durationView: 777,
      date:"2022 - 24 - 2",
    },
    {
      id: "wqweafasdff",
      title: "Title",
      subTitle: "Sub Title",
      image: "assets/images/bg_skills_2.png",
      update: "2023 - 24 - 2",
      notUpdated: false,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      attchName: "Attachment",
      attchLink: "https://www.microsoft.com",
      relatedBlogsId: ["dfgdfg78788", "wqweafasdff", "hgjhjgfg", "thgjhj"],
      active: true,
      numViews: 888,
      durationView: 777,
      date:"2022 - 24 - 2",
    },
    {
      id: "hgjhjgfg",
      title: "Title",
      subTitle: "Sub Title",
      image: "assets/images/bg_skills_2.png",
      update: "2023 - 24 - 2",
      notUpdated: false,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      attchName: "Attachment",
      attchLink: "https://www.microsoft.com",
      relatedBlogsId: ["dfgdfg78788", "wqweafasdff", "hgjhjgfg", "thgjhj"],
      active: true,
      numViews: 888,
      durationView: 777,
      date:"2022 - 24 - 2",
    },
    {
      id: "thgjhj",
      title: "Title",
      subTitle: "Sub Title",
      image: "assets/images/bg_skills_2.png",
      update: "2023 - 24 - 2",
      notUpdated: false,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      attchName: "Attachment",
      attchLink: "https://www.microsoft.com",
      relatedBlogsId: ["dfgdfg78788", "wqweafasdff", "hgjhjgfg", "thgjhj"],
      active: true,
      numViews: 888,
      durationView: 777,
      date:"2022 - 24 - 2",
    },
  ];

  constructor(public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
  }
  deleteBlog(numItem: number) {
    let dialogRef = this.dialog.open(DelDialogComponent, { data: { item: "Blog", numItem: numItem } });
    dialogRef.afterClosed().subscribe((res: any) => {
      console.log(res);
    })
  }

  active(index: number) {
    this.blogs[index].active = !this.blogs[index].active;
  }

  update(index: number) {
    localStorage.setItem("updateBlog", JSON.stringify(this.blogs[index]));
    this.router.navigate(["/blogs/add_blogs"]);
  }

  search() {
    if (this.titSearch.nativeElement.value && !this.startDateSearch.nativeElement.value && !this.endDateSearch.nativeElement.value) {
      console.log("title = ", this.titSearch.nativeElement.value);
    } else if (!this.titSearch.nativeElement.value && this.startDateSearch.nativeElement.value && this.endDateSearch.nativeElement.value) {
      console.log("Start Date = ", this.startDateSearch.nativeElement.value);
      console.log("End Date = ", this.endDateSearch.nativeElement.value);
    } else if (this.titSearch.nativeElement.value && this.startDateSearch.nativeElement.value && this.endDateSearch.nativeElement.value) {
      console.log("title = ", this.titSearch.nativeElement.value);
      console.log("Start Date = ", this.startDateSearch.nativeElement.value);
      console.log("End Date = ", this.endDateSearch.nativeElement.value);
    } else if (!this.titSearch.nativeElement.value && !this.startDateSearch.nativeElement.value && !this.endDateSearch.nativeElement.value) {
      console.log("no Thing to Search");
    }
  }
}
