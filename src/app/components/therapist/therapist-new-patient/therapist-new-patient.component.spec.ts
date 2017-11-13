import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistNewPatientComponent } from './therapist-new-patient.component';

describe('TherapistNewPatientComponent', () => {
  let component: TherapistNewPatientComponent;
  let fixture: ComponentFixture<TherapistNewPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistNewPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistNewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
