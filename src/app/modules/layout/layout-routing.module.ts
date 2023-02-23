import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { staticRouts } from '../../constant/routs';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'',redirectTo:staticRouts.DASHBOARD,pathMatch:'full'

      },
      // {
      //   path:'',loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
      // },
      // {
      //   path:staticRouts.LAYOUT,loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
      // },
      {
        path: staticRouts.USER_MANAGEMENT,loadChildren:()=>import('./user-management/user-management.module').then((m)=>m.UserManagementModule)
      },
      {
        path: staticRouts.DASHBOARD,loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
      },
      {
        path: staticRouts.CLIENT_MANAGEMTNT, loadChildren: () => import('./clint-management/clint-management.module').then((m) => m.ClintManagementModule)
      },
      {
        path: staticRouts.EARNING_MANAGEMENT, loadChildren: () => import('./earinging-management/earinging-management.module').then((m) => m.EaringingManagementModule)
      },
      {
        path: staticRouts.NOTIFICATION_MANAGEMENT, loadChildren: () => import('./notification-management/notification-management.module').then((m) => m.NotificationManagementModule)
      },
      {
        path: staticRouts.CONTENT_MANAGEMENT, loadChildren: () => import('./content-management/content-management.module').then((m) => m.ContentManagementModule)
      },
      {
        path: staticRouts.STAFF_MANAGEMENT, loadChildren: () => import('./staff-management/staff-management.module').then((m) => m.StaffManagementModule)
      },
      {
        path:staticRouts.TRANSACTION_MANAGEMENT,loadChildren:()=>import('./transaction-management/transaction-management.module').then((m)=>m.TransactionManagementModule)
      },
      // {
      //   path:'staff-management',loadChildren:()=>import('./staff-management/staff-management.module').then((m)=>m.StaffManagementModule)
      // },
      {
        path:'my-profile',loadChildren:()=>import('./user/user.module').then((m)=>m.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
