import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { PersonsService } from '../../service/persons.service';
import { reservations } from '../model/model';
import * as firebase from 'firebase';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  db = firebase.firestore();
  selectedID: number;
  rooms = [];
  user = {};
  doc = {};
  constructor(
    private activateRouter: ActivatedRoute,
    private personsService: PersonsService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  getuser() {

      }
  onClick() {
    this.personsService.storeRoom(null);
    this.router.navigate(['home']);
  }
}
