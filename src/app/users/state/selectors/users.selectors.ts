import {
  createFeature,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import {
  usersAdapter,
  reducer,
  usersFeatureKey,
} from '../redusers/users.redusers';

export const usersFeature = createFeature({
  name: usersFeatureKey,
  reducer,
  extraSelectors: ({
    selectUsersState,
    selectEntities,
    selectSelectedUserId,
  }) => ({
    ...usersAdapter.getSelectors(selectUsersState),

    selectIsUserSelected: createSelector(
      selectSelectedUserId,
      (selectedId) => selectedId !== null
    ),
    selectSelectedUser: createSelector(
      selectSelectedUserId,
      selectEntities,
      (selectedId, entities) => (selectedId ? entities[selectedId] : null)
    ),
  }),
});
