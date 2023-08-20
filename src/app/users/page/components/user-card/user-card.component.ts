import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigationPath } from 'src/app/core/constants';
import { UsersFacade } from 'src/app/users/state/users.facade';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  NavigationPath = NavigationPath;

  @Input() id: number =0;
  @Input() avatarUrl: string | undefined;
  @Input() login: string | undefined;

  constructor(private readonly usersFacada: UsersFacade) {}

  selectUser(id: number) {
    console.log(id);
    this.usersFacada.selectUser(id);
  }
}
