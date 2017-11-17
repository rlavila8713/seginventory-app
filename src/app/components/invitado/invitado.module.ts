import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitadoRoutingModule } from './invitado-routing.module';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroCompletadoComponent } from './registro-completado/registro-completado.component';
import { MaterialModule } from '../../material.module';
import { TemplatesModule } from '../templates/templates.module'



@NgModule({
  imports: [
    CommonModule,
    InvitadoRoutingModule,
    MaterialModule,
    TemplatesModule
  ],
  declarations: [LoginComponent, InicioComponent, RegistroComponent, RegistroCompletadoComponent]
})
export class InvitadoModule { }
