import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcurementRoutingModule } from './procurement-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceChannelComponent } from './invoice-channel/invoice-channel.component';
import { InvoiceTrackingComponent } from './invoice-tracking/invoice-tracking.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [DashboardComponent, InvoiceChannelComponent, InvoiceTrackingComponent],
  imports: [
    CommonModule,
    ProcurementRoutingModule
  ]
})
export class ProcurementModule { }
