import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UsersEffects } from './effects/users.effects';
import { usersFeature } from './selectors/users.selectors';
import { UsersFacade } from './users.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(usersFeature),
    EffectsModule.forFeature([UsersEffects]),
  ],
  providers: [UsersFacade],
})
export class UsersStateModule {}
