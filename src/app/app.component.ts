import { Component } from '@angular/core';
import { SchedulerMode } from './models/scheduler-mode';
import { ShipRecord } from './models/ship-record';
import * as moment from 'moment';
import { CalendarSegment } from './models/calendar-segment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  mode: SchedulerMode = SchedulerMode.Week;

  SchedulerMode = SchedulerMode;

  get isWeekMode() {
    return this.mode === SchedulerMode.Week;
  }

  get isDayMode() {
    return this.mode === SchedulerMode.Day;
  }

  toggleMode() {
    this.mode = this.isWeekMode ? SchedulerMode.Day : SchedulerMode.Week;
  }
}
