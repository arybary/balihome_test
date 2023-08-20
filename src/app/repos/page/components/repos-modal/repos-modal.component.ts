import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Repos } from 'src/app/repos/model/repos.model';

@Component({
  selector: 'repos-modal',
  templateUrl: './repos-modal.component.html',
  styleUrls: ['./repos-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReposModalComponent {
  @Input() repositorie: Repos | undefined;


  modalRef?: BsModalRef;
  config = {
    animated: true
  };
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
}
