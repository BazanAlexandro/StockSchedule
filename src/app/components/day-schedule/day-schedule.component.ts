import { Component, OnInit, Input } from '@angular/core';
import { ShipRecord } from '../../models/ship-record';
import { CalendarSegment } from '../../models/calendar-segment';

@Component({
  selector: 'app-day-schedule',
  templateUrl: './day-schedule.component.html',
  styleUrls: ['./day-schedule.component.scss']
})
export class DayScheduleComponent implements OnInit {
  @Input() shipRecords: ShipRecord[] = [];
  @Input() disabledSegments: CalendarSegment[] = [];

  selectedDate: Date;

  get records() {
    return [

    ];
  }

  constructor() { }

  ngOnInit() {
  }

}
