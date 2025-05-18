import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RouteService } from '../../services/routes.service';
import { Firestore, collection, collectionData, doc, deleteDoc, updateDoc} from '@angular/fire/firestore';
import { ShortRouteNamePipe } from '../../pipes/shorterNames.pipe';
import { MatCard } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatTable } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list-route',
  standalone: true,
  imports: [FormsModule, MatTableModule, MatCard, MatCardTitle, MatCardContent, MatTable, CommonModule, ShortRouteNamePipe],
  templateUrl: './list-route.component.html',
  styleUrl: './list-route.component.css'
})
export class ListRouteComponent implements OnInit, OnDestroy{
  displayedColumns: string[] = ['name', 'from', 'to', 'time', 'update', 'delete'];
  routesSub!: Subscription;
  routes: any[] = [];
  lastItem: any;

  constructor(private router: Router, private firestore: Firestore, private routeService: RouteService) {}

  ngOnInit(): void {
    this.routesSub = this.routeService.getRoutes().subscribe(routes => {
      this.routes = routes;
    });
  }

  ngOnDestroy(): void{
    this.routesSub.unsubscribe();
  }

  async updateRoute(routeId: string, updatedData: Partial<any>) {
    await this.routeService.updateRoute(routeId, updatedData);
  }

  async deleteRoute(routeId: string) {
    await this.routeService.deleteRoute(routeId);
  }

  getLimitedListing(){
    this.routeService.limitListing().subscribe(routes => {
      this.routes = routes;
    });
  }

  getNextPage(){
    if(this.lastItem){
      this.routeService.nextPage(this.lastItem).subscribe(routes => {
        this.routes = routes;
        this.lastItem = routes[routes.length - 1];
      });
    }
  }

  orderByName(){
    this.routeService.orderByName().subscribe(routes => {
      this.routes = routes;
    })
  }
}
