import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersServicesComponent } from './offers-services.component';

describe('OffersServicesComponent', () => {
  let component: OffersServicesComponent;
  let fixture: ComponentFixture<OffersServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
