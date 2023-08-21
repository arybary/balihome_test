import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationPath } from 'src/app/core/constants';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {
  NavigationPath = NavigationPath;
}
