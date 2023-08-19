import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoComponent {}
