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
  NavigationPath = NavigationPath;
  links = [{ title: 'HOME', path: NavigationPath.UsersPage }, ,];

  constructor(public route: ActivatedRoute) {}
}
