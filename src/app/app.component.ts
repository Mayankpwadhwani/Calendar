import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventComponent } from './event/event.component';
import {
  CalendarEvent,
 CalendarView,
} from 'angular-calendar';
import {startOfDay,endOfDay, addDays, addWeeks,addMonths, subDays, subWeeks,subMonths,startOfWeek,endOfWeek,format } from 'date-fns';



interface MyCalendarEvent extends CalendarEvent {
  guest:number,
  title:string,
  start:Date,
  end:Date,
  location?: string;
  description?: string; 
  color: {
        primary: string;
        secondary: string;
      };
  
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog){
  }
  events: MyCalendarEvent[] = [{
      guest:150,
      title:'Birthday Party',
      start: new Date(2025,7,18),
      end:addDays(endOfDay(new Date(2025,7,18)),0),
      location:'Mumbai',
      description:'A big party with sport theme',
       color: {
          primary: '#ad2121', // Primary color (e.g., event background)
          secondary: '#000000ff' // Secondary color (e.g., event text)
        }
      

  },
{
      guest:200,
      title:'Marriage Reception',
      start: new Date(2025,7,15),
      end:addDays(endOfDay(new Date(2025,7,15)),0),
      location:'Mumbai',
      description:'Reception with Royal theme',
       color: {
          primary: '#ad2121', // Primary color (e.g., event background)
          secondary: '#ff0000ff' // Secondary color (e.g., event text)
        }
      
  }] ;
  displayedColumns: string[] = ['start Date', 'Title', 'location', 'description','Guest'];
  
  title = 'Calendar';
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  MonthEvents: any[]=[];
  list:boolean=false
  
  /*this function is used to open the dailog box and and pass the data 
    and after that on close subscribing to the result to save the event 
    on that specific day 
   */
  onDate(day :any){
    if(day.date.getDate() < new Date().getDate())
      return;
   const dialogRef = this.dialog.open(EventComponent, {
     data: { date: day.date }
   });
   dialogRef.afterClosed().subscribe(result => {
     if (result) {
       this.events = [
          ...this.events,
         {
           guest:result.guest,
           title: result.title,
           start: new Date(result.start),
           end: new Date(result.end),
           location: result.location,
           description:result.description,
           color:result.color

         }
       ];
     }
   });}
  

  /* this function is used to display the date accoring to the view 
     if the view is month then it will display the month and if it 
     switches to week it will show the range by using property of library.
  */
weekRange(): string {
 if (this.view === 'month') {
   return format(this.viewDate, 'MMMM yyyy');
 }
 else if (this.view === 'week') {
   const start = startOfWeek(this.viewDate, { weekStartsOn: 0});
   const end = endOfWeek(this.viewDate, { weekStartsOn: 0 });
   return `${format(start, 'MMM d')} - ${format(end, 'MMM d, yyyy')}`;
 }
 else {
   return format(this.viewDate, 'MMM d, yyyy');
 }
}
/*this function is used to move to next month,week or day 
  by using addMonths,weeks,day
 */
addPeriod(): Date {
   switch (this.view) {
     case 'month': return addMonths(this.viewDate, 1);
     case 'week': return addWeeks(this.viewDate, 1);
     case 'day': return addDays(this.viewDate, 1);
     default: return this.viewDate
   }
 }
 /*this function is used to move to previous month,week or day 
 using subMonths weeks etc
 */
 subPeriod():Date{
  switch(this.view){
    case 'month':return subMonths(this.viewDate,1)
    case 'week' : return subWeeks(this.viewDate,1)
    case 'day': return subDays(this.viewDate,1)
    default :return this.viewDate
  }
 }
/*
show event is used to show the events on list table
 */
ShowEvents(){
  this.MonthEvents =this.events
  this.list=true
}
}
