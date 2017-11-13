import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { UserTherapist } from '../../user/user-therapist';

@Component({
  selector: 'app-user-therapists',
  templateUrl: './user-therapists.component.html',
  styleUrls: ['./user-therapists.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserTherapistsComponent implements OnInit {
  
  @Input() therapists;
  @Output() destroyTherapistEvent = new EventEmitter();
  @Output() updateTherapistEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  destroy(therapist: UserTherapist){
    this.destroyTherapistEvent.emit(therapist);
  }
  
  update(therapists){
    this.updateTherapistEvent.emit(therapists);
  }
}
