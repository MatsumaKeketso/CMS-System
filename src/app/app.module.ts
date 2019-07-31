import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservedRoomComponent } from './reservations/reserved-room/reserved-room.component';
import { ReservationSectionComponent } from './reservations/reservation-section/reservation-section.component';
import { MessageComponent } from './reservations/message/message.component';
import { UpdateComponent } from './reservations/update/update.component';
import { PaymentComponent } from './reservations/payment/payment.component';
import { HomeComponent } from './reservations/home/home.component';
import { SearchPersonPipe } from './pipe/search-person.pipe';
import { OffersServicesComponent } from './reservations/offers-services/offers-services.component';
import { FIREBASE_CONFIG } from '../app/app.firebase.config';
import * as firebase from 'firebase';
import { LoginComponent } from './login/login.component';

firebase.initializeApp(FIREBASE_CONFIG);
@NgModule({
  declarations: [
    AppComponent,
    ReservationsComponent,
    ReservedRoomComponent,
    ReservationSectionComponent,
    MessageComponent,
    UpdateComponent,
    PaymentComponent,
    HomeComponent,
    SearchPersonPipe,
    OffersServicesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
