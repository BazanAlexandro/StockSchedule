import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShipRecord } from '../../models/ship-record';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

import * as moment from 'moment';
import { ScheduleUnit } from '../../models/schedule-unit';

@Component({
  selector: 'app-record-dialog',
  templateUrl: './record-dialog.component.html',
  styleUrls: ['./record-dialog.component.scss']
})
export class RecordDialogComponent implements OnInit {
  private MAX_TRUCK_NUM = 4;

  constructor(private dialogRef: MatDialogRef<RecordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private fb: FormBuilder) { 
      this.createForm();
    }

  unit: ScheduleUnit = this.data.unit;

  form: FormGroup;

  createForm() {
    const trucks = this.unit.trucks;
    const truckGroups = trucks.map(r => this.groupForTruck(r));

    this.form = this.fb.group({
      trucks: this.fb.array(truckGroups),
      disabled: this.data.disabled
    });
  }

  get trucks(): FormArray {
    return this.form.get('trucks') as FormArray;
  }

  get disabled(): FormControl {
    return this.form.get('disabled') as FormControl;
  }

  groupForTruck(truckNumber: string) {
    return this.fb.group({
      number: [truckNumber, Validators.required]
    })
  }

  addTruck(truckNumber: string) {
    const newGroup = this.groupForTruck(truckNumber);

    this.trucks.push(newGroup);
  }

  removeTruck(i) {
    this.trucks.removeAt(i);
  }

  get showAddTruckBtn() {
    return this.trucks.length < this.MAX_TRUCK_NUM;
  }

  mapFormToUnit(form: FormGroup): ScheduleUnit {
    const formValue = this.form.value;

    return {
      date: this.unit.date,
      disabled: formValue.disabled,
      trucks: formValue.trucks.map(t => t.number)
    }
  }

  submit() {
    if (this.form.valid) {
      const unitToReturn = this.mapFormToUnit(this.form);

      this.dialogRef.close(unitToReturn);
    } else {
      this.trucks.controls.forEach(c => c.markAsDirty());
    }
  }

  close() {
      this.dialogRef.close();
  }

  ngOnInit() {
  }

}
