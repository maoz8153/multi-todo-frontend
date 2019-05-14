import { Injectable } from '@angular/core';
import { IUser } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserLocalStorageService {

  private localStorageKey = 'todo_user';
  constructor() { }

  setUserInLocalStorage(user: IUser): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
  }

  getUserFromLocalStorage(): IUser | null {
    if (localStorage.getItem(this.localStorageKey)) {
      return JSON.parse(localStorage.getItem(this.localStorageKey));
    }
    return null;
  }

  deleteUserFromLocalStorage(): void {
    localStorage.removeItem(this.localStorageKey);
  }

}
