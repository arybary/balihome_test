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

export const searchUsers = createAction(
  '[Users/API] Search Users',
  props<{ query: string }>()
);

export const selectUser = createAction(
  '[Users Page] Select User',
  props<{ userId: number }>()
);
