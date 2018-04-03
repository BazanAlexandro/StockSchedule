import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ShipRecord } from '../../models/ship-record';

@Component({
  selector: 'app-week-schedule',
  templateUrl: './week-schedule.component.html',
  styleUrls: ['./week-schedule.component.scss']
})
export class WeekScheduleComponent implements OnInit {
  constructor() { }
  // setter, set week and year
  date: Date = new Date(Date.now());

  // HERE IS BUSINESS LOGIC

  shipRecords: ShipRecord[] = this.getStubForShipRecords();

  getStubForShipRecords(): ShipRecord[] {
    return [
      {
        truckNumber: 'AAOTEST',
        dispatchDate: moment('2018-04-04 11:00').toDate()
      }
    ]
  }

  getShipRecsForSegment(date: Date, hour: number): ShipRecord[] {
    return this.shipRecords.filter(r => {
      const shipDay = moment(r.dispatchDate).startOf('day').toDate();

      const shipHour = r.dispatchDate.getHours();

      return date.getTime() === shipDay.getTime() && hour == shipHour;
    });
  }

  // CARRY OUT IT!!!
  
  week = moment().week();
  year = moment().year();

  weekDays = [];

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
            .week(this.week).startOf('day')
            .toDate();
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

  nextWeek() {
    this.week++;
    this.updateUI();
  }

  prevWeek() {
    this.week--;
    this.updateUI();
  }

  handleSegmentClick(day: Date, hour: number) {
    console.log('clicked', day, hour);
  }

  updateUI() {
    this.weekDays = this.getDaysForWeekNumber();
  }

  ngOnInit() {
    this.updateUI();
  }

}
