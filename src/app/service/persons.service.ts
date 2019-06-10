import {Injectable, OnInit} from '@angular/core';
// we import our model into this service so we can assign data into it
import { reservations } from '../reservations/model/model';

@Injectable({
  providedIn: 'root'
})
// this is a class that contains the database for the people who made reservations
export class PersonsService implements OnInit {
  // the data passed into the person property is determined by the reservations array of datatypes assigned to it
  // they must match in number and type
  person: Array < reservations > = [{
    id: 1,
    name: 'Keketso',
    lastname: 'Matsuma',
    email: 'keketso@mail.com',
    phone: 846358176,
    room: '../../assets/assets/bedrooms/bnago-guestroom-0099-hor-clsc.jpg',
    // =======================
    category: 'Twin',
    checkin: '2019-05-15',
    checkout: '2019-06-20',

    // =======================
    cost: 399 *4 *2,
    expiary: 7895478,
    cardnumber: 787999977798,
    cardholder: 'Keketso Matsuma',
    days: 4,
    people: 2,
    payment: 'Verified'
  }];

  constructor() {}
  // this returns the array of people who made reservations, we call this class to show our data from the person array
  // this method will return our array data
  ngOnInit() {}
  getReservations(): Array < reservations > {
    return this.person;
  }


  // DELETING AN ARRAY
  delete(id: any): any {
    this.person.map((person, index) => {
      if (person.id == id) {
        // in the persons array, at the 'index' index, delete only once
        this.person.splice(index, 1);
      }
    });
  }

  // RETREIVING THE DATA
  getPersonById(id: number) {
    let tempPerson: reservations;
    // filter returns the array of the condition
    // filter return the array if it matches the id
    // the array is assigned to tempPerson
    this.person.filter(person => {
      if (person.id == id) {
        console.log(id);
        tempPerson = person;
      }
    });
    return tempPerson;
  }
  // calculating the cost before adding
  // filter, map, find, forEach
  // ADDING THE ARRAY
  addPerson(formArray: any) {
    // console.log(formArray);
    this.person.push(formArray[0]);
  }

  // updating the booking
  updatePerson(reservation: reservations) {
    // this returns the match of the id of the person in the html with the id of the person in the array for editting
    this.person.map((a, index) => {
      if (a.id === reservation.id) {
        a.name = reservation.name;
        a.lastname = reservation.lastname;
        a.email = reservation.email;
        a.phone = reservation.phone;
        a.category = reservation.category;
        a.checkin = reservation.checkin;
        a.days = reservation.days;
        a.people = reservation.people;
        if (a.category == 'Single') {
          reservation.cost = 399 * a.people * a.days;
        } else if (a.category == 'Double') {
          reservation.cost = 599 * a.people * a.days;
        } else if (a.category == 'Twin') {
          reservation.cost = 799 * a.people * a.days;
        } else if (a.category == 'Deluxe') {
          reservation.cost = 19999 * a.people * a.days;
        }
        a.cardnumber = reservation.cardnumber;
        a.cardholder = reservation.cardholder;
        a.expiary = reservation.expiary;

        if (!a.cardnumber) {
          reservation.payment = 'Unverified';
        } else {
          a.payment = reservation.payment;
        }
      }
    });
  }
}
