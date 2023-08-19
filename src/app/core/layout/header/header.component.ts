import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationPath } from '../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  links = [
    { title: 'USERS', fragment: 'users',path: NavigationPath.UsersPage},
    { title: 'Two', fragment: 'two',path: NavigationPath.UsersPage },
  ];

  constructor(public route: ActivatedRoute) {}
}
