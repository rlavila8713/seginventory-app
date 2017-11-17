import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ],
  declarations: [HomeComponent]
})
export class TemplatesModule { }
