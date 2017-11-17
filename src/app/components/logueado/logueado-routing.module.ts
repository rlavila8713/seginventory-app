import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';

const routes: Routes = [
  {
    path: 'user-frofile',
    component : UserProfileComponent
  },
  {
    path: 'change-pass',
    component : ChangePassComponent
  },
  {
    path: 'user-logout',
    component : UserLogoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogueadoRoutingModule { }
