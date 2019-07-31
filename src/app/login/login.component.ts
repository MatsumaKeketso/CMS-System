import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router, RouterLink } from '@angular/router';
import { RouterInitializer } from '@angular/router/src/router_module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }
  db = firebase.firestore();
  constructor() { }

  ngOnInit() {
  }
  login(){
    firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(res => {
    location.pathname = 'home/';
    }).catch(err => {
      alert('Sorry couldnt log in.');
    });
  }
}
