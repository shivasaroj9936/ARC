import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { staticRouts } from 'src/app/constant/routs';
import { ClintManagementComponent } from './clint-management.component';

const routes: Routes = [
  {
    path: '',
    component: ClintManagementComponent,
  },
  {
    path: staticRouts.CLIENT_DETAILS, loadChildren: () => import('./clint-details/clint-details.module').then((m) => m.ClintDetailsModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClintManagementRoutingModule { }
