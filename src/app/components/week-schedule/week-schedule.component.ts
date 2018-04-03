import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-week-schedule',
  templateUrl: './week-schedule.component.html',
  styleUrls: ['./week-schedule.component.scss']
})
export class WeekScheduleComponent implements OnInit {
  constructor() { }

  week = 12;
  year = 2018;

  weekDays = this.getDaysForWeekNumber();

  hourSegmentData = {
    start: 8,
    end: 20
  }

  hourSegments = this.getSegments();

  getDaysForWeekNumber() {
    return moment.weekdays()
      .map(d => {
        return moment().day(d)
            .year(this.year)
            .week(this.week).toDate();
      });
  }

  getSegments() {
    const res = [];
    const { start, end } = this.hourSegmentData;

    for (let i = start; i <= end; i++ ) {
      res.push(i);
    }

    return res;
  }

  ngOnInit() {
  }

}
