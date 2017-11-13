import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTherapistsComponent } from './user-therapists.component';

describe('UserTherapistsComponent', () => {
  let component: UserTherapistsComponent;
  let fixture: ComponentFixture<UserTherapistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTherapistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTherapistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
