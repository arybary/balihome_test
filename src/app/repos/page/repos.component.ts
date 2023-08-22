import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/store';
import { selectRouteParams } from 'src/app/core/store/router.selectors';
import { ReposFacade } from '../state/repos.facade';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReposComponent {
  loaded$: Observable<boolean> = this.reposFacada.loaded$;
  error$: Observable<any> = this.reposFacada.error$;
  loginUser: string = '';

  constructor(
    private readonly reposFacada: ReposFacade,
    private store: Store<AppState>
  ) {}
  ngOnInit(): void {
    this.store.pipe(select(selectRouteParams)).subscribe(({ login }) => {
      this.loginUser = login;
      this.reposFacada.loadRepos(login);
    });
  }
}
