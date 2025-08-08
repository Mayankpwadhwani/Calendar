import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
   styleUrls: ['./event.component.css']
  
})

export class EventComponent {
  title: string = '';
  guest:number=0;
  start: Date = new Date();
  end: Date = new Date();
  location:string='';
  description:string='';
  constructor(
    public dialogRef: MatDialogRef<EventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data?.date) {
      this.guest = 0;
      this.start = new Date(data.date);
      this.end = new Date(data.date);
    }
  }

  /* save is used in dailog box to save the event
   */
save() {

    this.dialogRef.close({ title: this.title, start: this.start, end: this.end, guest:this.guest,location:this.location,description:this.description });
    console.log(this.guest)
  }

  /*similary as save close os used to close the dailog box
   */
  close() {
    this.dialogRef.close();
  }
}

