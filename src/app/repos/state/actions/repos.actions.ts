import { createAction, props } from '@ngrx/store';
import { Repos } from '../../model/repos.model';

export const loadRepos = createAction('[Repos/API] Load Repos');

export const loadReposSuccess = createAction(
  '[Repos/API] Load Repos Success',
  props<{ repos: Repos[] }>()
);
export const loadReposFailure = createAction(
  '[Repos/API] Load Repos Failure',
  props<{ error: any }>()
);
