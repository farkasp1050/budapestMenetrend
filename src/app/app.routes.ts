import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AddRouteComponent } from './pages/add-route/add-route.component';
import { ListRouteComponent } from './pages/list-route/list-route.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'app-add-route', component: AddRouteComponent, canActivate: [authGuard] },
    { path: 'app-list-route', component: ListRouteComponent },
    { path: 'app-login', component: LoginComponent },
    { path: 'app-register', component: RegisterComponent },
    { path: 'app-profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: '', redirectTo: '/app-login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],  
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
