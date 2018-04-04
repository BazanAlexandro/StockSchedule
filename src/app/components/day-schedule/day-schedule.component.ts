import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-schedule',
  templateUrl: './day-schedule.component.html',
  styleUrls: ['./day-schedule.component.scss']
})
export class DayScheduleComponent implements OnInit {

  selectedDate: Date;

  get records() {
    return [

    ];
  }

  constructor() { }

  ngOnInit() {
  }

}
