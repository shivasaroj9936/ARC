import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MainUrlPipe } from 'src/app/pipes/main-url/main-url.pipe';
import { SubUrlPipe } from 'src/app/pipes/sub-url/sub-url.pipe';

@NgModule({
  declarations: [
    LayoutComponent, MainUrlPipe, SubUrlPipe
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,

  ]
})
export class LayoutModule {
  constructor(){
    console.log('layout loaded');

  }
}
