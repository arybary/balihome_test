import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UsersEffects } from './effects/users.effects';
import { reducer, usersFeatureKey } from './redusers/users.redusers';
import { UsersFacade } from './users.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(usersFeatureKey, reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
  providers: [UsersFacade],
})
export class UsersStateModule {}
