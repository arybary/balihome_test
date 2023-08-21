import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationPath } from 'src/app/core/constants';
import { User } from 'src/app/users/model/user.model';
import { UsersFacade } from 'src/app/users/state/users.facade';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  NavigationPath = NavigationPath;

  users$: Observable<User[]> = this.usersFacada.users$;

  constructor(private readonly usersFacada: UsersFacade) {}
}
