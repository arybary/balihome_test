import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appRedusers, metaReducers } from './store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.development';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
