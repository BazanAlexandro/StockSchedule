import { Component } from '@angular/core';
import { SchedulerMode } from './models/scheduler-mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mode: SchedulerMode = SchedulerMode.Week;

  SchedulerMode = SchedulerMode;
}
