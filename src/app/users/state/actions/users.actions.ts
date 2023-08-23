import { createAction, props } from '@ngrx/store';
import { User } from '../../model/user.model';

export const loadUsers = createAction('[Users/API] Load Users');

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[Users/API] Load Users Failure',
  props<{ error: any }>()
);

export const loadSearchUsers = createAction(
  '[UsersSearch/API] Load SearchUsers',
  props<{ query: string; page: number }>()
);

export const loadUsersSearchSuccess = createAction(
  '[UsersSearch/API] Load SearchUsers Success',
  props<{ users: User[]; total: number }>()
);

export const loadUsersSearchFailure = createAction(
  '[UsersSearch/API] Load SearchUsers Failure',
  props<{ error: any }>()
);
