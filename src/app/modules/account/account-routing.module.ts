import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path:'',redirectTo:'sign-in',pathMatch:'full'
      },
      // {
      //   path: '',
      //   loadChildren: () => import('./sign-in/sign-in.module').then((m) => m.SignInModule)
      // },
      {
        path: 'sign-in',
        loadChildren: () => import('./sign-in/sign-in.module').then((m) => m.SignInModule)
      },
      {
        path: 'forget-password',
        loadChildren: () => import('./forget-password/forget-password.module').then((m) => m.ForgetPasswordModule)
      },
      {
        path: 'reset-password',
        loadChildren: () => import('./reset-password/reset-password.module').then((m) => m.ResetPasswordModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
