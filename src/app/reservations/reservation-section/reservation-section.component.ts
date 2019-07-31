import { Component, OnInit , Input, EventEmitter, Output } from '@angular/core';
import { PersonsService } from '../../service/persons.service';
import { reservations } from '../model/model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-section',
  templateUrl: './reservation-section.component.html',
  styleUrls: ['./reservation-section.component.scss']
})
export class ReservationSectionComponent implements OnInit {
  constructor(private person: PersonsService) { }
  ngOnInit() { }
  onSubmit(formValues) {
    const formArray: Array<reservations> = [formValues];
    formArray.map((b) => {
      b.id = b.id;
      b.name = b.name;
      b.lastname = b.lastname;
      b.email = b.email;
      b.phone = b.phone;

      b.category = b.category;
      b.checkin = b.checkin;
      b.checkout = b.checkout;
      const start = new Date(b.checkin);
      const end = new Date(b.checkout);


      const days = 1000 * 60 * 60 * 24;
      const month = 1000 * 60;
      const diff = end.valueOf() - start.valueOf();
      b.days = Math.floor(diff / days);


      b.expiary = Math.floor(start.valueOf() + month * 5) ;
      b.cardnumber = b.cardnumber;
      b.cardholder = b.cardholder;
      b.days = b.days;
      b.people = b.people;

      if (b.category === 'Single') {
        b.cost = 399 * b.days * b.people;
      } else if (b.category === 'Double') {
        b.cost = 599 * b.days * b.people;
      } else if (b.category === 'Twin') {
        b.cost = 799 * b.days * b.people;
      } else if (b.category === 'Deluxe') {
        b.cost = 1999 * b.days * b.people;
      }

      if (b.category === 'Single') {
        b.room = '../../../assets/assets/bedrooms/Deluxe-Pool-Access-Hotel-SenseSeminyak.jpg';
      } else if (b.category === 'Double') {
        b.room = '../../../assets/assets/bedrooms/Queen-Room.jpg';
      } else if (b.category === 'Twin') {
        b.room = '../../../assets/assets/bedrooms/bnago-guestroom-0099-hor-clsc.jpg';
      } else if (b.category === 'Deluxe') {
        b.room = '../../../assets/assets/bedrooms/download.jpg';
      }

      if (!b.cardnumber) {
        b.payment = 'Unverified';
      } else {
        b.payment = 'Verified';
      }
    });
  }
}
