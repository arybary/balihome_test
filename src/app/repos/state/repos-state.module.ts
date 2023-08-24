import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ResposEffects } from './effects/repos.effects';
import { ReposFacade } from './repos.facade';
import { reposFeature } from './selectors/repos.selectors';

@NgModule({
  imports: [
    StoreModule.forFeature(reposFeature),
    EffectsModule.forFeature([ResposEffects]),
  ],
  providers: [ReposFacade],
})
export class ReposStateModule {}
