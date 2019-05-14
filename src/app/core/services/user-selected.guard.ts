import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLocalStorageService } from './user-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserSelectedGuard implements CanActivate {

  constructor(private userLocalStorageService: UserLocalStorageService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkUserSelected(state.url);
  }

  checkUserSelected(url: string): boolean {
    if (this.userLocalStorageService.getUserFromLocalStorage()) {
      return true;
    }
    this.router.navigate(['/users']);
    return false;
  }

}
