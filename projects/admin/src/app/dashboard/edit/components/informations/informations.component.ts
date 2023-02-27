import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { never, observable, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
	selector: 'app-informations',
	templateUrl: './informations.component.html',
	styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {
	@ViewChild('cv_preiew') cv_preiew!: ElementRef;
	infoForm!: FormGroup;
	images: string[] = [];
	mainImage: string = this.images[0];
	mainImageSelected: boolean = false;
	mainImageNum: number = 0;
	CV: string = "";
	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.createForm();
	}

	createForm() {
		this.infoForm = this.fb.group({
			name: ['', Validators.required],
			job: ['', Validators.required],
			level: ['', Validators.required],
			phone: ['', Validators.required],
			URLyoutube: [''],
			URLtelegram: [''],
			URLfacebook: [''],
			URLwhatsapp: [''],
			URLinstagram: [''],
			URLlinkedin: [''],
			URLtwitter: [''],
			URLgithub: [''],
			URLbehance: [''],
			images: ['', Validators.required],
			mainImage: ['', Validators.required],
			cv: ['',Validators.required],
		})
	}

	selectImage(event: any) {
		let reader: any = new FileReader();
		reader.addEventListener("load", () => {
			this.images.push(reader.result);
			this.infoForm.get("images")?.setValue(this.images.toString());

			// this.infoForm.get("images")?.setValue(reader.result);
			// return reader.result;
		});
		reader.readAsDataURL(event.target.files[0]);
	}

	deleteImage(index: number) {
		this.images.splice(index, 1);
		this.selectlandImage();
	}

	selectlandImage(index?: number) {
		if (this.mainImageSelected == false) {
			if (index != undefined) {
				document.querySelectorAll(".group_images .images").forEach((ele) => ele.classList.remove("act"));
				document.querySelectorAll(".group_images .images")[index].classList.add("act");
				this.mainImage = this.images[index];
				this.mainImageSelected = true;
				this.mainImageNum = index;
			} else {
				document.querySelectorAll(".group_images .images")[0].classList.add("act");
				this.mainImage = this.images[0];
				this.mainImageSelected = true;
				this.mainImageNum = 0;
			}
		} else if (this.mainImageSelected == true && index != undefined) {
			if (index == this.mainImageNum) {
				document.querySelectorAll(".group_images .images").forEach((ele) => ele.classList.remove("act"));
				document.querySelectorAll(".group_images .images")[0].classList.add("act");
				this.mainImage = this.images[0];
				this.mainImageSelected = true;
				this.mainImageNum = 0;
			} else if (index != this.mainImageNum) {
				document.querySelectorAll(".group_images .images").forEach((ele) => ele.classList.remove("act"));
				document.querySelectorAll(".group_images .images")[index].classList.add("act");
				this.mainImage = this.images[index];
				this.mainImageSelected = true;
				this.mainImageNum = index;
			}
		} else if (this.mainImageSelected == true && index == undefined) {
			document.querySelectorAll(".group_images .images").forEach((ele) => ele.classList.remove("act"));
			document.querySelectorAll(".group_images .images")[0].classList.add("act");
			this.mainImage = this.images[0];
			this.mainImageSelected = true;
			this.mainImageNum = 0;
		}
		this.infoForm.get("mainImage")?.setValue(this.mainImage);
	}

	selectCV(event: any) {
		let reader: any = new FileReader();
		reader.addEventListener("load", () => {
			this.CV = reader.result;
			this.infoForm.get("cv")?.setValue(this.CV);
			this.cv_preiew.nativeElement.classList.add("act");
			// this.cv_preiew.nativeElement.innerHTML += `<iframe src="${this.CV}" width="100%" height="500px"></iframe>`;
		});
		reader.readAsDataURL(event.target.files[0]);
	}

	upload() {
		// this.selectlandImage();
		console.log(this.infoForm.value);
	}
	// in app.component.ts
	files: File[] = [];

	onSelect(event: any) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event: any) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

}
