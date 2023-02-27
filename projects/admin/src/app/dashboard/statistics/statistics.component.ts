import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  // @ViewChild('acquisitions') acquisitions!: ElementRef;
  statistics: any[] = [
    {
      id: "fdgdfgdfg",
      title: "Number of Views Website",
      num: 999,
      xValues: {
        title: "Views",
        nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      }, yValues: {
        title: "Time",
        nums: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
      }
    },
    {
      id: "fdgdfgdfg",
      title: "Number of Views Website",
      num: 999,
      xValues: {
        title: "Views",
        nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      }, yValues: {
        title: "Time",
        nums: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
      }
    },
    {
      id: "fdgdfgdfg",
      title: "Number of Views Website",
      num: 999,
      xValues: {
        title: "Views",
        nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      }, yValues: {
        title: "Time",
        nums: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
      }
    },
    {
      id: "fdgdfgdfg",
      title: "Number of Views Website",
      num: 999,
      xValues: {
        title: "Views",
        nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      }, yValues: {
        title: "Time",
        nums: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
      }
    },
    {
      id: "fdgdfgdfg",
      title: "Number of Views Website",
      num: 999,
      xValues: {
        title: "Views",
        nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      }, yValues: {
        title: "Time",
        nums: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
      }
    },
    {
      id: "fdgdfgdfg",
      title: "Number of Views Website",
      num: 999,
      xValues: {
        title: "Views",
        nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      }, yValues: {
        title: "Time",
        nums: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
      }
    },
    {
      id: "fdgdfgdfg",
      title: "Number of Views Website",
      num: 999,
      xValues: {
        title: "Views",
        nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      }, yValues: {
        title: "Time",
        nums: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
      }
    },
  ];
  constructor() { }

  ngOnInit(): void {
    // console.log(this.acquisitions.nativeElement);
    // var xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    // var yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

    // new Chart("myChart", {
    //   type: "line",
    //   data: {
    //     labels: xValues,
    //     datasets: [{
    //       fill: false,
    //       lineTension: 0,
    //       backgroundColor: "rgba(0,0,255,1.0)",
    //       borderColor: "rgba(0,0,255,0.1)",
    //       data: yValues
    //     }]
    //   },
    //   options: {
    //     legend: { display: false },
    //     scales: {
    //       yAxes: [{ ticks: { min: 6, max: 16 } }],
    //     }
    //   }
    // });
    this.statistics.forEach((statis,i)=>{
      setTimeout(()=>{
      var xValues = statis.xValues.nums;
      var yValues = statis.yValues.nums;
      var barColors = "#00509D";
  
      new Chart(`myChart_${i}`, {
        type: "bar",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: statis.title,
          }
        }
      });
    },2000);
    });

  }
}
