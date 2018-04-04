import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShipRecord } from '../../models/ship-record';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

import * as moment from 'moment';

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

  records: ShipRecord[] = this.data.records;
  date: Date = this.data.date;
  hour: number = this.data.hour;

  form: FormGroup;

  createForm() {
    this.form = this.fb.group({
      recForms: this.fb
        .array(this.records
          .map(r => this.getRecForForm(r))),
        disabled: this.data.disabled
    });
  }

  get recForms(): FormArray {
    return this.form.get('recForms') as FormArray;
  }

  get disabled(): FormControl {
    return this.form.get('disabled') as FormControl;
  }

  getRecForForm(rec: ShipRecord) {
    return this.fb.group({
      truckNumber: [rec.truckNumber, Validators.required],
      dispatchDate: rec.dispatchDate
    })
  }

  addTruck(truckNumber: string) {
    const newTruckRec: ShipRecord = {
      truckNumber,
      dispatchDate: moment(this.date).hour(this.hour).startOf('hour').toDate()
    };

    this.recForms.push(this.getRecForForm(newTruckRec));
  }

  removeTruck(i) {
    this.recForms.removeAt(i);
  }

  get showAddTruckBtn() {
    return this.recForms.length < this.MAX_TRUCK_NUM;
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.value;

      const objToReturn = {
        records: value.recForms,
        date: this.date,
        hour: this.hour,
        disabled: value.disabled
      };

      this.dialogRef.close(objToReturn);
    } else {
      this.recForms.controls.forEach(c => c.markAsDirty());
    }
  }

  close() {
      this.dialogRef.close();
  }

  ngOnInit() {
  }

}
