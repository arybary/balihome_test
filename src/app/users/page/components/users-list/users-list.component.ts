import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/users/model/user.model';
import { UsersFacade } from 'src/app/users/state/users.facade';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  search?: string;
  users$: Observable<User[]> = this.usersFacada.users$;
  error$: Observable<any> = this.usersFacada.error$;

  constructor(private readonly usersFacada: UsersFacade) {}
}
