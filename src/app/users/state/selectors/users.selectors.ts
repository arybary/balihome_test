import { createFeature, createSelector } from '@ngrx/store';
import { currentUsersForPage } from 'src/app/core/constants';
import * as UsersFrom from '../redusers/users.redusers';

export const usersFeature = createFeature({
  name: UsersFrom.usersFeatureKey,
  reducer: UsersFrom.usersReducers,
  extraSelectors: ({ selectSearchLogin, selectError, selectTotal }) => ({
    selectPages: createSelector(selectTotal, (total) =>
      total ? Math.ceil(total / currentUsersForPage) : null
    ),
    selectInfoForSearch: createSelector(
      selectTotal,
      selectSearchLogin,
      selectError,
      (total, login, errorApi) =>
        errorApi
          ? { text: errorApi as string, class: 'error' }
          : login === ''
          ? {
              text: `enter login to search`,
            }
          : total === 0
          ? {
              text: `not found ${login}`,
              class: 'error',
            }
          : {
              text: `found ${total} users`,
            }
    ),
  }),
});
