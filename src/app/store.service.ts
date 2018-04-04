import { Injectable } from "@angular/core";
import { ShipRecord } from "./models/ship-record";
import { CalendarSegment } from "./models/calendar-segment";
import * as moment from 'moment';

@Injectable()
export class StoreService {
    shipRecords: ShipRecord[] = this.getStubForShipRecords();

    getStubForShipRecords(): ShipRecord[] {
        return [
        {
            truckNumber: 'AAOTEST',
            dispatchDate: moment('2018-04-04 11:00').toDate()
        }]
    }
}