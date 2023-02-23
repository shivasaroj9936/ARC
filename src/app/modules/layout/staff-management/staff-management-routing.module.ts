import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewStaffMemberComponent } from './add-new-staff-member/add-new-staff-member.component';
import { StaffManagementComponent } from './staff-management.component';

const routes: Routes = [
  {
    path:'',
    component:StaffManagementComponent
  },
  {
    path:'add-staff',component:AddNewStaffMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffManagementRoutingModule { }
