import { NgModule } from '@angular/core';
import { MaterialRoutingModule } from './material-routing.module';
import { MatButtonModule } from '@angular/material/button';

const materialComponent = [
  MatButtonModule
]
@NgModule({
  declarations: [],
  imports: [
    MaterialRoutingModule,
    materialComponent
  ],
  exports: [
    materialComponent
  ]
})
export class MaterialModule { }
