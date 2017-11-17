import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AdminLayoutComponent } from './components/common/layouts/admin-layout/admin-layout.component';
import { Er404Component } from './components/shared/er404/er404.component';
import { Er500Component } from './components/shared/er500/er500.component';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    Er404Component,
    Er500Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
