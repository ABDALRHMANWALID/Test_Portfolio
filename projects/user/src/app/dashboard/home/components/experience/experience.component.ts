import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  myExperience: any[] = [
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
  constructor() { }

  ngOnInit(): void {
  }

}
