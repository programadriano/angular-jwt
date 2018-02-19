import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {


  name: string = "Angular Auth";
  intro: boolean;

  constructor(
    private router: Router,
  ) { }




  ngOnInit() {

  }



}
