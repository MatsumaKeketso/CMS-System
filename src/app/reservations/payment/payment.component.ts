import { Component, OnInit } from '@angular/core';
import { ReservationsComponent } from '../reservations.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  reservation = ReservationsComponent;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(v) {
    console.log(v);
  }
}
