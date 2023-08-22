import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';

import { Repos } from 'src/app/repos/model/repos.model';

@Component({
  selector: 'repos-modal',
  templateUrl: './repos-modal.component.html',
  styleUrls: ['./repos-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReposModalComponent {
  @Input() repo: Repos | undefined;
}
