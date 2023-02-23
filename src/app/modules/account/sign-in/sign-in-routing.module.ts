import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginInComponent } from './sigin-in.component';

const routes: Routes = [
  {
    path:'',
    component:SiginInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
