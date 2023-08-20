import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/users/model/user.model';
import { UsersFacade } from 'src/app/users/state/users.facade';

@Component({
  selector: 'users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSearchComponent {
  search?: string ;
  suggestions$?: Observable<User[]>=this.usersFacada.users$;
  constructor(private readonly usersFacada: UsersFacade) {}

  onKey(event: KeyboardEvent) { // with type info
    this.usersFacada.serchUsers((event.target as HTMLInputElement).value);
  }
}
