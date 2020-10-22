import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { GridComponent } from "./grid/grid.component";
import { MatGridRoutingModule } from "./mat-grid-routing.module";
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  imports: [CommonModule, MatGridRoutingModule, FlexLayoutModule,MaterialModule],
  declarations: [GridComponent],
})
export class MatGridModule {}
