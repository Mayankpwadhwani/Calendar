import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventComponent } from './event/event.component';
import { DialogRef } from '@angular/cdk/dialog';

import {
  CalendarEvent,
 CalendarView,
} from 'angular-calendar';
import { addDays, addWeeks, addMonths, subDays, subWeeks,subMonths } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog){

  }
  events: CalendarEvent[] = [];
  title = 'Calendar';
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  
  // onDate(day :any){
  //   const dialogRef=this.dialog.open(EventComponent,{data:day:Date})
  // }

  opendialog(){
    this.dialog.open(EventComponent)
  }
  
   addPeriod(): Date {
   switch (this.view) {
     case 'month': return addMonths(this.viewDate, 1);
     case 'week': return addWeeks(this.viewDate, 1);
     case 'day': return addDays(this.viewDate, 1);
     default: return this.viewDate
   }
 }
 subPeriod():Date{
  switch(this.view){
    case 'month':return subMonths(this.viewDate,1)
    case 'week' : return subWeeks(this.viewDate,1)
    case 'day': return subDays(this.viewDate,1)
    default :return this.viewDate
  }
 }
}
