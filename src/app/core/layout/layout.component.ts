import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersFacade } from 'src/app/users/state/users.facade';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {

}
