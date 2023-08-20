import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {
  reposAdapter,
  reducer,
  reposFeatureKey,
} from '../redusers/repos.redusers';

export const reposFeature = createFeature({
  name: reposFeatureKey,
  reducer,
  extraSelectors: ({ selectReposState }) => ({
    ...reposAdapter.getSelectors(selectReposState),
  }),
});
