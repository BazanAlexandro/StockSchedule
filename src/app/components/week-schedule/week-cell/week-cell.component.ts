import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ScheduleUnit } from '../../../models/schedule-unit';

@Component({
  selector: 'app-week-cell',
  templateUrl: './week-cell.component.html',
  styleUrls: ['./week-cell.component.scss']
})
export class WeekCellComponent implements OnInit {
  @HostBinding('style.backgroundColor') get background() {
    const grey = 'rgba(188, 188, 188, 0.5)';
    const green = 'rgba(193, 249, 144, 0.62)';
    const red = 'rgba(237, 139, 139, 0.5)';

    if (this.unit.disabled) {
      return grey;
    }

    const trucks = this.unit.trucks;

    if (trucks.length <= 3) {
      return green;
    }

    if (trucks.length === 4) {
      return red;
    }
  }

  @Input() unit: ScheduleUnit;

  constructor() { }

  ngOnInit() {
  }

}
