import {
  createFeature
} from '@ngrx/store';
import { reposReducer, reposFeatureKey } from '../redusers/repos.redusers';

export const reposFeature = createFeature({
  name: reposFeatureKey,
  reducer: reposReducer,
});
