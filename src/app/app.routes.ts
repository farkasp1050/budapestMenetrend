import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AddRouteComponent } from './pages/add-route/add-route.component';
import { ListRouteComponent } from './pages/list-route/list-route.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'app-add-route', component: AddRouteComponent },
    { path: 'app-list-route', component: ListRouteComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],  
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
