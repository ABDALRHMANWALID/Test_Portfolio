import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @ViewChild('skillsDrop') skillsDrop!: ElementRef;
  @ViewChild('icon_skills') icon_skills!: ElementRef;
  skills: any[] = [
    {icon:"assets/icons/icons8-html-5.svg",name:"HTML",},
    // {icon:"assets/icons/icons8-css3.svg",name:"CSS",},
    // {icon:"assets/icons/icons8-javascript.svg",name:"JS",},
    // {icon:"assets/icons/icons8-sass.svg",name:"Sass",},
    // {icon:"assets/icons/icons8-typescript.svg",name:"TS",},
    // {icon:"assets/icons/icons8-angularjs.svg",name:"Anguar"},
  ];
  formSkill!: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formSkill = this.fb.group({
      name: ['', Validators.required],
      icon: ['', Validators.required]
    });
  }

  selectIcon(event: any) {
    let reader: any = new FileReader();
    reader.addEventListener("load", () => {
      this.skillsDrop.nativeElement.classList.add("act");
      this.formSkill.get("icon")?.setValue(reader.result);
      this.icon_skills.nativeElement.src = reader.result;
    });
    reader.readAsDataURL(event.target.files[0]);
  }

  removeSkill(index: number) { 
    this.skills.splice(index,1);
  }

  upload() {
    this.skills.push(this.formSkill.value);
    this.createForm();
    this.icon_skills.nativeElement.src = "";
    this.skillsDrop.nativeElement.classList.remove("act");
  }
}
