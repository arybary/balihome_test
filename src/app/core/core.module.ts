import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appRedusers, metaReducers } from './store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.development';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(appRedusers, { metaReducers }),
    EffectsModule.forRoot(),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          name: 'Store github_list',
          maxAge: 25,
          logOnly: !isDevMode(),
        })
      : [],
  ],
})
export class CoreModule {}
