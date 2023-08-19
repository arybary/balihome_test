import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  links = [
    { title: 'USERS', fragment: 'users' },
    { title: 'Two', fragment: 'two' },
  ];

  constructor(public route: ActivatedRoute) {}
}
