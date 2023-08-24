import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { currentUsersForPage } from 'src/app/core/constants';
import { InfoForSearch } from 'src/app/users/model/search.model';
import { UsersFacade } from 'src/app/users/state/users.facade';

@Component({
  selector: 'users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSearchComponent {
  selectedPage: number = 0;
  userLogin: string = '';
  perPage: number = currentUsersForPage;
  pages$: Observable<number | null> = this.usersFacada.pages$;
  textInfo$: Observable<InfoForSearch> = this.usersFacada.textInfoForSearch$;

  constructor(private readonly usersFacada: UsersFacade) {}

  clearSearchLogin() {
    this.userLogin = '';
    this.usersFacada.loadUsers();
  }

  onLoginChange(page: number, login: string) {
    this.userLogin = login;
    this.selectedPage = page;

    if (this.userLogin === '') {
      this.usersFacada.loadUsers();
    }
    this.usersFacada.loadSerchUsers(this.userLogin, this.selectedPage);
  }
}
