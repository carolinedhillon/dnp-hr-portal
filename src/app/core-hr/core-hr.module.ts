import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreHRRoutingModule } from './core-hr-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CoreHRRoutingModule,
    MaterialModule
  ]
})
export class CoreHRModule { }
