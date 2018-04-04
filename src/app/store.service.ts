import { Injectable } from "@angular/core";
import { ShipRecord } from "./models/ship-record";
import { CalendarSegment } from "./models/calendar-segment";
import * as moment from 'moment';
import { ScheduleUnit } from "./models/schedule-unit";
import { StubService } from "./stub.service";

@Injectable()
export class StoreService {
    scheduleUnits: ScheduleUnit[] = this.stub.getUnits();

    constructor(public stub: StubService) {}
}