import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GithubUsersApiService } from '../../../core/service/github-users-api.service';
import * as UsersActions from '../actions/users.actions';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers, UsersActions.searchUsers),
      mergeMap(() =>
        this.githubService.getUsers().pipe(
          map((users) => UsersActions.loadUsersSuccess({ users })),
          catchError((error) => of(UsersActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  searchUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.searchUsers),
      mergeMap(({ query }) =>
        this.githubService.searchUsers(query).pipe(
          map((users) => UsersActions.loadUsersSuccess({ users })),
          catchError((error) => of(UsersActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private githubService: GithubUsersApiService
  ) {}
}
