// users.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GithubUsersApiService } from '../../service/github-users-api.service';
import * as usersActions from '../actions/users.actions';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      mergeMap(() =>
        this.githubService.getUsers().pipe(
          map((users) => usersActions.loadUsersSuccess({ users })),
          catchError((error) => of(usersActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private githubService: GithubUsersApiService
  ) {}
}
