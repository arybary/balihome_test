import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { InfoForSearch } from 'src/app/users/model/search.model';
import { User } from 'src/app/users/model/user.model';
import { UsersFacade } from 'src/app/users/state/users.facade';

@Component({
  selector: 'users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSearchComponent {
  selectedPage: number=1;
  userLogin: string = '';
  totalUsers$:Observable<number | null>= this.usersFacada.usersTotal$
  textInfo$: Observable<InfoForSearch> =
    this.usersFacada.textInfoForSearch$;

  constructor(private readonly usersFacada: UsersFacade) {}

  onLoginChange(page:number,login: string) {
    this.selectedPage=page;
    this.userLogin = login;
    console.log(this.userLogin,this.selectedPage)
    if (this.userLogin !== '') {
      this.usersFacada.loadSerchUsers(this.userLogin,this.selectedPage);
    }

  }

  range(n: number): number {return Math.ceil(n/100)}


}
