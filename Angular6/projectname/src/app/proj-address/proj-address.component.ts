import { Component, OnInit, Input } from '@angular/core';
import { user } from '../proj-hello/user.model';

@Component({
  selector: 'app-proj-address',
  templateUrl: './proj-address.component.html',
  styleUrls: ['./proj-address.component.css']
})
export class ProjAddressComponent implements OnInit {
  @Input() 'text': string;
  @Input() 'user': user;
  constructor() {

  }
  // ngOnInit works  once data is initialised hence console.log is in this method //
  ngOnInit() {
    console.log(this.text);
  }

}
