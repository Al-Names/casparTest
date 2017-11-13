import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditTherapistComponent } from './user-edit-therapist.component';

describe('UserEditTherapistComponent', () => {
  let component: UserEditTherapistComponent;
  let fixture: ComponentFixture<UserEditTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
