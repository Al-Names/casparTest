import { Http } from '@angular/http';
import { TherapistPatient } from '../therapist/therapist-patient';
import { Injectable } from '@angular/core';
import'rxjs';
import { Observable} from 'rxjs';

@Injectable()
export class TherapistService {

    constructor(private _http: Http) { }

    create(patient: TherapistPatient){
       return this._http.post("/therapist", patient)
        .map(data => data.json()).toPromise() 
    }
    
    destroy(patient: TherapistPatient){
        return this._http.delete("/therapist/"+patient.name)
         .map(data => data.json()).toPromise() 
        
    }
    
    update(patient: TherapistPatient){
        return this._http.put("/therapist/"+patient.name, patient)
         .map(data => data.json()).toPromise() 

    }
    
    getPatients(){
         return this._http.get("/therapist")
          .map(data => data.json()).toPromise() 
        
    }
    
    getPatient(patient: TherapistPatient){
         return this._http.get("/therapist/"+patient.name)
          .map(data => data.json()).toPromise() 
        
    }

}
