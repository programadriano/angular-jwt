import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../services/login-service';

@Component({
	selector: 'logout',
	template: '',
	providers: [LoginService]
})
export class LogoutComponent implements OnInit {

	constructor(private router: Router, private loginService: LoginService) {
	}

	ngOnInit() {		
		this.sair();
	}

	sair() {
	
		localStorage.clear();
		//	this.loginService.logOut();

		delete localStorage['user'];
		delete localStorage['role'];
		delete localStorage['token'];


		this.router.navigate(['/login']);
	}
}