import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Repos } from '../model/repos.model';
import * as ReposActions from './actions/repos.actions';
import { ReposState } from './redusers/repos.redusers';
import { reposFeature } from './selectors/repos.selectors';

@Injectable()
export class ReposFacade {
  public readonly repos$: Observable<Repos[]> = this.store.pipe(
    select(reposFeature.selectAll)
  );

  public readonly loaded$: Observable<boolean> = this.store.pipe(
    select(reposFeature.selectLoaded)
  );

  public readonly error$: Observable<any> = this.store.pipe(
    select(reposFeature.selectError)
  );

  constructor(private readonly store: Store<ReposState>) {}

  public loadRepos(): void {
    this.store.dispatch(ReposActions.loadRepos());
  }


}
