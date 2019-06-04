import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// my custom components
import { ReservationsComponent } from './reservations/reservations.component';
import {PaymentComponent} from './reservations/payment/payment.component';
import { HomeComponent } from './reservations/home/home.component';
import {MessageComponent} from './reservations/message/message.component';
import {ReservedRoomComponent} from './reservations/reserved-room/reserved-room.component';
import {ReservationSectionComponent} from './reservations/reservation-section/reservation-section.component';
import {UpdateComponent} from './reservations/update/update.component';
import { OffersServicesComponent } from './reservations/offers-services/offers-services.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'message', component: MessageComponent},
  {path: 'reservedroom', component: ReservedRoomComponent},
  {path: 'reservationsection', component: ReservationSectionComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'offers-services', component: OffersServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
