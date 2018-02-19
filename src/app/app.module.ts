import { LogoutComponent } from './login/logout-component';
import { HttpUtilService } from './services/http-util-service';
import { LoginService } from './services/login-service';
import { AuthGuard } from './guards/auth.guard';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';

import { routing } from "app/app.routing";
import { StreamHeaderComponent } from './stream-header/stream-header.component';


import 'sweetalert2';
import { AlertService } from "app/services/alert.service";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TooltipModule } from "ng2-tooltip";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    HomeComponent,
    LogoutComponent,
    StreamHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserModule,
    TooltipModule
  ],
  providers: [
    AuthGuard,
    LoginService,
    HttpUtilService,
    AlertService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
