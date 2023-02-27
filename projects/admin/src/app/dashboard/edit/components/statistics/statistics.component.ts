import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { DelDialogComponent } from 'projects/admin/src/app/shared/del-dialog/del-dialog.component';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  @ViewChild('statDrop') statDrop!: ElementRef;
  @ViewChild('icon_stat') icon_stat!: ElementRef;
  statistics: any[] = [
    { id: "sdf6565sdfe5", icon: "assets/images/wireframe.svg", name: "Projects", num: "99" },
    { id: "sdf6565sdfe5", icon: "assets/images/profile.svg", name: "Clients", num: "999" },
    { id: "sdf6565sdfe5", icon: "assets/images/news.svg", name: "Blogs", num: "9999" },
  ]
  DFS: any;
  formStats!: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.creatForm();
  }

  creatForm() {
    this.formStats = this.fb.group({
      id: [this.DFS?.id || 'dfdf53453'],
      name: [this.DFS?.name || '', Validators.required],
      num: [this.DFS?.num || '', Validators.required],
      icon: [this.DFS?.icon || '', Validators.required],
      });
  }

  deleteStat(numItem: number) {
    let dialogRef = this.dialog.open(DelDialogComponent, { data: { item: "Statistic", numItem: numItem } });
    dialogRef.afterClosed().subscribe((res: any) => {
      console.log(res);
    })
  }

  updateStat(i: number) {
    this.DFS = this.statistics[i];
    this.creatForm();
    this.statDrop.nativeElement.classList.add("act");
    this.icon_stat.nativeElement.src = this.statistics[i].icon;
  }

  selectIcon(event: any) {
    let reader: any = new FileReader();
    reader.addEventListener("load", () => {
      this.statDrop.nativeElement.classList.add("act");
      this.formStats.get("icon")?.setValue(reader.result);
      this.icon_stat.nativeElement.src = reader.result;
    });
    reader.readAsDataURL(event.target.files[0]);
  }
  upload() {
    console.log(this.formStats.value);
    this.statistics.push(this.formStats.value);
    this.creatForm();
    this.statDrop.nativeElement.classList.remove("act");
    this.icon_stat.nativeElement.src = "";
  }

}
