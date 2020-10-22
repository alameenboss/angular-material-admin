import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { HomeComponent } from "./home/home.component";
import { StatComponent } from "./stat/stat.component";
import { MaterialModule } from "src/app/shared/material.module";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  declarations: [HomeComponent, StatComponent],
})
export class DashboardModule {}
