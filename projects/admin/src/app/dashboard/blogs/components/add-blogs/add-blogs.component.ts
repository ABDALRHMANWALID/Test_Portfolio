import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import * as $ from "jquery";
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.scss']
})
export class AddBlogsComponent implements OnInit {
  @ViewChild('blogDrop') blogDrop!: ElementRef;
  @ViewChild('blog_image') blog_image!: ElementRef;
  @ViewChild('inpTitleAttach') inpTitleAttach!: ElementRef;
  @ViewChild('inpLinkAttach') inpLinkAttach!: ElementRef;
  attachments: any[] = [];
  formBlog!: FormGroup;
  DFB: any;
  blogs: any[] = [
    {
      id: "dfgdfg78788",
      title: "Title Blog 1",
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
      date: "2022 - 24 - 2",
    },
    {
      id: "wqweafasdff",
      title: "Title Blog 2",
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
      date: "2022 - 24 - 2",
    },
    {
      id: "hgjhjgfg",
      title: "Title Blog 3",
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
      date: "2022 - 24 - 2",
    },
    {
      id: "thgjhj",
      title: "Title Blog 4",
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
      date: "2022 - 24 - 2",
    },
  ];
  relatedBlogsForm = new FormControl();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem("updateBlog")!) != null) {
      this.DFB = JSON.parse(localStorage.getItem("updateBlog")!);
      this.DFB.attchName.split(",").forEach((attachName:any,index:number) => {
        this.attachments.push({title:attachName,link:this.DFB.attchLink.split(",")[index]});
      })
      this.attachments
      // console.log(this.projDrop);
      setTimeout(() => {
        this.blogDrop.nativeElement.classList.add("act");
        this.blog_image.nativeElement.src = this.DFB.image;
      }, 1000);
    }
    console.log(this.DFB);
    this.creatForm();
  }


  selectImage(event: any) {
    console.log(this.blogDrop);

    let reader: any = new FileReader();
    reader.addEventListener("load", () => {
      this.blogDrop.nativeElement.classList.add("act");
      this.formBlog.get("image")?.setValue(reader.result);
      this.blog_image.nativeElement.src = reader.result;
    });
    reader.readAsDataURL(event.target.files[0]);
  }

  creatForm() {
    this.formBlog = this.fb.group({
      id: [this.DFB?.id || 'dfdf53453'],
      title: [this.DFB?.title || '', Validators.required],
      subTitle: [this.DFB?.subTitle || '', Validators.required],
      image: [this.DFB?.image || '', Validators.required],
      update: [this.DFB ? new Date(this.DFB?.update.split("-").reverse().join("/")) : ''],
      notUpdated: [this.DFB?.notUpdated || ''],
      description: [this.DFB?.description || '', Validators.required],
      attchTitle: [this.DFB?.attchTitle || ''],
      attchLink: [this.DFB?.attchLink || ''],
      relatedBlogsId: [this.DFB?.relatedBlogsId || '', Validators.required],
      active: [this.DFB?.active || ''],
      numViews: [this.DFB?.numViews || ''],
      durationView: [this.DFB?.durationView || ''],
      date: [this.DFB ? new Date(this.DFB?.date.split("-").reverse().join("/")) : '', Validators.required],
    });
  }

  upload() {
    let date: any = moment(this.formBlog.value["date"]).format("DD-MM-YYYY");
    let update: any = moment(this.formBlog.value["update"]).format("DD-MM-YYYY");
    let notUpdated: boolean | any = update !== "" ? false : true;
    let active: boolean | any = this.formBlog.value["active"] === true ? true : false;
    let attchTitle: string[] = this.attachments.map(attach => attach.title);
    let attchLink: string[] = this.attachments.map(attach => attach.link);
    let formData = new FormData();
    let data: any = {};
    console.log(formData);
    Object.entries(this.formBlog.value).forEach(([key, value]: any) => {
      if (key == "date") {
        formData.append(key, date);
      } else if (key == "update") {
        formData.append(key, update);
      } else if (key == "notUpdated") {
        formData.append(key, notUpdated);
      } else if (key == "active") {
        formData.append(key, active);
      } else if (key == "numViews") {
        formData.append(key, "888");
      } else if (key == "durationView") {
        formData.append(key, "777");
      } else if (key == "attchTitle") {
        formData.append(key, attchTitle.toString());
      } else if (key == "attchLink") {
        formData.append(key, attchLink.toString());
      } else {
        formData.append(key, value);
      }
    });
    formData.forEach((value, key) => { data[key] = value });
    console.log(data);
  }

  addAttach(event: any) {
    this.attachments.push({
      title: this.inpTitleAttach.nativeElement.value,
      link: this.inpLinkAttach.nativeElement.value
    });
    this.inpTitleAttach.nativeElement.value = "";
    this.inpLinkAttach.nativeElement.value = "";
  }

  removeAttach(index: number) {
    this.attachments.splice(index, 1);
  }

}
