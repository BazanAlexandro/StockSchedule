import { Injectable } from "@angular/core";

import * as moment from 'moment';
import { FormArray } from "@angular/forms";

@Injectable()
export class UtilsService {
    combine(day: Date, hour: number) {
        return moment(day).hour(hour)
            .startOf('hour').toDate();
    }

    areDatesEqual(date1: Date, date2: Date) {
        return date1.getTime() === date2.getTime();
    }

    getDayFrom(date: Date) {
        return moment(date).startOf('day').toDate();
    }

    clearFormArray(array: FormArray) {
        while (array.length) {
          array.removeAt(0);
        }
    }
}