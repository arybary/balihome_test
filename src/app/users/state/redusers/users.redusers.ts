import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/users.actions';
import { User } from '../../model/user.model';

export const usersFeatureKey = 'users';

export interface UsersState extends EntityState<User> {
  loaded: boolean;
  selectedUserId: number | null;
  error: any;
  searchLogin: string;
}

export const selectUserId = (user: User): number => user.id;

export const sortByName = (a: User, b: User): number =>
  a.login.localeCompare(b.login);

export const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectUserId,
  sortComparer: sortByName,
});

export const initialState: UsersState = usersAdapter.getInitialState({
  loaded: false,
  selectedUserId: null,
  searchLogin: '',
  error: null,
});

export const usersReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) =>
    usersAdapter.setAll(users, { ...state, loaded: true })
  ),
  on(UserActions.selectUser, (state, { userId }) => ({
    ...state,
    selectedUserId: userId,
  })),
  on(UserActions.searchUsers, (state, { query }) => ({
    ...state,
    searchLogin:query,
  })),
  on(
    UserActions.loadUsersFailure,
    (state, { error }): UsersState => ({
      ...state,
      loaded: true,
      error: error.message,
    })
  )
);

export const reducer = (state: UsersState | undefined, action: Action) =>
  usersReducer(state, action);
