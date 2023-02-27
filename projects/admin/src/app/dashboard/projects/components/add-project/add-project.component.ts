import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import * as $ from "jquery";
// import { HttpClient } from '@angular/common/http';
export interface client {
  name: string;
  id: string;
  image: string;
  howKnowHim: string;
  totalCost: number;
  linksContactId: string[];
  dateStartWork: string;
  dateEndWork: string;
  duration: number;
  num_project: number;

}

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  @ViewChild('projDrop') projDrop!: ElementRef;
  @ViewChild('proj_image') proj_image!: ElementRef;
  myControl = new FormControl<any>('');
  clients: any[] = [
    { id: "rtertert", name: "Abdalrhman", image: "assets/images/DSC_0492.jpg", howKnowHim: "Upwork", totalCost: 9999, linksContactId: ["dfsfsdf", "dsfsdf", "sgfgdfg", "sdfsfsdf"], dateStartWork: "2006 - 12 - 5", dateEndWork: "2022 - 2 - 2", duration: 365, num_project: 9 },
    { id: "bvncvbnv", name: "Walid", image: "assets/images/DSC_0492.jpg", howKnowHim: "Upwork", totalCost: 9999, linksContactId: ["dfsfsdf", "dsfsdf", "sgfgdfg", "sdfsfsdf"], dateStartWork: "2006 - 12 - 5", dateEndWork: "2022 - 2 - 2", duration: 365, num_project: 9 },
    { id: "dasdasd", name: "Ahmed", image: "assets/images/DSC_0492.jpg", howKnowHim: "Upwork", totalCost: 9999, linksContactId: ["dfsfsdf", "dsfsdf", "sgfgdfg", "sdfsfsdf"], dateStartWork: "2006 - 12 - 5", dateEndWork: "2022 - 2 - 2", duration: 365, num_project: 9 },
    { id: "ytutyu", name: "Mahamed", image: "assets/images/DSC_0492.jpg", howKnowHim: "Upwork", totalCost: 9999, linksContactId: ["dfsfsdf", "dsfsdf", "sgfgdfg", "sdfsfsdf"], dateStartWork: "2006 - 12 - 5", dateEndWork: "2022 - 2 - 2", duration: 365, num_project: 9 },
    { id: "xsqadasd", name: "Mahmoud", image: "assets/images/DSC_0492.jpg", howKnowHim: "Upwork", totalCost: 9999, linksContactId: ["dfsfsdf", "dsfsdf", "sgfgdfg", "sdfsfsdf"], dateStartWork: "2006 - 12 - 5", dateEndWork: "2022 - 2 - 2", duration: 365, num_project: 9 },
  ];
  filteredclients!: Observable<any[]>;
  relatedProjectsForm = new FormControl();
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
  ];
  formProject!: FormGroup;
  DFP: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filteredclients = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.clients.slice();
      }),
    );
    if (JSON.parse(localStorage.getItem("updateProj")!) != null) {
      this.DFP = JSON.parse(localStorage.getItem("updateProj")!);
      this.myControl.setValue(this.DFP.clientId);
      // console.log(this.projDrop);
      setTimeout(() => {
        this.projDrop.nativeElement.classList.add("act");
        this.proj_image.nativeElement.src = this.DFP.image;
      }, 1000);
    }
    console.log(this.DFP);
    this.creatForm();
    console.log(this.formProject.value);
  }

  displayFn(user: client): string {
    return user && user.name ? user.name : '';
  }

  private _filter(value: any): any[] {
    const filterValue = value.toLowerCase();
    return this.clients.filter(client => client.name.toLowerCase().includes(filterValue));
  }

  selectImage(event: any) {
    console.log(this.projDrop);

    let reader: any = new FileReader();
    reader.addEventListener("load", () => {
      this.projDrop.nativeElement.classList.add("act");
      this.formProject.get("image")?.setValue(reader.result);
      this.proj_image.nativeElement.src = reader.result;
    });
    reader.readAsDataURL(event.target.files[0]);
  }

  creatForm() {
    this.formProject = this.fb.group({
      id: [this.DFP?.id || 'dfdf53453'],
      title: [this.DFP?.title || '', Validators.required],
      subTitle: [this.DFP?.subTitle || '', Validators.required],
      image: [this.DFP?.image || '', Validators.required],
      notUpdated: [this.DFP?.notUpdated || '', Validators.required],
      update: [this.DFP ? new Date(this.DFP?.update.split("-").reverse().join("/")) : '', Validators.required],
      active: [this.DFP?.active ],
      startDate: [this.DFP ? new Date(this.DFP?.startDate.split("-").reverse().join("/")) : '', Validators.required],
      endDate: [this.DFP ? new Date(this.DFP?.endDate.split("-").reverse().join("/")) : '', Validators.required],
      duration: [this.DFP?.duration || '', Validators.required],
      description: [this.DFP?.description || '', Validators.required],
      demoLink: [this.DFP?.demoLink || '', Validators.required],
      clientId: [this.DFP?.clientId || '', Validators.required],
      clientName: [this.DFP?.clientName || '', Validators.required],
      relatedProjectdId: [this.DFP?.relatedProjectdId || '', Validators.required],
      cost: [this.DFP?.cost || '', Validators.required],
      numViews: [this.DFP?.numViews || '', Validators.required],
      durationView: [this.DFP?.durationView || '', Validators.required],
    });
  }

  upload() {
    let startDate: any = moment(this.formProject.value["startDate"]).format("DD-MM-YYYY");
    let endDate: any = moment(this.formProject.value["endDate"]).format("DD-MM-YYYY");
    let duration: any = (new Date(this.formProject.value["endDate"]).getTime() - new Date(this.formProject.value["startDate"]).getTime()) / (1000 * 3600);
    let update = moment(this.formProject.value["update"]).format("DD-MM-YYYY");
    let notUpdated: boolean | any = update !== "" ? false : true;
    let active: boolean | any = this.formProject.value["active"] === true ? true : false;
    let clientId = this.myControl.value;
    let clientName = (this.clients.find(client => client.id == clientId)).name;
    let formData = new FormData();
    let data: any = {};
    console.log(formData);
    Object.entries(this.formProject.value).forEach(([key, value]: any) => {
      if (key == "startDate") {
        formData.append(key, startDate);
      } else if (key == "endDate") {
        formData.append(key, endDate);
      } else if (key == "duration") {
        formData.append(key, duration);
      } else if (key == "update") {
        formData.append(key, update);
      } else if (key == "notUpdated") {
        formData.append(key, notUpdated);
      } else if (key == "active") {
        formData.append(key, active);
      } else if (key == "durationView") {
        formData.append(key, "888");
      } else if (key == "numViews") {
        formData.append(key, "777");
      } else if (key == "clientId") {
        formData.append(key, clientId);
      } else if (key == "clientName") {
        formData.append(key, clientName);
      } else {
        formData.append(key, value);
      }
    });
    formData.forEach((value, key) => { data[key] = value }); console.log(this.myControl.value);
    // console.log(this.formProject.value);
    console.log(data);
  }
}
