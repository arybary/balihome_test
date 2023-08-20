import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UsersFacade } from 'src/app/users/state/users.facade';

@Component({
  selector: 'users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSearchComponent {
  searchValue: string ='';
  constructor(private readonly usersFacada: UsersFacade) {}

 handleSearch() {
    if (this.searchValue) {
      this.usersFacada.serchUsers(this.searchValue);
    }
  }
}
