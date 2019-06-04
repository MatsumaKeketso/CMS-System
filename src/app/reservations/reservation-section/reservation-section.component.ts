import { Component, OnInit , Input, EventEmitter, Output } from '@angular/core';
import { PersonsService } from '../../service/persons.service';
import { reservations } from '../model/model';

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

      b.expiary = b.expiary;
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

      if (!b.cardnumber) {
        b.payment = 'Unverified';
      } else {
        b.payment = 'Verified';
      }
    });
    this.person.addPerson(formArray);
  }
}
