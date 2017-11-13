import { UserService } from './components/user/user.service'
import { TherapistService } from './components/therapist/therapist.service'
import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { TherapistComponent } from './components/therapist/therapist.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { UserTherapistsComponent } from './components/user/user-therapists/user-therapists.component';
import { UserNewTherapistComponent } from './components/user/user-new-therapist/user-new-therapist.component';
import { UserEditTherapistComponent } from './components/user/user-edit-therapist/user-edit-therapist.component';
import { TherapistPatientsComponent } from './components/therapist/therapist-patients/therapist-patients.component';
import { TherapistEditPatientComponent } from './components/therapist/therapist-edit-patient/therapist-edit-patient.component';
import { TherapistNewPatientComponent } from './components/therapist/therapist-new-patient/therapist-new-patient.component';



const appRoutes: Routes = [
  {path:'patient', component:UserComponent},
  {path:'', component:AboutComponent},
  {path:'therapist', component:TherapistComponent},
  {path:'clinic', component:ClinicComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    TherapistComponent,
    ClinicComponent,
    UserTherapistsComponent,
    UserNewTherapistComponent,
    UserEditTherapistComponent,
    TherapistPatientsComponent,
    TherapistEditPatientComponent,
    TherapistNewPatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, UserService, TherapistService],
  bootstrap: [AppComponent]
})
export class AppModule { }