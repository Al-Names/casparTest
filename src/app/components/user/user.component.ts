import { Component, OnInit } from '@angular/core';
import { UserService } from '../../components/user/user.service'
import { DataService } from '../../services/data.service';
import { UserTherapist } from '../user/user-therapist';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;
  therapists: Array<UserTherapist>= [ new UserTherapist("Doctor","Facility", 080033600,"email@email.com"),
    new UserTherapist("Doctor","Hospital Five",018007840,"email@email.com"),
    new UserTherapist("Name","Clinic",60,"email@email.com")];
    
  constructor(private dataService:DataService, private userService:UserService ) {
    console.log('constructors ran..');

  }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'John Doe';
    this.email = 'test@test.com';
    this.age = 30;
    this.address = {
      street:'50 Main st',
      city: 'Boston',
      state:'MA'
    }

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
      
    });

  }


  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

  create(therapist: UserTherapist){
    this.therapists.push(therapist);
  }
  
  destroy(therapist: UserTherapist){
    const i = this.therapists.indexOf(therapist);
    this.therapists.splice(i, 1);
  }
  
  update(therapists: any){
    console.log (therapists);
    const i = this.therapists.indexOf(therapists.original);
    this.therapists[i] = therapists.edited;
  }
   getUserTherapists(){
    // this.userService.getUserTherapists()
    // .then(userTherapists => this.userTherapists = userTherapists)
  }

}


interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id: number,
  title:string,
  body:string,
  userId:number
}
