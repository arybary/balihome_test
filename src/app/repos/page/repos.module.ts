import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposComponent } from './repos.component';
import { RouterModule } from '@angular/router';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LetModule, PushPipe } from '@ngrx/component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReposModalComponent } from './components/repos-modal/repos-modal.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ReposComponent, ReposListComponent, ReposModalComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    FormsModule,
    LetModule,
    PushPipe,
    RouterModule.forChild([{ path: ':login', component: ReposComponent }]),
  ],
})
export class ReposModule {}
