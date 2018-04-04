import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SchedulerMode } from '../../models/scheduler-mode';

@Component({
  selector: 'app-view-mode-toggle',
  templateUrl: './view-mode-toggle.component.html',
  styleUrls: ['./view-mode-toggle.component.scss']
})
export class ViewModeToggleComponent implements OnInit {
  @Input() mode: SchedulerMode;
  @Output() modeChange = new EventEmitter<SchedulerMode>();

  SchedulerMode = SchedulerMode;

  toggleSwitched(event) {
    this.modeChange.emit(event.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
