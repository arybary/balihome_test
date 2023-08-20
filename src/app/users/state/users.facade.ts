import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import * as UsersActions from './actions/users.actions';
import { UsersState } from './redusers/users.redusers';
import { usersFeature } from './selectors/users.selectors';

@Injectable()
export class UsersFacade {
  public readonly users$: Observable<User[]> = this.store.pipe(
    select(usersFeature.selectAll)
  );

  public readonly selectedId$: Observable<number | null> = this.store.pipe(
    select(usersFeature.selectSelectedUserId)
  );

  public readonly loaded$: Observable<boolean> = this.store.pipe(
    select(usersFeature.selectLoaded)
  );

  public readonly error$: Observable<any> = this.store.pipe(
    select(usersFeature.selectError)
  );

  constructor(private readonly store: Store<UsersState>) {}

  public loadUsers(): void {
    this.store.dispatch(UsersActions.loadUsers());
  }

  public serchUsers(search: string): void {
    this.store.dispatch(UsersActions.searchUsers({ query: search }));
  }

  public selectUser(id: number): void {
    this.store.dispatch(UsersActions.selectUser({ userId: id }));
  }
}
