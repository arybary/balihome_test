import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as ReposActions from '../actions/repos.actions';
import { Repos } from '../../model/repos.model';

export const reposFeatureKey = 'repos';

export interface ReposState {
  loaded: boolean;
  repos: Repos[];
  error: any;
}

export const initialState: ReposState = {
  loaded: false,
  repos: [],
  error: null,
};

export const reposReducer = createReducer(
  initialState,
  on(
    ReposActions.loadRepos,
    (state): ReposState => ({
      ...state,
      loaded: false,
      error: null,
    })
  ),
  on(
    ReposActions.loadReposSuccess,
    (state, { repos }): ReposState => ({
      ...state,
      repos,
      loaded: true,
      error: null,
    })
  ),

  on(
    ReposActions.loadReposFailure,
    (state, { error }): ReposState => ({
      ...state,
      loaded: true,
      error: error.message,
    })
  )
);

