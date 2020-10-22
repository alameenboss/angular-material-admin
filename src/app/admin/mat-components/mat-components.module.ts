import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from "./home/home.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { IndicatorsComponent } from "./indicators/indicators.component";
import { DialogsComponent } from "./dialogs/dialogs.component";
import { SteppersComponent } from "./steppers/steppers.component";
import { PanelsComponent } from "./panels/panels.component";
import { OthersComponent } from "./others/others.component";
import { ChipsAutoCompleteComponent } from "./indicators/chips-auto-complete/chips-auto-complete.component";
import { SpinnerComponent } from "./indicators/spinner/spinner.component";
import { ProgressBarComponent } from "./indicators/progress-bar/progress-bar.component";
import {
  SnackBarComponent,
  PizzaPartyComponent,
} from "./dialogs/snack-bar/snack-bar.component";
import { BasicSnackBarComponent } from "./dialogs/snack-bar/basic-snack-bar.component";
import {
  DialogOverviewComponent,
  DialogOverviewExampleDialog,
} from "./dialogs/dialog-overview/dialog-overview.component";
import { StepperOverviewComponent } from "./steppers/stepper-overview/stepper-overview.component";
import { StepperVerticalComponent } from "./steppers/stepper-vertical/stepper-vertical.component";
import { BasicExpansionPanelComponent } from "./panels/basic-expansion-panel/basic-expansion-panel.component";
import { ExpansionPanelAccordionComponent } from "./panels/expansion-panel-accordion/expansion-panel-accordion.component";
import { MatComponentsRoutingModule } from "./mat-components-routing.module";
import { MaterialModule } from "src/app/shared/material.module";
@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatComponentsRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  declarations: [
    HomeComponent,
    ButtonsComponent,
    IndicatorsComponent,
    DialogsComponent,
    SteppersComponent,
    PanelsComponent,
    OthersComponent,
    ChipsAutoCompleteComponent,
    SpinnerComponent,
    ProgressBarComponent,
    SnackBarComponent,
    PizzaPartyComponent,
    BasicSnackBarComponent,
    DialogOverviewComponent,
    DialogOverviewExampleDialog,
    StepperOverviewComponent,
    StepperVerticalComponent,
    BasicExpansionPanelComponent,
    ExpansionPanelAccordionComponent,
  ],
  entryComponents: [PizzaPartyComponent, DialogOverviewExampleDialog],
})
export class MatComponentsModule {}
