import { Component } from '@angular/core';
import { user } from './proj-hello/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectname';
  // Example for Intercommunication of HTML->TS and TS->HTML Pages
  User: user;

  constructor() {
    this.User = new user('Pritesh Naik', 'Student', 'Mapusa', [123])
  }

  // Data Binding
  
}
