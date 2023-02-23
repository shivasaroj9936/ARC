import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EaringingManagementComponent } from './earinging-management.component';

const routes: Routes = [
  {
    path:'',
    component:EaringingManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EaringingManagementRoutingModule { }
