import {Injectable, OnInit} from '@angular/core';
// we import our model into this service so we can assign data into it

@Injectable({
  providedIn: 'root'
})
// this is a class that contains the database for the people who made reservations
export class PersonsService implements OnInit {
  // the data passed into the person property is determined by the reservations array of datatypes assigned to it
  // they must match in number and type
  room = [];
  constructor() {}
  // this returns the array of people who made reservations, we call this class to show our data from the person array
  // this method will return our array data
  ngOnInit() {}
  storeRoom(val) {
    if (val !== null) {
      this.room.push(val);
    } else {
      this.room = [];
    }
  }
  getRoom() {
    return this.room;
  }
}
