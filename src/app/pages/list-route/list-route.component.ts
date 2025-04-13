import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCard } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatTable } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-list-route',
  standalone: true,
  imports: [MatTableModule, MatCard, MatCardTitle, MatCardContent, MatTable, CommonModule],
  templateUrl: './list-route.component.html',
  styleUrl: './list-route.component.css'
})
export class ListRouteComponent implements OnInit{
  displayedColumns: string[] = ['name', 'from', 'to', 'time'];
  routes: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const existingRoutes = localStorage.getItem('routes');
    this.routes = existingRoutes ? JSON.parse(existingRoutes) : [];
  }

}
