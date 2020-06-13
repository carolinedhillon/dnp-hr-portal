import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule
  ]
})
export class PublicModule { }
