import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSectionComponent } from './reservation-section.component';

describe('ReservationSectionComponent', () => {
  let component: ReservationSectionComponent;
  let fixture: ComponentFixture<ReservationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
