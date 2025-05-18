import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService} from '../../services/auth.service';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  user: User | null = null;

  constructor(private authService: AuthService, private router: RouterModule) {
    this.authService.getUser().subscribe(user => {
      if(user){
        this.user = user;
      } else{
        console.warn('No user is logged in!');
        this.user = null;
      }
    });
  }

  logOut(){
    this.authService.logOut().then(() => {
      console.log('User logged out!');
      this.user = null;
    })
  }
}
