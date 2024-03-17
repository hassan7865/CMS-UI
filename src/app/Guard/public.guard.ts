import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const publicGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const login = localStorage.getItem('login');
  if (login) {
    const loginData = JSON.parse(login);
    if (loginData.token && loginData.roleId === 1) {
      router.navigate(['/admin/dashboard'])
      return false; 
    }
  }
  return true;
};
