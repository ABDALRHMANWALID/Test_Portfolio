import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { DelDialogComponent } from 'projects/admin/src/app/shared/del-dialog/del-dialog.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @ViewChild('expDrop') expDrop!: ElementRef;
  @ViewChild('image_exp') image_exp!: ElementRef;
  experiences: any[] = [
    {
      id: "erwerwer34234", title: "Microsoft", image: "assets/images/microsoft_logo.svg",
      description: `I worked in a more than office in Microsoft in a World`,
      dateStart: "2023 - 1 - 24", dateEnd: "2023 - 12 - 5"
    },
    {
      id: "erwerwer34234", title: "Microsoft", image: "assets/images/microsoft_logo.svg",
      description: `I worked in a more than office in Microsoft in a World`,
      dateStart: "2023 - 1 - 24", dateEnd: "2023 - 12 - 5"
    },
    {
      id: "erwerwer34234", title: "Microsoft", image: "assets/images/microsoft_logo.svg",
      description: `I worked in a more than office in Microsoft in a World`,
      dateStart: "2023 - 1 - 24", dateEnd: "2023 - 12 - 5"
    },
    {
      id: "erwerwer34234", title: "Microsoft", image: "assets/images/microsoft_logo.svg",
      description: `I worked in a more than office in Microsoft in a World`,
      dateStart: "2023 - 1 - 24", dateEnd: "2023 - 12 - 5"
    },
  ]
  DFE: any;
  formExps!: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.creatForm();
  }

  creatForm() {
    this.formExps = this.fb.group({
      id: [this.DFE?.id || 'dfdf53453'],
      title: [this.DFE?.title || '', Validators.required],
      image: [this.DFE?.image || '', Validators.required],
      description: [this.DFE?.description || '', Validators.required],
      dateStart: [this.DFE ? new Date(this.DFE?.dateStart.split("-").reverse().join("/")) : '', Validators.required],
      dateEnd: [this.DFE ? new Date(this.DFE?.dateStart.split("-").reverse().join("/")) : '', Validators.required],
    });
  }

  updateExp(i: number) {
    this.DFE = this.experiences[i];
    this.creatForm();
    this.expDrop.nativeElement.classList.add("act");
    this.image_exp.nativeElement.src = this.experiences[i].image;
  }

  selectImage(event: any) {
    let reader: any = new FileReader();
    reader.addEventListener("load", () => {
      this.expDrop.nativeElement.classList.add("act");
      this.formExps.get("image")?.setValue(reader.result);
      this.image_exp.nativeElement.src = reader.result;
    });
    reader.readAsDataURL(event.target.files[0]);
  }

  deleteExp(numItem: number) {
    let dialogRef = this.dialog.open(DelDialogComponent, { data: { item: "Experience", numItem: numItem } });
    dialogRef.afterClosed().subscribe((res: any) => {
      console.log(res);
    })
  }

  upload() {
    let startDate = moment(this.formExps.value["dateStart"]).format("DD-MM-YYYY");
    let endDate = moment(this.formExps.value["dateEnd"]).format("DD-MM-YYYY");
    let formData = new FormData();
    let data: any = {};
    console.log(formData);
    Object.entries(this.formExps.value).forEach(([key, value]: any) => {
      if (key == "dateStart") {
        formData.append(key, startDate);
      } else if (key == "dateEnd") {
        formData.append(key, endDate);
      } else {
        formData.append(key, value);
      }
    });
    formData.forEach((value, key) => { data[key] = value });
    console.log(data);
    this.experiences.push(data);
    this.creatForm();
    this.expDrop.nativeElement.classList.remove("act");
    this.image_exp.nativeElement.src = "";
  }

}


