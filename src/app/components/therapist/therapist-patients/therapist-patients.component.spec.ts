import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistPatientsComponent } from './therapist-patients.component';

describe('TherapistPatientsComponent', () => {
  let component: TherapistPatientsComponent;
  let fixture: ComponentFixture<TherapistPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
