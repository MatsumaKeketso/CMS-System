import { Component, OnInit } from '@angular/core';
import {reservations} from '../model/model';
import {PersonsService} from '../../service/persons.service';
import * as firebase from 'firebase';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modal = true;
  db = firebase.firestore();
  response = {
    text: '',
    reviewer: false
  };
  review = {
    room: '',
    person: '',
    message: '',
    reviewer: true,
    date: ''
  };
  noofReviews = 0;
  userreviews = [
  ];
  reviews = [ ];
  loggedin;
  hotel ={};
  constructor( private person: PersonsService, public router: Router) { }

  ngOnInit() {
    this.db.collection('hotels').doc('Sunny Hill Hotel').get().then(res => {
      this.hotel = res.data();
      console.log(res.data());
    });
    this.getHotels();
    this.getReviews();
  }
  getHotels() {
    this.db.collection('hotels').doc('Reef Hotel').collection('room').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.reviews.push(doc.data());
      });
    });
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      this.db.collection('users').where('uid', '==', user.uid).get().then(res => {
        console.log(res);

        res.forEach(doc => {
          this.loggedin = doc.data();
          console.log(this.loggedin);
        });
      });
    });
  }
  addResponse() {
    const date = new Date();
    this.review.date = date.toDateString();
    this.db.collection('reviews')
    .add(this.review)
    .then(res => {
      alert('Review Sent');
      this.review = {
        room: '',
        person: '',
        message: '',
        reviewer: true,
        date: ''
      };
      this.userreviews = [];
      this.getReviews();
    })
    .catch(err => {
      alert('Review not submitted');
    });
  }
  getReviews() {
    this.db.collection('reviews').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.userreviews.push(doc.data());
      });
      console.log(this.userreviews);
      this.noofReviews = this.userreviews.length;
    });
  }
  viewRoom(value) {
    this.person.storeRoom(value);
    this.router.navigate(['/update'], value);
  }
  logout() {
    firebase.auth().signOut().then(() => {
        this.router.navigate(['login']);
    }).catch( () => {
      alert('Couldnt Log you out.');
    });
  }
}
