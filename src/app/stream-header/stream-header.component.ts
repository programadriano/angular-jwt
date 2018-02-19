import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../services/login-service';

@Component({
  selector: 'app-stream-header',
  templateUrl: './stream-header.component.html',
  styleUrls: ['./stream-header.component.sass'],

})
export class StreamHeaderComponent implements OnInit {

  public user: User;
  public msgErro: string;

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
    this.user = localStorage['user']
  }


  logout() {
    localStorage.clear();

    delete localStorage['user'];
    delete localStorage['role'];
    delete localStorage['token'];


    this.router.navigate(['/login']);
  }

}
