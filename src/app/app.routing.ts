import { Routes, RouterModule, CanActivate } from '@angular/router'
import { HomeComponent } from "app/home/home.component";
import { LoginComponent } from "app/login/login.component";
import { ModuleWithProviders } from "@angular/core";
import { AuthGuard } from "app/guards/auth.guard";
import { LogoutComponent } from './login/logout-component';



export const APP_ROUTES: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'logout', component: LogoutComponent
  }
]


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
