import { Component, OnInit } from '@angular/core';
import {reservations } from '../model/model';
import { PersonsService } from '../../service/persons.service';
@Component({
  selector: 'app-reserved-room',
  templateUrl: './reserved-room.component.html',
  styleUrls: ['./reserved-room.component.scss']
})
export class ReservedRoomComponent implements OnInit {
  // this sets an array of datatypes to out reservationList property
  reservationList: Array<reservations>;
  // a private variable inside a constructor needs to be created for the service module
  // it can be any name but must be assigned the class to the target module
  constructor(private reservationService: PersonsService) { }

  ngOnInit() {
    this.getReservations();
  }
  // this gets the data from the services
  getReservations() {
    // we assign the model's datatypes with the data in the service this way
    // that is the function that returns our reservations data from the service, it displays the information
    this.reservationList = this.reservationService.getReservations();
  }
  onDelete(id){
    this.reservationService.delete(id);
  }
}
