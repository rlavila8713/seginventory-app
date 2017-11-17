import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import { TemplatesRoutingModule } from './templates-routing.module';
import { HomeComponent } from './home/home.component';
import { MyObjectsModule } from '../shared/my-objects/my-objects.module';

@NgModule({
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    MyObjectsModule
  ],
  declarations: [HomeComponent ]
})
export class TemplatesModule { }
