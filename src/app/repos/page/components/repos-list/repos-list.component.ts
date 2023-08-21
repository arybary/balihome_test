import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Repos } from 'src/app/repos/model/repos.model';
import { ReposFacade } from 'src/app/repos/state/repos.facade';

@Component({
  selector: 'repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReposListComponent {
  repos$: Observable<Repos[]> = this.reposFacada.repos$;

  constructor(private readonly reposFacada: ReposFacade) {}
}
