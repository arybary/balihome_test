import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createFeature, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/users.actions';
import { User } from '../../model/user.model';

export const usersFeatureKey = 'users';

export interface UsersState {
  users: User[];
  loaded: boolean;
  selectedUserId: number | null;
  error: any;
  searchLogin: string;
  page: number;
  total: number | null;
}

export const initialState: UsersState = {
  users: [],
  loaded: false,
  selectedUserId: null,
  searchLogin: '',
  error: null,
  page: 1,
  total: null,
};
export const usersReducers = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({
    ...state,
    users: [],
    searchLogin: '',
    loaded: false,
    total: null,
    error: null,
  })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loaded: true,
    error: null,
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error: error.message,
  })),

  on(UserActions.loadSearchUsers, (state, { query, page }) => ({
    ...state,
    loaded: false,
    users: [],
    searchLogin: query,
  })),
  on(UserActions.loadUsersSearchSuccess, (state, { users, total }) => ({
    ...state,
    users,
    total,
    loaded: true,
    error: null,
  })),
  on(UserActions.loadUsersSearchFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error: error.message,
  }))
);
