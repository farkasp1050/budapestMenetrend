import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-route',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, CommonModule, FormsModule],
  templateUrl: './add-route.component.html',
  styleUrl: './add-route.component.css'
})
export class AddRouteComponent {
  newRoute = {
    name: "",
    from: "",
    to: "",
    time: ""
  };

  constructor(private router: Router) {}

  saveRoute() {
    if ( this.newRoute.name && this.newRoute.from && this.newRoute.to && this.newRoute.time){
      const routes = JSON.parse(localStorage.getItem('routes') || '[]');
      routes.push(this.newRoute);
      localStorage.setItem('routes', JSON.stringify(routes));

      this.router.navigate(['/app-list-route']);
    }else {
      alert('Az összes mező kitöltése kötelező!');
    }
  }
}
