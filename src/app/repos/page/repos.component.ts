import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState } from 'src/app/core/store';
import { selectRouteParams } from 'src/app/core/store/router.selectors';
import { ReposFacade } from '../state/repos.facade';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReposComponent implements OnInit, OnDestroy {
  loaded$: Observable<boolean> = this.reposFacade.loaded$;
  error$: Observable<any> = this.reposFacade.error$;
  selectedUserLogin: string = '';
  private destroy$: Subject<void> = new Subject();

  constructor(
    private readonly reposFacade: ReposFacade,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store
      .pipe(select(selectRouteParams), takeUntil(this.destroy$))
      .subscribe(({ login }) => {
        this.selectedUserLogin = login;
        this.reposFacade.loadRepos(login);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
