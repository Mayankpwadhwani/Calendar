import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
   styleUrls: ['./event.component.css']
  
})

export class EventComponent {
  title: string = '';
  start: Date = new Date();
  end: Date = new Date();
  constructor(
    public dialogRef: MatDialogRef<EventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data?.date) {
      this.start = new Date(data.date);
      this.end = new Date(data.date);
    }
  }
   
   save() {
    this.dialogRef.close({ title: this.title, start: this.start, end: this.end });
    console.log(this.title)
    console.log(this.start)
    console.log(this.end)
  }
  close() {
    this.dialogRef.close();
  }
}

