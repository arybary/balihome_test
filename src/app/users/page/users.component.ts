import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersFacade } from '../state/users.facade';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  name: string = '';
  error$: Observable<any> = this.usersFacada.error$;
  loaded$: Observable<boolean> = this.usersFacada.loaded$;
  total$: Observable<number> = this.usersFacada.usersTotal$;

  constructor(private readonly usersFacada: UsersFacade) {}
  ngOnInit(): void {
    this.usersFacada.loadUsers();
  }
}
