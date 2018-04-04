import { Component, OnInit, Input } from '@angular/core';
import { ShipRecord } from '../../models/ship-record';
import { CalendarSegment } from '../../models/calendar-segment';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-day-schedule',
  templateUrl: './day-schedule.component.html',
  styleUrls: ['./day-schedule.component.scss']
})
export class DayScheduleComponent implements OnInit {
  selectedDate: Date;

  get records() {
    console.log('recs', this.store.shipRecords);
    return this.store.shipRecords;
  }

  constructor(public store: StoreService) { }

  ngOnInit() {
  }

}
