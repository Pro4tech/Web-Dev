import { Component, OnInit } from '@angular/core';
import{user} from './user.model';

@Component({
  selector: 'app-proj-hello',
  templateUrl: './proj-hello.component.html',
  styleUrls: ['./proj-hello.component.css']
})
export class ProjHelloComponent implements OnInit {
  User:user;
  constructor() 
  { 
    this.User=new user('Pritesh','Stud','Mapusa',[712,746,645]);
  }
  
  ngOnInit() {  }

  method(){
     return this.User.name+" "+this.User.des+""+this.User.add+" "+this.User.phone
  }

}


