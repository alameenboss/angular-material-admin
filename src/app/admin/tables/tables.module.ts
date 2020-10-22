import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TablesRoutingModule } from "./tables-routing.module";
import { TablesComponent } from "./tables/tables.component";
import { DataService } from "./data.service";
import { SharedModule } from "src/app/shared/shared.module";
import { DynamicTableComponent } from "./dynamic-table/dynamic-table.component";
import { HomeComponent } from "./home/home.component";
import { MaterialModule } from "src/app/shared/material.module";

@NgModule({
  imports: [CommonModule, TablesRoutingModule, SharedModule, MaterialModule],
  declarations: [HomeComponent, TablesComponent, DynamicTableComponent],
  providers: [DataService],
})
export class TablesModule {}
