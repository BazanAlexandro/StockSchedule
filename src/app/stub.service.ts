import { Injectable } from "@angular/core";
import { ScheduleUnit } from "./models/schedule-unit";

@Injectable()
export class StubService {
    getUnits(): ScheduleUnit[] {
        return [
            {
                date: new Date(2018, 3, 3, 11),
                trucks: ['test1', 'test2', 'test3'],
                disabled: false
            },
            {
                date: new Date(2018, 3, 4, 16),
                trucks: ['test4'],
                disabled: false
            },
            {
                date: new Date(2018, 3, 4, 18),
                trucks: ['test5', 'test6', 'test7', 'test8'],
                disabled: false
            },
            {
                date: new Date(2018, 3, 5, 12),
                trucks: [],
                disabled: true
            }
        ]
    }
}