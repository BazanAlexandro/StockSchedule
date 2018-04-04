export class ScheduleUnit {
    constructor(public date,
        public trucks: string[] = [],
        public disabled = false) {
    }

    // date: Date;
    // trucks: string[];
    // disabled?: boolean = false;
}
