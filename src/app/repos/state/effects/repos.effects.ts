import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GithubUsersApiService } from '../../../core/service/github-users-api.service';
import * as ReposActions from '../actions/repos.actions';
import { routerNavigatedAction } from '@ngrx/router-store';
import { selectRouteData } from 'src/app/core/store';
import { Store } from '@ngrx/store';

@Injectable()
export class ResposEffects {
  loadRespos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReposActions.loadRepos),
      mergeMap(() => {
        return this.githubService.getUserRepos().pipe(
          map((repos) => {
            console.log(repos);
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
