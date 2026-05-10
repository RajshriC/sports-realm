import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";



@NgModule({
  imports: [CommonModule, ModelModule],
  declarations: [StoreComponent],
  exports: [StoreComponent]
})
export class StoreModule {}