import { IUser } from '../../../core/model/user.model';

export const USERS_LIST_DETAILS = '[USERS] USERS_LIST_DETAILS';
export const USERS_LIST_DETAILS_SUCCESS = '[USERS] USERS_LIST_DETAILS_SUCCESS';
export const USERS_LIST_DETAILS_FAIL = '[USERS] USERS_LIST_DETAILS_FAIL';


export class UsersListDetails {

  static readonly type = USERS_LIST_DETAILS;

  constructor(public payload: any = null) {
  }
}

export class UsersListDetailsSuccess {
  static readonly type = USERS_LIST_DETAILS_SUCCESS;

  constructor(public payload: Array<IUser>) {
  }
}

export class UsersListDetailsFail {
  static readonly type = USERS_LIST_DETAILS_FAIL;

  constructor(public payload: any = null) {
  }
}







