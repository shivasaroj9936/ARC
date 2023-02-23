import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFaqsComponent } from './childComponent/add-faqs/add-faqs.component';
import { ContentManagementComponent } from './content-management.component';

const routes: Routes = [
  {
    path:'',
    component:ContentManagementComponent,
  },
  {
    path:'add-faqs',
    component:AddFaqsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManagementRoutingModule { }
