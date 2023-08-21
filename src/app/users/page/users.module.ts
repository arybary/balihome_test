import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { UsersSearchComponent } from './components/users-search/users-search.component';
import { LetModule, PushPipe } from '@ngrx/component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [UsersComponent, UsersSearchComponent, UsersListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    LetModule,
    PushPipe,
    RouterModule.forChild([{ path: '', component: UsersComponent }]),
  ],
})
export class UsersModule {}
