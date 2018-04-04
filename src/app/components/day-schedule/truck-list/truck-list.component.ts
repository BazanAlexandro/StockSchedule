import { Component, OnInit, Input } from '@angular/core';
import { ScheduleUnit } from '../../../models/schedule-unit';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss']
})
export class TruckListComponent implements OnInit {
  @Input() units: ScheduleUnit[] = [];

  constructor() { }

  ngOnInit() {
  }

}
