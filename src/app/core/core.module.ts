import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appRedusers, metaReducers } from './store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { CustomSerializer } from './store/custom-route-serializer';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forRoot(appRedusers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
    EffectsModule.forRoot(),
  ],
})
export class CoreModule { }
