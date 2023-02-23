import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { staticRouts } from 'src/app/constant/routs';
import { NotificationManagementComponent } from './notification-management.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationManagementComponent,
  }, {
    path: staticRouts.SEND_NOTIFICATION, loadChildren: () => import('./send-notification/send-notification.module').then((m) => m.SendNotificationModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationManagementRoutingModule { }
