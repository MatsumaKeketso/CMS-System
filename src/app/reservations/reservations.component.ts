import { Component, OnInit } from '@angular/core';
import {ReservationSectionComponent} from './reservation-section/reservation-section.component';
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})

export class ReservationsComponent implements OnInit {
  isUpdate = false;
  isReserved = false;
  isMessage = false;
  isRSection = true;


  public isPayment = false;
  constructor() { }

  ngOnInit() {}

  toggleUpdate() {
    this.isUpdate = true;
    this.isReserved = false;
    this.isMessage = false;
    this.isRSection = false;
    this.isPayment = false;
  }
  toggleReserved() {
    this.isReserved = true;
    this.isUpdate = false;
    this.isMessage = false;
    this.isRSection = false;
    this.isPayment = false;
  }
  toggleMessage() {
    this.isMessage = true;
    this.isUpdate = false;
    this.isReserved = false;
    this.isRSection = false;
    this.isPayment = false;
  }
  toggleRSection() {
    this.isRSection = true;
    this.isMessage = false;
    this.isUpdate = false;
    this.isReserved = false;
    this.isPayment = false;
  }
  togglePayment() {
    this.isPayment = true;
    this.isRSection = false;
    this.isMessage = false;
    this.isUpdate = false;
    this.isReserved = false;
  }
  onSubmit(v) {
    console.log(v);
  }
}
