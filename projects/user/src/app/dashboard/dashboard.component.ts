import { Component, ElementRef, OnInit, ViewChild,OnChanges, SimpleChanges } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit , OnChanges{
  constructor(private services: DashboardService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.services.changeEmitted$.subscribe(res => {
      this.headerStyleObj = res;
      this.headerStyle();
    });
  }
  
  @ViewChild('header') header!: ElementRef;
  headerStyleObj: any;
  headerStyleAct!: boolean;
  headerStyle = () => {
    console.log(this.headerStyleObj.headerStyle);
    if (this.headerStyleObj.headerStyle == 1) {
      this.headerStyleAct = true;
      // this.header.nativeElement.classList.add("act");
      document.getElementById("header")?.classList.add("act","session_bg");
      console.log(true)
    }
    else if (this.headerStyleObj.headerStyle == 0) {
      document.getElementById("header")?.classList.remove("act","session_bg");
      let win = window.pageYOffset;
      window.addEventListener("scroll", () => {
        win = window.pageYOffset;
        console.log(win)
        // this.headerStyleAct = win > 750;
        if (win > 750) {
          // this.header.nativeElement.classList.add("act");
          document.getElementById("header")?.classList.add("act","session_bg");
          console.log(true)
        }
        else {
          // this.header.nativeElement.classList.remove("act");
          document.getElementById("header")?.classList.remove("act","session_bg");
          console.log(false)

        }
      });
    }
  }

  @ViewChild('menu') menu!: ElementRef;
  ngOnInit(): void {
    this.services.changeEmitted$.subscribe(res => {
      this.headerStyleObj = res;
      this.headerStyle();
    });
  }


  toggleMenu() {
    this.menu.nativeElement.classList.toggle("act");
  }

}
