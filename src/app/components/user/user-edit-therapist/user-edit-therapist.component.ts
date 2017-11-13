import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { UserTherapist } from '../../user/user-therapist';

@Component({
  selector: 'app-user-edit-therapist',
  templateUrl: './user-edit-therapist.component.html',
  styleUrls: ['./user-edit-therapist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserEditTherapistComponent implements OnInit {
  @Input() therapist: UserTherapist;
  @Output() updateTherapistEvent = new EventEmitter();
  therapistEdit: UserTherapist = new UserTherapist();
  
  constructor() { }

  ngOnInit() {
    Object.assign(this.therapistEdit, this.therapist);
    
  }
  
  update(){
    this.therapistEdit.editable = false;
    this.updateTherapistEvent.emit({original: this.therapist, edited:this.therapistEdit});
  }
}
