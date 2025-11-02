 import { CanActivateFn } from '@angular/router';

export const authorGuard: CanActivateFn = (route, state) => {
  //allow access based on condition like true or false.
  return true;
};
