import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
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
  @Input() userName: string = '';
  @Output() userNameChange = new EventEmitter<string>();

  constructor(private readonly usersFacada: UsersFacade) {}

  onNameChange(model: string) {
    this.userName = model;
    this.userNameChange.emit(model);
    if( this.userName !==''){this.usersFacada.serchUsers(this.userName)}
    this.usersFacada.loadUsers()
  }
}
