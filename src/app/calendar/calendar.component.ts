import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],

})
export class CalendarComponent {
    currentMonthYear!: string;
    startAt = new Date();
    selectedDate: Date;
  

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.startAt = new Date();
    this.updateCurrentMonthYear();
    this.selectedDate = new Date();
    this.dateAdapter.setLocale('en-GB'); // Set locale to ensure proper date formatting
  }
  

  onDateSelected(date: Date) {
    this.selectedDate = date;
  }

  previousMonth() {
    this.startAt = this.dateAdapter.addCalendarMonths(this.startAt, -1);
  }

  nextMonth() {
    this.startAt = this.dateAdapter.addCalendarMonths(this.startAt, 1);
  }

   

    updateCurrentMonthYear() {
      const date = new Date();
      const options = { month: 'long', year: 'numeric' } as const;
      this.currentMonthYear = date.toLocaleDateString('en-US', options);
    }
  }

