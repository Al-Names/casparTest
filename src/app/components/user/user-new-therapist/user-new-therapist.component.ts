import { Component, OnInit, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import { UserTherapist } from '../../user/user-therapist';

@Component({
  selector: 'app-user-new-therapist',
  templateUrl: './user-new-therapist.component.html',
  styleUrls: ['./user-new-therapist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserNewTherapistComponent implements OnInit {
  newTherapist = new UserTherapist(); 
  
  @Output() createNewTherapistEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
   create(){
    // call server to save
    this.createNewTherapistEvent.emit(this.newTherapist);
    this.newTherapist = new UserTherapist();
  }

}
