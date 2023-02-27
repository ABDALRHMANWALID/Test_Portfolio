import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dashboardServices: DashboardService) { }

  ngOnInit(): void {
    this.headerStyle();
  }
  headerStyle() {
    this.dashboardServices.emitChange({ headerStyle: 0 });
  }
}
