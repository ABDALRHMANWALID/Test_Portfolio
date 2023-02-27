import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  myStatistics: any[] = [
    { id: "sdf6565sdfe5", icon: "assets/images/wireframe.svg", title: "Projects", num: "99" },
    { id: "sdf6565sdfe5", icon: "assets/images/profile.svg", title: "Clients", num: "999" },
    { id: "sdf6565sdfe5", icon: "assets/images/news.svg", title: "Blogs", num: "9999" },
  ]
  constructor() { }

  ngOnInit(): void {
    let statsSection: any = document.getElementById("home_statistics");
    let nums = document.querySelectorAll("#home_statistics .num");
    let started: boolean = false;
    window.onscroll = function () {
      // Stats Increase Number
      if (window.scrollY >= statsSection.offsetTop - 45) {
        if (!started) {
          nums.forEach((num) => startCount(num));
        }
        started = true;
      }
    };

    function startCount(el: any) {
      let goal = +el.dataset.goal;
      let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
          clearInterval(count);
        }
      }, 2000 / goal);
    }
  }

}

