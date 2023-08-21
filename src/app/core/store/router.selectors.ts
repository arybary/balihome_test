import { createSelector } from '@ngrx/store';
import { AppState } from '.';

export const selectRouterState = (state: AppState) => state.router;

export const selectRouteParams = createSelector(
  selectRouterState,
  (routerState) => routerState.state.params
);
