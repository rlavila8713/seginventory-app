import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from '../templates/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroCompletadoComponent } from './registro-completado/registro-completado.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        //canActivate: [IsNotLoggedGuard]
      },

      {
        path: 'registro',
        component: RegistroComponent,
        //canActivate: [IsNotLoggedGuard]
      },
      {
        path: 'registro_completado',
        component: RegistroCompletadoComponent,
        //canActivate: [IsNotLoggedGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitadoRoutingModule { }
