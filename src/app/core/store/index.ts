import * as fromRouter from '@ngrx/router-store';
import { getRouterSelectors } from '@ngrx/router-store';
import {
  MetaReducer,
  ActionReducer,
  ActionReducerMap,
 } from '@ngrx/store';
import { RouterStateUrl } from './custom-route-serializer';

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const appRedusers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer as any,
};

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
