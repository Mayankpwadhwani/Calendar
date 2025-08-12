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
      this.start = new Date(data.date);
      this.end = new Date(data.date);
    }
  }
  /* this passes the current data on edit */
  ngOnInit() {
 if (this.data) {
   this.title = this.data.title || '';
   this.guest = this.data.guest || '';
   this.location = this.data.location || '';
   this.description = this.data.description || '';
 }
  }
  /* save is used in dailog box to save the event
   */
save() {
 const updatedEvent = {
   ...this.data, 
   title: this.title,
   guest: this.guest,
   location: this.location,
   description: this.description,
   start: this.start,
   end: this.end
 };
 this.dialogRef.close(updatedEvent); 
}

  /*similary as save close os used to close the dailog box
   */
  close() {
    this.dialogRef.close();
  }
}

