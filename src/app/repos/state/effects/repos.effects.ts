import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { catchError, delay, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GithubUsersApiService } from '../../../core/service/github-users-api.service';
import * as ReposActions from '../actions/repos.actions';

@Injectable()
export class ResposEffects {
  loadRespos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReposActions.loadRepos),
      delay(3000),
      mergeMap(({ login }) => {
        return this.githubService.getUserRepos(login).pipe(
          map((repos) => {
            return ReposActions.loadReposSuccess({ repos });
          }),
          catchError((error) => of(ReposActions.loadReposFailure({ error })))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private githubService: GithubUsersApiService
  ) {}
}
