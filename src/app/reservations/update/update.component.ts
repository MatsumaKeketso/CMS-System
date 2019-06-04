import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { PersonsService } from '../../service/persons.service';
import { reservations } from '../model/model';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  selectedID: number;
  reservations: reservations;
  constructor(
    private activateRouter: ActivatedRoute,
    private personsService: PersonsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(data => {
      this.selectedID = data.id;
    });
    this.getPersonById();

  }
  getPersonById() {
    this.reservations = this.personsService.getPersonById(this.selectedID);

  }
  onUpdate(v) {
    this.personsService.updatePerson(v);
    this.router.navigate(['/reservations']);
  }
}
