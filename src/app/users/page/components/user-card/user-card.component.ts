import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
  @Input() avatarUrl: string | undefined;
  @Input() login: string | undefined;

  openUserRepos() {
    // Emit event or navigate to user's repos
  }

}
