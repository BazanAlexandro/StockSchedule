import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CalendarModule } from 'angular-calendar';

import { AppComponent } from './app.component';
import { DayScheduleComponent } from './components/day-schedule/day-schedule.component';
import { WeekScheduleComponent } from './components/week-schedule/week-schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    DayScheduleComponent,
    WeekScheduleComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
