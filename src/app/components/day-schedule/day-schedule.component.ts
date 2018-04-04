import { Component, OnInit, Input } from '@angular/core';
import { ShipRecord } from '../../models/ship-record';
import { CalendarSegment } from '../../models/calendar-segment';
import { StoreService } from '../../store.service';
import * as moment from 'moment';
import { ScheduleUnit } from '../../models/schedule-unit';
import { UtilsService } from '../../utils.service';

@Component({
  selector: 'app-day-schedule',
  templateUrl: './day-schedule.component.html',
  styleUrls: ['./day-schedule.component.scss']
})
export class DayScheduleComponent implements OnInit {
  selectedDate: Date;
  units: ScheduleUnit[] = this.store.scheduleUnits;

  selectedUnits: ScheduleUnit[] = [];

  constructor(public store: StoreService,
    public utils: UtilsService) { }

  changeDate(date: Date) {
    this.selectedDate = this.utils.getDayFrom(date);
    this.selectedUnits = this.getSelectedUnits();
  }

  getSelectedUnits() {
    return this.units.filter(u => {
      const unitDay = moment(u.date).startOf('day').toDate();

      const areDaysEqual = this.utils.areDatesEqual(unitDay, this.selectedDate);

      return areDaysEqual;
    });
  }

  ngOnInit() {
    this.changeDate(new Date());
  }

}
