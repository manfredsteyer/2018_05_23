import { CityPipe } from './pipes/city.pipe';
import { NgModule } from '@angular/core';
import { NgModel } from "@angular/forms";
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule],
    declarations: [CityPipe],
    exports: [CityPipe]
})
export class SharedModule {

}