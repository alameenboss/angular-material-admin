import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { LayoutComponent } from "./layout/layout.component";
import { TopNavComponent } from "./layout/top-nav/top-nav.component";
import { SideNavComponent } from "./layout/side-nav/side-nav.component";
import { MaterialModule } from "../shared/material.module";
import { SettingsComponent } from "./layout/settings/settings.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LayoutComponent,
    TopNavComponent,
    SideNavComponent,
    SettingsComponent,
  ],
})
export class AdminModule {}
