import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule,
    MatCardModule,
    MatChipsModule,
    MatMenuModule
    
 } from '@angular/material';

@NgModule({
    imports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatCardModule,
        MatChipsModule,
        MatMenuModule
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatCardModule,
        MatChipsModule,
        MatMenuModule
    ]
})


export class MaterialModule{


}