import { Component} from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  formForLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  onLogin(){
    const email: string = this.formForLogin.value.email || "";
    const password: string = this.formForLogin.value.password || "";

    this.authService.signIn(email, password).then(userCredential =>{
      console.log('User logged in:', this.formForLogin.value);
      localStorage.setItem('user', JSON.stringify(userCredential.user));
    }).catch(error => {
      console.error('Something went wrong! ', error.message);
    })
    
    this.router.navigate(['']);
  }
}
