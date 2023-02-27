import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DelDialogComponent } from 'projects/admin/src/app/shared/del-dialog/del-dialog.component';
import { empty } from 'rxjs';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {
  @ViewChild('titSearch') titSearch!: ElementRef;
  @ViewChild('startDateSearch') startDateSearch!: ElementRef;
  @ViewChild('endDateSearch') endDateSearch!: ElementRef;



  projects: any[] = [
    {
      id: "23423423423424",
      title: "My Project",
      subTitle: "My Project",
      image: "assets/images/microsoft.jfif",
      notUpdated: true,
      update: "2006 - 12 - 5",
      active: false,
      startDate: "2006 - 12 - 5",
      endDate: "2022 - 2 - 2",
      duration: 365,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      demoLink: "https://www.microsoft.com/",
      clientId: "asfdasdfdf22e",
      clientName: "Microsoft",
      relatedProjectdId: ["23423423423424", "23423423423424", "23423423423424", "23423423423424"],
      cost: 999999,
      numViews: 999,
      durationView: 99,
    },
    {
      id: "23423423423424",
      title: "My Project",
      subTitle: "My Project",
      image: "assets/images/microsoft.jfif",
      notUpdated: true,
      update: "2006 - 12 - 5",
      active: true,
      startDate: "2006 - 12 - 5",
      endDate: "2022 - 2 - 2",
      duration: 365,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      demoLink: "https://www.microsoft.com/",
      clientId: "asfdasdfdf22e",
      clientName: "Microsoft",
      relatedProjectdId: ["23423423423424", "23423423423424", "23423423423424", "23423423423424"],
      cost: 999999,
      numViews: 999,
      durationView: 99,
    },
    {
      id: "23423423423424",
      title: "My Project",
      subTitle: "My Project",
      image: "assets/images/microsoft.jfif",
      notUpdated: true,
      update: "2006 - 12 - 5",
      active: true,
      startDate: "2006 - 12 - 5",
      endDate: "2022 - 2 - 2",
      duration: 365,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      demoLink: "https://www.microsoft.com/",
      clientId: "asfdasdfdf22e",
      clientName: "Microsoft",
      relatedProjectdId: ["23423423423424", "23423423423424", "23423423423424", "23423423423424"],
      cost: 999999,
      numViews: 999,
      durationView: 99,
    },
    {
      id: "23423423423424",
      title: "My Project",
      subTitle: "My Project",
      image: "assets/images/microsoft.jfif",
      notUpdated: true,
      update: "2006 - 12 - 5",
      active: true,
      startDate: "2006 - 12 - 5",
      endDate: "2022 - 2 - 2",
      duration: 365,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      demoLink: "https://www.microsoft.com/",
      clientId: "asfdasdfdf22e",
      clientName: "Microsoft",
      relatedProjectdId: ["23423423423424", "23423423423424", "23423423423424", "23423423423424"],
      cost: 999999,
      numViews: 999,
      durationView: 99,
    },
    {
      id: "23423423423424",
      title: "My Project",
      subTitle: "My Project",
      image: "assets/images/microsoft.jfif",
      notUpdated: true,
      update: "2006 - 12 - 5",
      active: true,
      startDate: "2006 - 12 - 5",
      endDate: "2022 - 2 - 2",
      duration: 365,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      demoLink: "https://www.microsoft.com/",
      clientId: "asfdasdfdf22e",
      clientName: "Microsoft",
      relatedProjectdId: ["23423423423424", "23423423423424", "23423423423424", "23423423423424"],
      cost: 999999,
      numViews: 999,
      durationView: 99,
    },
    {
      id: "23423423423424",
      title: "My Project",
      subTitle: "My Project",
      image: "assets/images/microsoft.jfif",
      notUpdated: true,
      update: "2006 - 12 - 5",
      active: true,
      startDate: "2006 - 12 - 5",
      endDate: "2022 - 2 - 2",
      duration: 365,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      demoLink: "https://www.microsoft.com/",
      clientId: "asfdasdfdf22e",
      clientName: "Microsoft",
      relatedProjectdId: ["23423423423424", "23423423423424", "23423423423424", "23423423423424"],
      cost: 999999,
      numViews: 999,
      durationView: 99,
    },
  ]
  constructor(public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
  }

  deleteProj(numItem: number) {
    let dialogRef = this.dialog.open(DelDialogComponent, { data: { item: "project", numItem: numItem } });
    dialogRef.afterClosed().subscribe((res: any) => {
      console.log(res);
    })
  }

  active(index: number) {
    this.projects[index].active = !this.projects[index].active;
  }

  update(index: number) {
    localStorage.setItem("updateProj", JSON.stringify(this.projects[index]));
    this.router.navigate(["/projects/add_projects"]);
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
