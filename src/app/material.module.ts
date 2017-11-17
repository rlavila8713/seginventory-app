import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
    
 } from '@angular/material';

@NgModule({
    imports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatCardModule,
        MatChipsModule,
        MatMenuModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule
        
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatCardModule,
        MatChipsModule,
        MatMenuModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule
    ]
})


export class MaterialModule{


}