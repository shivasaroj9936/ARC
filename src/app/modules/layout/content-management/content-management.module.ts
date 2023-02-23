import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentManagementRoutingModule } from './content-management-routing.module';
import { ContentManagementComponent } from './content-management.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';
import { AboutComponent } from './childComponent/about/about.component';
import { TermAndConditionComponent } from './childComponent/term-and-condition/term-and-condition.component';
import { FaqComponent } from './childComponent/faq/faq.component';
import { WhoWeAreComponent } from './childComponent/who-we-are/who-we-are.component';
import { AddFaqsComponent } from './childComponent/add-faqs/add-faqs.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ContentManagementComponent,
    AboutComponent,
    TermAndConditionComponent,
    FaqComponent,
    WhoWeAreComponent,
    AddFaqsComponent
  ],
  imports: [
    CommonModule,
    ContentManagementRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    EditorModule,
    MatProgressSpinnerModule

  ]
})
export class ContentManagementModule {
  constructor(){
    console.log('ContentManagementModule loaded');

  }
}
