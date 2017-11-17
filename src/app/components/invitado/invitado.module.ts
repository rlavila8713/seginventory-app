import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitadoRoutingModule } from './invitado-routing.module';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroCompletadoComponent } from './registro-completado/registro-completado.component';
import { HomeComponent } from '../templates/home/home.component';
import { MaterialModule } from '../../material.module';


@NgModule({
  imports: [
    CommonModule,
    InvitadoRoutingModule,
    MaterialModule
  ],
  declarations: [LoginComponent, InicioComponent, RegistroComponent, RegistroCompletadoComponent, HomeComponent]
})
export class InvitadoModule { }
