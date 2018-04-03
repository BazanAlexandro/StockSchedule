import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'angular-calendar';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { DayScheduleComponent } from './components/day-schedule/day-schedule.component';
import { WeekScheduleComponent } from './components/week-schedule/week-schedule.component';
import { RecordDialogComponent } from './components/record-dialog/record-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DayScheduleComponent,
    WeekScheduleComponent,
    RecordDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot(),
    MatChipsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  entryComponents: [RecordDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
