import { Http } from '@angular/http';
import { UserTherapist } from '../user/user-therapist';
import { Injectable } from '@angular/core';
import'rxjs';
import { Observable} from 'rxjs';


@Injectable()
export class UserService {

    constructor(private _http: Http) { }

    create(therapist: UserTherapist){
       return this._http.post("/patient", therapist)
        .map(data => data.json()).toPromise() 
    }
    
    destroy(therapist: UserTherapist){
        return this._http.delete("/patient/"+therapist.name)
         .map(data => data.json()).toPromise() 
        
    }
    
    update(therapist: UserTherapist){
        return this._http.put("/patient/"+therapist.name, therapist)
         .map(data => data.json()).toPromise() 

    }
    
    getUserTherapists(){
         return this._http.get("/patient")
          .map(data => data.json()).toPromise() 
        
    }
    
    getUserTherapist(therapist: UserTherapist){
         return this._http.get("/patient/"+therapist.name)
          .map(data => data.json()).toPromise() 
        
    }
}
