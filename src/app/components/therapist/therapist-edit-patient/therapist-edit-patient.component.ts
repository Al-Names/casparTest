import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { TherapistPatient } from '../../therapist/therapist-patient';

@Component({
  selector: 'app-therapist-edit-patient',
  templateUrl: './therapist-edit-patient.component.html',
  styleUrls: ['./therapist-edit-patient.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TherapistEditPatientComponent implements OnInit {

  @Input() patient: TherapistPatient;
  @Output() updatePatientEvent = new EventEmitter();
  patientEdit: TherapistPatient = new TherapistPatient();
  
  constructor() { }

  ngOnInit() {
    Object.assign(this.patientEdit, this.patient);
    
  }
  
  update(){
    this.patientEdit.editable = false;
    this.updatePatientEvent.emit({original: this.patient, edited:this.patientEdit});
  }
}
