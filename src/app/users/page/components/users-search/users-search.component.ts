import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TextInfoForSearch } from 'src/app/users/model/search.model';
import { User } from 'src/app/users/model/user.model';
import { UsersFacade } from 'src/app/users/state/users.facade';

@Component({
  selector: 'users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSearchComponent {
  userLogin: string = '';
  textInfo$: Observable<TextInfoForSearch> =
    this.usersFacada.textInfoForSearch$;

  constructor(private readonly usersFacada: UsersFacade) {}

  onLoginChange(login: string) {
    this.userLogin = login;
    if (this.userLogin !== '') {
      this.usersFacada.serchUsers(this.userLogin);
    }
    this.usersFacada.loadUsers();
  }
}
