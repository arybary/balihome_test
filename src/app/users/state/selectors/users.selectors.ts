import { createFeature, createSelector } from '@ngrx/store';
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

export const selectInfoForSearch = createSelector(
  usersFeature.selectTotal,
  usersFeature.selectSearchLogin,
  usersFeature.selectError,
  (total, login, errorApi) =>
    errorApi
      ? { text: errorApi as string, color: 'red' }
      : login === ''
      ? {
          text: `enter login to search`,
          color: 'green',
        }
      : total === 0
      ? {
          text: `not found ${login}`,
          color: 'red',
        }
      : {
          text: `found ${total} users`,
          color: 'green',
        }
);
