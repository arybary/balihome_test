import { NgModule } from '@angular/core';
import { ReposStateModule } from './repos/state/repos-state.module';
import { UsersStateModule } from './users/state/users-state.module';

@NgModule({
  imports: [UsersStateModule, ReposStateModule],
})
export class AppCommonModule {}
