import { Component } from '@angular/core';
import { SchedulerMode } from './models/scheduler-mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  mode: SchedulerMode = SchedulerMode.Week;
  
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