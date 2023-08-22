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
  loaded$: Observable<boolean> = this.usersFacada.loaded$;

  constructor(private readonly usersFacada: UsersFacade) {}
  ngOnInit(): void {
    this.usersFacada.loadUsers();
  }
}
