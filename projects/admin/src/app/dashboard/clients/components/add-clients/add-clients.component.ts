import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {
  @ViewChild('imageCardDrop') imageCardDrop!: ElementRef;
  @ViewChild('card_image') card_image!: ElementRef;
  @ViewChild('logoDrop') logoDrop!: ElementRef;
  @ViewChild('logo_image') logo_image!: ElementRef;
  @ViewChild('hisImageDrop') hisImageDrop!: ElementRef;
  @ViewChild('his_image') his_image!: ElementRef;
  @ViewChild('inpAccount') inpAccount!: ElementRef;
  @ViewChild('inpLinkAccount') inpLinkAccount!: ElementRef;
  formClient!: FormGroup;
  DFC: any;
  nationalities: string[] = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina", "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];
  accounts: any[] = [];
  projects: any[] = [
    {
      id: "3242353fws",
      title: "My Project",
      subTitle: "My Project",
      image: "assets/images/microsoft.jfif",
      notUpdated: true,
      update: "2006-12-5",
      active: false,
      startDate: "2006-12-5",
      endDate: "2022-2-2",
      duration: 365,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      demoLink: "https://www.microsoft.com/",
      clientId: "asfdasdfdf22e",
      clientName: "Microsoft",
      relatedProjectdId: ["sssdte5345", "srtergsdgfvs", "zgdfgdsf", "fgdshgreythrt"],
      coast: 999999,
      numViews: 999,
      durationView: 99,
    },
    {
      id: "gyrtyerggsdgsf",
      title: "My Project",
      subTitle: "My Project",
      image: "assets/images/microsoft.jfif",
      notUpdated: true,
      update: "2006-12-5",
      active: true,
      startDate: "2013-12-5",
      endDate: "2021-2-2",
      duration: 365,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      demoLink: "https://www.microsoft.com/",
      clientId: "asfdasdfdf22e",
      clientName: "Microsoft",
      relatedProjectdId: ["fertergtfsdfsadf", "dfdgdfgdfgvasda", "4werrAWSDfas", "3423reqewrwqe4"],
      coast: 999999,
      numViews: 999,
      durationView: 99,
    },
    {
      id: "5634trwertewrt",
      title: "My Project",
      subTitle: "My Project",
      image: "assets/images/microsoft.jfif",
      notUpdated: true,
      update: "2006-12-5",
      active: true,
      startDate: "2014-12-5",
      endDate: "2020-2-2",
      duration: 365,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      demoLink: "https://www.microsoft.com/",
      clientId: "asfdasdfdf22e",
      clientName: "Microsoft",
      relatedProjectdId: ["67867urt", "8970iyurjr", "eweqwedasd", "qweqwerwefsdfwer34"],
      coast: 999999,
      numViews: 999,
      durationView: 99,
    },
    {
      id: "4234ewerw",
      title: "My Project",
      subTitle: "My Project",
      image: "assets/images/microsoft.jfif",
      notUpdated: true,
      update: "2006-12-5",
      active: true,
      startDate: "2015-12-5",
      endDate: "2019-2-2",
      duration: 365,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      demoLink: "https://www.microsoft.com/",
      clientId: "asfdasdfdf22e",
      clientName: "Microsoft",
      relatedProjectdId: ["34523wert", "453ewrtedrft", "4ry67rtyty", "534trert"],
      coast: 999999,
      numViews: 999,
      durationView: 99,
    },
    {
      id: "er6rertyergd",
      title: "My Project",
      subTitle: "My Project",
      image: "assets/images/microsoft.jfif",
      notUpdated: true,
      update: "2006-12-5",
      active: true,
      startDate: "2009-12-5",
      endDate: "2018-2-2",
      duration: 365,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      demoLink: "https://www.microsoft.com/",
      clientId: "asfdasdfdf22e",
      clientName: "Microsoft",
      relatedProjectdId: ["324dwas", "345terf", "re6tedg", "et54r4ef"],
      coast: 999999,
      numViews: 999,
      durationView: 99,
    },
    {
      id: "r5t46egtd",
      title: "My Project",
      subTitle: "My Project",
      image: "assets/images/microsoft.jfif",
      notUpdated: true,
      update: "2006-12-5",
      active: true,
      startDate: "2016-12-5",
      endDate: "2017-2-2",
      duration: 365,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      demoLink: "https://www.microsoft.com/",
      clientId: "asfdasdfdf22e",
      clientName: "Microsoft",
      relatedProjectdId: ["2342wrfwerf", "4werfsdf", "45wefsfs", "453werrfwe"],
      coast: 999999,
      numViews: 999,
      durationView: 99,
    },
  ]
  isDisabled: boolean = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem("updateClient")!) != null) {
      this.DFC = JSON.parse(localStorage.getItem("updateClient")!);
      this.DFC.accountsName.split(",").forEach((accountsName:any,index:number) => {
        this.accounts.push({title:accountsName,link:this.DFC.accountsLink.split(",")[index]});
      });
      console.log(this.DFC.hisProjectsId.split(","));
      // console.log(this.projDrop);
      setTimeout(() => {
        this.formClient.get("hisProjectsId")?.setValue(this.DFC.hisProjectsId.split(","));
        this.imageCardDrop.nativeElement.classList.add("act");
        this.card_image.nativeElement.src = this.DFC.imageIdCard;
        this.logoDrop.nativeElement.classList.add("act");
        this.logo_image.nativeElement.src = this.DFC.logo;
        this.hisImageDrop.nativeElement.classList.add("act");
        this.his_image.nativeElement.src = this.DFC.image;
      }, 1000);
    }
    console.log(this.DFC);
    this.creatForm();
  }

  creatForm() {
    this.formClient = this.fb.group({
      id: [this.DFC?.id || 'dfdf53453'],
      name: [this.DFC?.name || '', Validators.required],
      image: [this.DFC?.image || ''],
      whoClient: [this.DFC?.whoClient || '', Validators.required],
      duartionWorked: [this.DFC?.duartionWorked || '', Validators.required],
      /**/dateStartWork: [this.DFC ? new Date(this.DFC?.dateStartWork.split("-").reverse().join("/")) : '', Validators.required],
      /**/dateLastWork: [this.DFC ? new Date(this.DFC?.dateLastWork.split("-").reverse().join("/")) : '', Validators.required],
      totalCoast: [this.DFC?.totalCoast || '', Validators.required],
      description: [this.DFC?.description || '', Validators.required],
      imageIdCard: [this.DFC?.imageIdCard || ''],
      /**/accountsName: [this.DFC?.accountsName || ''],
      /**/accountsLink: [this.DFC?.accountsLink || ''],
      bankAccountNum: [this.DFC?.bankAccountNum || ''],
      hisProjectsId: [this.DFC?.hisProjectsId || '', Validators.required],
      projectsNum: [this.DFC?.projectsNum || '', Validators.required],
      gender: [this.DFC?.gender || ''],
      age: [this.DFC?.age || ''],
      logo: [this.DFC?.logo || ''],
      nationality: [this.DFC?.nationality || ''],
      howIKnow: [this.DFC?.howIKnow || '', Validators.required],
    });
  }

  selectImage(event: any, value: string) {
    if (value == "imageIdCard") {
      console.log(this.imageCardDrop);
      let reader: any = new FileReader();
      reader.addEventListener("load", () => {
        this.imageCardDrop.nativeElement.classList.add("act");
        this.formClient.get(value)?.setValue(reader.result);
        this.card_image.nativeElement.src = reader.result;
      });
      reader.readAsDataURL(event.target.files[0]);
    } else if (value == "logo") {
      console.log(this.logoDrop);
      let reader: any = new FileReader();
      reader.addEventListener("load", () => {
        this.logoDrop.nativeElement.classList.add("act");
        this.formClient.get(value)?.setValue(reader.result);
        this.logo_image.nativeElement.src = reader.result;
      });
      reader.readAsDataURL(event.target.files[0]);
    } else if (value == "image") {
      console.log(this.hisImageDrop);
      let reader: any = new FileReader();
      reader.addEventListener("load", () => {
        this.hisImageDrop.nativeElement.classList.add("act");
        this.formClient.get(value)?.setValue(reader.result);
        this.his_image.nativeElement.src = reader.result;
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  upload() {
    console.log(this.formClient.value);
    let dateStartWork: any = moment(this.formClient.value["dateStartWork"]).format("DD-MM-YYYY");
    let dateLastWork: any = moment(this.formClient.value["dateLastWork"]).format("DD-MM-YYYY");
    let accountsName: string[] = this.accounts.map(account => account.title);
    let accountsLink: string[] = this.accounts.map(account => account.link);
    let formData = new FormData();
    let data: any = {};
    console.log(formData);
    Object.entries(this.formClient.value).forEach(([key, value]: any) => {
      if (key == "dateStartWork") {
        formData.append(key, dateStartWork);
      } else if (key == "dateLastWork") {
        formData.append(key, dateLastWork);
      } else if (key == "accountsName") {
        formData.append(key, accountsName.toString());
      } else if (key == "accountsLink") {
        formData.append(key, accountsLink.toString());
      } else {
        formData.append(key, value);
      }
    });
    formData.forEach((value, key) => { data[key] = value });
    console.log(data);
  }

  addAccount(event: any) {
    this.accounts.push({
      title: this.inpAccount.nativeElement.value,
      link: this.inpLinkAccount.nativeElement.value
    });
    this.inpAccount.nativeElement.value = "";
    this.inpLinkAccount.nativeElement.value = "";
  }

  removeAccount(index: number) {
    this.accounts.splice(index, 1);
  }

  calcProjects() {
    let projectsId: string[] = this.formClient.get("hisProjectsId")?.value;
    if (projectsId.length > 0) {
      let projectsChoose: any[] = [];
      this.projects.forEach((proj: any) => { if (projectsId.includes(proj.id)) projectsChoose.push(proj) });
      console.log(projectsChoose);
      console.log(projectsId);
      // =======================================
      let totalCoast: number = 0;
      projectsChoose.forEach((proj: any) => totalCoast += proj.coast);
      console.log(totalCoast);
      this.formClient.get("totalCoast")?.setValue(totalCoast);
      // =======================================
      this.formClient.get("projectsNum")?.setValue(projectsId.length);
      // =========================
      let projectsStartTime: any[] = [];
      projectsChoose.forEach((proj: any) => projectsStartTime.push(new Date(proj.startDate).getTime()));
      projectsStartTime.sort();
      console.log(projectsStartTime);
      this.formClient.get("dateStartWork")?.setValue(new Date(projectsStartTime[0]));
      // =========================
      let projectsEndTime: any[] = [];
      projectsChoose.forEach((proj: any) => projectsEndTime.push(new Date(proj.endDate).getTime()));
      projectsEndTime.sort().reverse();
      console.log(projectsEndTime);
      this.formClient.get("dateLastWork")?.setValue(new Date(projectsEndTime[0]));
      // =========================
      let duartionWorked: number = 0;
      projectsChoose.forEach((proj: any) => duartionWorked += proj.duration);
      console.log(duartionWorked);
      this.formClient.get("duartionWorked")?.setValue(duartionWorked);
    } else {
      this.formClient.get("totalCoast")?.setValue(undefined);

      this.formClient.get("projectsNum")?.setValue(undefined);

      this.formClient.get("dateStartWork")?.setValue(undefined);

      this.formClient.get("dateLastWork")?.setValue(undefined);

      this.formClient.get("duartionWorked")?.setValue(undefined);

    }
  }
}
