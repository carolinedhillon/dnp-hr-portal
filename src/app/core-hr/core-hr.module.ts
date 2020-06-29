import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreHRRoutingModule } from './core-hr-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ObservableSampleComponent } from './observable-sample/observable-sample.component';



@NgModule({
  declarations: [DashboardComponent, ObservableSampleComponent],
  imports: [
    CommonModule,
    CoreHRRoutingModule,
    MaterialModule
  ]
})
export class CoreHRModule { }
