import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { RouteService } from '../../services/routes.service';

import { Firestore, collection, addDoc } from '@angular/fire/firestore';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-route',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, CommonModule, FormsModule],
  templateUrl: './add-route.component.html',
  styleUrl: './add-route.component.css'
})
export class AddRouteComponent {
[x: string]: any;
  newRoute = {
    name: "",
    from: "",
    to: "",
    time: ""
  };

  constructor(private router: Router, private firestore: Firestore, private routeService: RouteService) {}

  async submitRoute(){
    if (this.newRoute.name && this.newRoute.from && this.newRoute.to && this.newRoute.time) {
      await this.routeService.addRoute(this.newRoute);
      this.router.navigate(['/app-list-route']);
    } else {
      alert('Fill out all fields!');
    }
  }
}
