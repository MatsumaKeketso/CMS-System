import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedRoomComponent } from './reserved-room.component';

describe('ReservedRoomComponent', () => {
  let component: ReservedRoomComponent;
  let fixture: ComponentFixture<ReservedRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservedRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
