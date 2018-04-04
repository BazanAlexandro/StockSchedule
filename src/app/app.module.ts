import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'angular-calendar';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
import { DayScheduleComponent } from './components/day-schedule/day-schedule.component';
import { WeekScheduleComponent } from './components/week-schedule/week-schedule.component';
import { RecordDialogComponent } from './components/record-dialog/record-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { StoreService } from './store.service';
import { ViewModeToggleComponent } from './components/view-mode-toggle/view-mode-toggle.component';
import { UtilsService } from './utils.service';
import { StubService } from './stub.service';
import { WeekCellComponent } from './components/week-schedule/week-cell/week-cell.component';


@NgModule({
  declarations: [
    AppComponent,
    DayScheduleComponent,
    WeekScheduleComponent,
    RecordDialogComponent,
    ViewModeToggleComponent,
    WeekCellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot(),
    MatChipsModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatDividerModule,
    MatListModule,
    MatButtonToggleModule
  ],
  providers: [
    StoreService,
    UtilsService,
    StubService
  ],
  entryComponents: [RecordDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
