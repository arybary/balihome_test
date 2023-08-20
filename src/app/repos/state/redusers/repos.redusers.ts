import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as ReposActions from '../actions/repos.actions';
import { Repos } from '../../model/repos.model';

export const reposFeatureKey = 'repos';

export interface ReposState extends EntityState<Repos> {
  loaded: boolean;
  selectedReposId: number | null;
  error: any;
}

export const selectReposId = (user: Repos): number => user.id;

export const reposAdapter: EntityAdapter<Repos> = createEntityAdapter<Repos>({
  selectId: selectReposId,
});

export const initialState: ReposState = reposAdapter.getInitialState({
  loaded: false,
  selectedReposId: null,
  error: null,
});

export const reposReducer = createReducer(
  initialState,
  on(ReposActions.loadReposSuccess, (state, { repos }) =>
    reposAdapter.setAll(repos, { ...state, loaded: true })
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

export const reducer = (state: ReposState | undefined, action: Action) =>
  reposReducer(state, action);
