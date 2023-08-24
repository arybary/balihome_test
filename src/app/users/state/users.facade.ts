import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InfoForSearch } from '../model/search.model';
import { User } from '../model/user.model';
import * as UsersActions from './actions/users.actions';
import { UsersState } from './redusers/users.redusers';
import { usersFeature } from './selectors/users.selectors';

@Injectable()
export class UsersFacade {
  public readonly users$: Observable<User[]> = this.store.pipe(
    select(usersFeature.selectUsers)
  );
  public readonly usersTotal$: Observable<number | null> = this.store.pipe(
    select(usersFeature.selectTotal)
  );
  public readonly pages$: Observable<number | null> = this.store.pipe(
    select(usersFeature.selectPages)
  );

  public readonly loaded$: Observable<boolean> = this.store.pipe(
    select(usersFeature.selectLoaded)
  );

  public readonly textInfoForSearch$: Observable<InfoForSearch> =
    this.store.pipe(select(usersFeature.selectInfoForSearch));

  public readonly loginForSearch$: Observable<string> = this.store.pipe(
    select(usersFeature.selectSearchLogin)
  );

  public readonly error$: Observable<any> = this.store.pipe(
    select(usersFeature.selectError)
  );

  constructor(private readonly store: Store<UsersState>) {}

  public loadUsers(): void {
    this.store.dispatch(UsersActions.loadUsers());
  }

  public loadSerchUsers(search: string, pageCurrent: number): void {
    this.store.dispatch(
      UsersActions.loadSearchUsers({ query: search, page: pageCurrent })
    );
  }
}
