import { Component } from '@angular/core';

interface Event {
  title: string;
  date: string;
  completed: boolean;
}
@Component({
  selector: 'app-event-reminder',
  templateUrl: './event-reminder.component.html',
  styleUrl: './event-reminder.component.css'
})
export class EventReminderComponent {
  events: Event[] = [
    { title: 'Doctor Appointment', date: 'On Today', completed: false },
    { title: 'Annual Conference', date: 'On 16th June', completed: false },
    { title: 'Financial Meeting', date: 'On 17th June', completed: false },
    { title: 'Client MeetUp', date: 'On 20th June', completed: false }
  ];

  toggleCompletion(event: Event) {
    event.completed = !event.completed;
  }
}
