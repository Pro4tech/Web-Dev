import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-date',
  templateUrl: './proj-date.component.html',
  styleUrls: ['./proj-date.component.css']
})
export class ProjDateComponent implements OnInit {


  dateMessage: string = Date();
  dateM: string;
  constructor() {
    // SetInterval-Fuction which call the function in{'Function'}after a delay of 1000//
    setInterval(()=>{let curdate = new Date();
      this.dateM = curdate.toDateString() + " " + curdate.toTimeString();},1000);
  }
  ngOnInit() {
  }
}
