import * as fromRouter from '@ngrx/router-store';
import { getRouterSelectors } from '@ngrx/router-store';
import { MetaReducer, ActionReducer, ActionReducerMap, createSelector } from '@ngrx/store';
import { RouterStateUrl } from './custom-route-serializer';

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const appRedusers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
};
export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectRouteDataParam, // factory function to select a route data param
  selectUrl, // select the current url
  selectTitle, // select the title if available
} = getRouterSelectors();


export function logger(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<AppState>[] = [logger];
