import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistEditPatientComponent } from './therapist-edit-patient.component';

describe('TherapistEditPatientComponent', () => {
  let component: TherapistEditPatientComponent;
  let fixture: ComponentFixture<TherapistEditPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistEditPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistEditPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
