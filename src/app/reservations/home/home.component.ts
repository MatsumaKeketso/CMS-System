import { Component, OnInit } from '@angular/core';
import {reservations} from '../model/model';
import {PersonsService} from '../../service/persons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  singleB: Array<reservations>;
  show1 = true;
  show2 = false;
  show3 = false;
  show4 = false;
  constructor( private person: PersonsService) { }

  ngOnInit() {
  }
  setSingle() {
    const roomType = 'Single';
    const price = 798;
    const maxPeople = 2;
  }
}
