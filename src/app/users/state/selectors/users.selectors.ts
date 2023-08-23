import { createFeature, createSelector } from '@ngrx/store';
import * as UsersFrom from '../redusers/users.redusers';

export const usersFeature = createFeature({
  name: UsersFrom.usersFeatureKey,
  reducer: UsersFrom.usersReducers,
  extraSelectors: ({
    selectUsers,
    selectSearchLogin,
    selectError,
    selectTotal,
  }) => ({

    selectInfoForSearch: createSelector(
      selectTotal,
      selectSearchLogin,
      selectError,
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
    ),
  }),
});
