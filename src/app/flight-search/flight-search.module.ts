import { FlightSearchComponent } from './flight-search.component';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        FlightSearchComponent
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightSearchModule {

}