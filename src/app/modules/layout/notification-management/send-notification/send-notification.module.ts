import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendNotificationRoutingModule } from './send-notification-routing.module';
import { SendNotificationComponent } from './send-notification.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SendNotificationComponent
  ],
  imports: [
    CommonModule,
    SendNotificationRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,FormsModule
  ]
})
export class SendNotificationModule { }
