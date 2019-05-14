import { Action, Selector, State, StateContext } from '@ngxs/store';
import * as fromAction from '../actions';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { IUser } from '../../../core/model/user.model';
import { UserService } from '../../../users/users.service';

export class UsersListStateModel {
  data: Array<IUser>;
  loaded: boolean;
  loading: boolean;
}

@State<UsersListStateModel>({
  name: 'usersState',
  defaults: {
    data: [],
    loaded: false,
    loading: false,
  }
})


export class UsersState {
  constructor(private userSrv: UserService) {
  }

  @Selector()
  static getUsersDetails(state: UsersListStateModel): Array<IUser> {
    return state.data;
  }



  @Action(fromAction.UsersListDetails)
  UsersListDetails({ dispatch, patchState }: StateContext<UsersListStateModel>) {
    patchState({ loading: true });
    return this.userSrv.getUsers()
      .pipe(
        map((data) => {
          dispatch(new fromAction.UsersListDetailsSuccess(data));
        }),
        catchError(error => of(dispatch(new fromAction.UsersListDetailsFail(error))))
      );
  }

  @Action(fromAction.UsersListDetailsSuccess)
  UsersListDetailsSuccess({ patchState }: StateContext<UsersListStateModel>, action: fromAction.UsersListDetailsSuccess) {
    const data = action.payload as IUser[];
    patchState(
      {
        data,
        loading: false,
        loaded: true
      }
    );
  }

  @Action(fromAction.UsersListDetailsFail)
  UsersListDetailsFail({ patchState }: StateContext<UsersListStateModel>) {
    patchState(
      {
        loading: false,
        loaded: false,
      }
    );
  }
}

