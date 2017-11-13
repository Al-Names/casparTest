import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TherapistService } from '../../components/therapist/therapist.service'
import { DataService } from '../../services/data.service';
import { TherapistPatient } from '../therapist/therapist-patient';


@Component({
  selector: 'app-therapist',
  templateUrl: './therapist.component.html',
  styleUrls: ['./therapist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TherapistComponent implements OnInit {
  title:string;
  name:string;
  clinic:string;
  email:string;
  address:Address;
  isEdit:boolean = false;
  patients: Array<TherapistPatient>= [];
    
  constructor(private dataService:DataService, private therapistService:TherapistService ) {
    console.log('constructors ran..');
  
}
  ngOnInit() {
        console.log('ngOnInit ran...');
    this.title= "Dr.";
    this.name = 'John Doe';
    this.clinic= "Cedar Crest Hospital";
    this.email = 'test@test.com';
    this.address = {
      street:'50 Main st',
      city: 'Boston',
      state:'MA'
  }

}
create(patient: TherapistPatient){
    this.patients.push(patient);
  }
  
  destroy(patient: TherapistPatient){
    const i = this.patients.indexOf(patient);
    this.patients.splice(i, 1);
  }
  
  update(patients: any){
    console.log (patients);
    const i = this.patients.indexOf(patients.original);
    this.patients[i] = patients.edited;
  }
   getTherapistPatients(){

  }

}


interface Address{
  street:string,
  city:string,
  state:string
}