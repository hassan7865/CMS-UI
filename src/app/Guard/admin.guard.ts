import { inject } from '@angular/core';
import { CanActivateFn,Router} from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const login = localStorage.getItem('login');
  if (login) {
    const loginData = JSON.parse(login);
    console.log(loginData)
    if (loginData.token && loginData.roleId === 1) {
      return true; 
    }
  }
  router.navigate(['/NotFound'])
  return false;
};
