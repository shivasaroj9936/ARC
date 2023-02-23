import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { staticRouts } from './constant/routs';
import { WildCardRoutsComponent } from './modules/wild-card-routs/wild-card-routs.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '', loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule)
      },
      {
        path: '', loadChildren: () => import('./modules/account/account.module').then((m) => m.AccountModule)
      },
      {
        path:'**',
        component:WildCardRoutsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
