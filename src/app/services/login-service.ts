import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { HttpUtilService } from './http-util-service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

	private loginUrl: string = 'token/request';
	private logoutUrl: string = '';
	private IsUserLogged: boolean = false;
	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}

	logar(usuario: string, senha: string): Observable<User> {

		let params = JSON.stringify(
			{ "grant_type": "password", "username": usuario, "password": senha });

		let url = this.httpUtil.urlAuth(this.loginUrl);
		let body = "username=" + usuario + "&password=" + senha + "&grant_type=password";
		let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
		let options = new RequestOptions({ headers: headers });


		return this.http.post(url, body, options)
			.map(this.httpUtil.extrairDados)
			.catch(this.httpUtil.processarErros);
	}


	UserLogged() {
		return this.IsUserLogged;
	}

	logOut() {
		delete localStorage['user'];
		delete localStorage['role'];
		delete localStorage['token'];
	}

	logado() {
		return localStorage['token'];
	}
}
