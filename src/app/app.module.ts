
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEnGb from '@angular/common/locales/en-GB';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { EventComponent } from './event/event.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

registerLocaleData(localeEnGb);



@NgModule({
 declarations: [AppComponent, EventComponent],
 imports: [
   BrowserModule,
   BrowserAnimationsModule,
   MatToolbarModule,
   MatButtonModule,MatInputModule,MatFormFieldModule,
   MatSelectModule,MatDatepickerModule,
   MatIconModule,MatDialogModule,MatNativeDateModule,FormsModule,
   CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
 ],
 providers: [ { provide: LOCALE_ID, useValue: 'en-GB' },],
 bootstrap: [AppComponent],
})
export class AppModule {}