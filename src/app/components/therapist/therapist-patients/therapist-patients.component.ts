import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { TherapistPatient } from '../../therapist/therapist-patient';

@Component({
  selector: 'app-therapist-patients',
  templateUrl: './therapist-patients.component.html',
  styleUrls: ['./therapist-patients.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TherapistPatientsComponent implements OnInit {

  @Input() patients;
  @Output() destroyPatientEvent = new EventEmitter();
  @Output() updatePatientEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  destroy(patient: TherapistPatient){
    this.destroyPatientEvent.emit(patient);
  }
  
  update(patients){
    this.updatePatientEvent.emit(patients);
  }
}
