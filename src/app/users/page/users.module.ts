import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersSearchComponent } from './components/users-search/users-search.component';
import { LetModule, PushPipe } from '@ngrx/component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserCardComponent,
    UsersSearchComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    LetModule,
    PushPipe,
    RouterModule.forChild([{ path: '', component: UsersComponent }]),
  ],
})
export class UsersModule {}
