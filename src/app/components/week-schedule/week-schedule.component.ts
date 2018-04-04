import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { ShipRecord } from '../../models/ship-record';
import { MatDialog } from '@angular/material/dialog';
import { RecordDialogComponent } from '../record-dialog/record-dialog.component';
import { CalendarSegment } from '../../models/calendar-segment';
import { StoreService } from '../../store.service';
import { ScheduleUnit } from '../../models/schedule-unit';
import { UtilsService } from '../../utils.service';
import { StubService } from '../../stub.service';

@Component({
  selector: 'app-week-schedule',
  templateUrl: './week-schedule.component.html',
  styleUrls: ['./week-schedule.component.scss']
})
export class WeekScheduleComponent implements OnInit {
  week = moment().week();

  units: ScheduleUnit[] = this.stub.getUnits();
  calendarCells: ScheduleUnit[][];

  weekDays = [];
  
  hourSegmentData = {
    start: 8,
    end: 20
  }

  hourSegments = this.getSegments();
  
  constructor(public store: StoreService,
    public utils: UtilsService,
    public stub: StubService,
    public dialog: MatDialog) { }

  get middleDate(): Date {
    if (this.weekDays) {
      return this.weekDays[3];
    }
  }
  
  openDialog(unit): void {
    const dialogRef = this.dialog.open(RecordDialogComponent, {
      width: '450px',
      data: {
        unit
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.processModalResult(result);
      }
    });
  }

  processModalResult(unit: ScheduleUnit) {
      const others = this.units
        .filter(u => !this.utils.areDatesEqual(u.date, unit.date));

      this.units = [...others, unit];
      this.updateUI();
  }

  getDaysForWeekNumber() {
    return moment.weekdays()
      .map(d => {
        return moment().day(d)
            .week(this.week).startOf('day')
            .toDate();
      });
  }

  unitFor(day: Date, hour: number): ScheduleUnit {
    const checkedDate = this.utils.combine(day, hour);

    return this.units.find(u =>
        this.utils.areDatesEqual(u.date, checkedDate)) || 
        new ScheduleUnit(checkedDate);
  }

  unitsForDay(day: Date): ScheduleUnit[] {
    return this.hourSegments.map(h => this.unitFor(day, h));
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

  handleUnitClick(unit: ScheduleUnit) {
    this.openDialog(unit);
  }

  updateUI() {
    this.weekDays = this.getDaysForWeekNumber();
    this.calendarCells = this.weekDays
      .map(w => this.unitsForDay(w));
  }

  ngOnInit() {
    this.updateUI();
  }

}
