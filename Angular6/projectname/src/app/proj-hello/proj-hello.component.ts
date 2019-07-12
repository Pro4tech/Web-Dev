import { Component, OnInit } from '@angular/core';
import { user } from './user.model';

@Component({
	selector: 'app-proj-hello',
	templateUrl: './proj-hello.component.html',
	styleUrls: ['./proj-hello.component.css']
})
export class ProjHelloComponent implements OnInit {
	User: user;
	constructor() {
		this.User = new user('Pritesh Naik', 'Stud', 'Mapusa', []);
	}

	ngOnInit() { }

	GetFullDel() {
		return this.User.GetFullDet();
	}

	GetName() {
		return this.User.GetName();
	}

	GetDes() {
		return this.User.GetDes();
	}

	GetAdd() {
		return this.User.GetAdd();
	}
	GetPhone() {
		return this.User.GetPhone();
	}
}


