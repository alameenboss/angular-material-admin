import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule as FormModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsRoutingModule } from "./forms-routing.module";
import { HomeComponent } from "./home/home.component";
import { AutoCompleteComponent } from "./auto-complete/auto-complete.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { SliderComponent } from "./slider/slider.component";
import { InputsComponent } from "./inputs/inputs.component";
import { OtherComponent } from "./other/other.component";
import { StatesGroupComponent } from "./auto-complete/states-group/states-group.component";
import { SelectedValueComponent } from "./datepicker/selected-value/selected-value.component";
import { MaterialModule } from "src/app/shared/material.module";

@NgModule({
  imports: [
    SharedModule,
    FormsRoutingModule,
    FormModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  declarations: [
    HomeComponent,
    AutoCompleteComponent,
    DatepickerComponent,
    CheckboxComponent,
    SliderComponent,
    InputsComponent,
    OtherComponent,
    StatesGroupComponent,
    SelectedValueComponent,
  ],
})
export class FormsModule {}
