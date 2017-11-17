import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InvitadoRoutingModule } from './invitado-routing.module';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroCompletadoComponent } from './registro-completado/registro-completado.component';
import { MaterialModule } from '../../material.module';
import { TemplatesModule } from '../templates/templates.module';
import { MyObjectsModule } from '../shared/my-objects/my-objects.module';
@NgModule({
  imports: [
    CommonModule,
    InvitadoRoutingModule,
    MaterialModule,
    TemplatesModule,
    FormsModule,
    MyObjectsModule
  ],
  declarations: [LoginComponent, InicioComponent, RegistroComponent, RegistroCompletadoComponent]
})
export class InvitadoModule { }
