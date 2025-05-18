import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.getUser();
  const dangerRoutes = ['add-route', 'profile'];

  if(user){
    return true;
  } else if(dangerRoutes.includes(route.routeConfig?.path || '')){
    router.navigate(['']);
    return false;
  } else{
    return true;
  }
};
