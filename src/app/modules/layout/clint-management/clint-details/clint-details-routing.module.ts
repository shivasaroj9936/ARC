import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClintDetailsComponent } from './clint-details.component';

const routes: Routes = [
  {
    path:'',
    component:ClintDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClintDetailsRoutingModule { }
