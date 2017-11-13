import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewTherapistComponent } from './user-new-therapist.component';

describe('UserNewTherapistComponent', () => {
  let component: UserNewTherapistComponent;
  let fixture: ComponentFixture<UserNewTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNewTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
