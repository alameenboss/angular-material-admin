import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DynamicTableComponent } from "./dynamic-table/dynamic-table.component";
import { HomeComponent } from "./home/home.component";
import { TablesComponent } from "./tables/tables.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        redirectTo: "basic",
      },
      {
        path: "basic",
        component: TablesComponent,
      },
      {
        path: "dynamic",
        component: DynamicTableComponent,
      },
      {
        path: "**",
        redirectTo: "basic",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule {}
