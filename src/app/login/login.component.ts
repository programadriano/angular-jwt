import { Component, OnInit } from '@angular/core';
import { AlertService } from "app/services/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  message: AlertService;  

  constructor(private msg: AlertService) {
    
  }

 



}
