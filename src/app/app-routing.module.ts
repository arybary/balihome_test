import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPath } from './core/constants';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: NavigationPath.UsersPage,
        loadChildren: () =>
          import('./users/page/users.module').then((m) => m.UsersModule),
      },
      {
        path: NavigationPath.RepoPage,
        loadChildren: () =>
          import('./repos/page/repos.module').then((m) => m.ReposModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
