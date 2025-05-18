import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AddRouteComponent } from './pages/add-route/add-route.component';
import { ListRouteComponent } from './pages/list-route/list-route.component';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: any = null;

  constructor(private authService: AuthService){
    this.authService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  logOut(){
    this.authService.logOut().then(() => {
      console.log('User is now logged out!');
    })
  }
  
}