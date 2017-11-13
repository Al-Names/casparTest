import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { TherapistPatient } from '../../therapist/therapist-patient';

@Component({
  selector: 'app-therapist-new-patient',
  templateUrl: './therapist-new-patient.component.html',
  styleUrls: ['./therapist-new-patient.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TherapistNewPatientComponent implements OnInit {
  newPatient = new TherapistPatient(); 
  @Output() createNewPatientEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
   create(){
    // call server to save
    this.createNewPatientEvent.emit(this.newPatient);
    this.newPatient = new TherapistPatient();
  }

}
