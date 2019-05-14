import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/model/user.model';
import { Select, Store } from '@ngxs/store';
import * as fromUsersState from '../../store/users';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserLocalStorageService } from 'src/app/core/services/user-local-storage.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  @Select(fromUsersState.UsersState.getUsersDetails) usersList$: Observable<IUser[]>;

  constructor(private store: Store, private router: Router, private userLocalStorageService: UserLocalStorageService) { }

  ngOnInit() {
    this.store.dispatch(new fromUsersState.UsersListDetails());

  }

  navigateToSubjects(user) {
    this.userLocalStorageService.setUserInLocalStorage(user);
    this.router.navigate(['/subjects']);
  }

}
