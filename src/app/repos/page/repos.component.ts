import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ReposFacade } from '../state/repos.facade';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReposComponent {
  loaded$: Observable<boolean> = this.reposFacada.loaded$;

  constructor(private readonly reposFacada: ReposFacade) {}
  ngOnInit(): void {
    this.reposFacada.loadRepos();
  }
}
