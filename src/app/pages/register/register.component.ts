import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router, private authService: AuthService) {}

  formForRegister = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  async onRegister(){
    const name: string = this.formForRegister.value.name || "";
    const email: string = this.formForRegister.value.email || "";
    const password: string = this.formForRegister.value.password || "";

    this.authService.signUp(name, email, password);
    const userCredential = await this.authService.signUp(name, email, password);
    const user = userCredential.user;

    await this.authService.addUserData({ uid: userCredential.user.uid, name, email, password }).then(() => {
      this.router.navigate(['']);
    }).catch((error: Error) => {
      console.error('Something went wrong! ', error.message);
    })
  }
}
