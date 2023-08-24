import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GithubUsersApiService } from '../../../core/service/github-users-api.service';
import * as UsersActions from '../actions/users.actions';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      delay(3000),
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
      ofType(UsersActions.loadSearchUsers),
      mergeMap(({ query, page }) =>
        this.githubService.searchUsers(query, page).pipe(
          map((search) => UsersActions.loadUsersSearchSuccess(search)),
          catchError((error) => of(UsersActions.loadUsersSearchFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private githubService: GithubUsersApiService
  ) {}
}
