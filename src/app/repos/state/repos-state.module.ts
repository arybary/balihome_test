import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ResposEffects } from './effects/repos.effects';
import { reducer, reposFeatureKey } from './redusers/repos.redusers';
import { ReposFacade } from './repos.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(reposFeatureKey, reducer),
    EffectsModule.forFeature([ResposEffects]),
  ],
  providers: [ReposFacade],
})
export class ReposStateModule {}
