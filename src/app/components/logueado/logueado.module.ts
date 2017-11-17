import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogueadoRoutingModule } from './logueado-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';

@NgModule({
  imports: [
    CommonModule,
    LogueadoRoutingModule
  ],
  declarations: [UserProfileComponent, ChangePassComponent, UserLogoutComponent]
})
export class LogueadoModule { }
