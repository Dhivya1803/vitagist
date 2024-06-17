import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { HealthCardComponent } from './health-card/health-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CalendarComponent } from './calendar/calendar.component';
import { EventReminderComponent } from './event-reminder/event-reminder.component';
import { RequestComponent } from './request/request.component';
import { ExpiringDocComponent } from './expiring-doc/expiring-doc.component';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        HeaderComponent,
        HealthCardComponent,
        CalendarComponent,
        EventReminderComponent,
        RequestComponent,
        ExpiringDocComponent,
    ],
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch()),
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        HttpClientModule,
        FormsModule,
        MatMenuModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatCheckboxModule
    
    ]
})
export class AppModule { }
