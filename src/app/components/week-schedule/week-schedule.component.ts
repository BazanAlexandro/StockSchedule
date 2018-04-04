import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { ShipRecord } from '../../models/ship-record';
import { MatDialog } from '@angular/material/dialog';
import { RecordDialogComponent } from '../record-dialog/record-dialog.component';
import { CalendarSegment } from '../../models/calendar-segment';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-week-schedule',
  templateUrl: './week-schedule.component.html',
  styleUrls: ['./week-schedule.component.scss']
})
export class WeekScheduleComponent implements OnInit {
  constructor(public dialog: MatDialog,
    public store: StoreService) { }

  openDialog(date: Date, hour: number): void {
    const dialogRef = this.dialog.open(RecordDialogComponent, {
      width: '450px',
      data: {
        records: this.getShipRecsForSegment(date, hour),
        date,
        hour,
        disabled: this.isSegmentDisabled(date, hour)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.processModalResult(result);
      }
    });
  }

  processModalResult({
    records,
    date,
    hour,
    disabled
  }) {
    const segmentDate = moment(date).hour(hour).startOf('hour').toDate();

    this.shipRecords = this.shipRecords.filter(r => r.dispatchDate.getTime() !== segmentDate.getTime());

    if (disabled) {
      this.disabledSegments.push({
        day: date,
        hour
      });
    } else {
      this.disabledSegments = this.disabledSegments.filter(s => s.day.getTime() !== date.getTime() ||
        s.hour !== hour);

      this.shipRecords = [...this.shipRecords, ...records];
    }
  }

  get shipRecords(): ShipRecord[] {
    return this.store.shipRecords;
  }

  set shipRecords(value: ShipRecord[]) {
    console.log('setting ship records', value);
    this.store.shipRecords = value;
  }

  disabledSegments: CalendarSegment[] = this.getStubForDisabledSegments();

  getStubForDisabledSegments(): CalendarSegment[] {
    return [
      {
          day: moment().startOf('day').toDate(),
          hour: 16
      }];
  };

  isSegmentDisabled(day, hour): boolean {
    return this.disabledSegments.some(d => d.day.getTime() === day.getTime() &&
      d.hour === hour);
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
    this.openDialog(day, hour);
  }

  updateUI() {
    this.weekDays = this.getDaysForWeekNumber();
  }

  ngOnInit() {
    this.updateUI();
  }

}
