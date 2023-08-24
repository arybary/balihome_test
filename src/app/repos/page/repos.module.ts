import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposComponent } from './repos.component';
import { RouterModule } from '@angular/router';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LetModule, PushPipe } from '@ngrx/component';
import { ReposModalComponent } from './components/repos-modal/repos-modal.component';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [ReposComponent, ReposListComponent, ReposModalComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    LetModule,
    SharedModule,
    PushPipe,
    RouterModule.forChild([{ path: ':login', component: ReposComponent }]),
  ],

})
export class ReposModule {}
