import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FieldValidValueComponent } from './field-valid-value/field-valid-value.component'

@NgModule({
  declarations: [FieldValidValueComponent],
  imports: [
    CommonModule
  ],
  exports: [FieldValidValueComponent]
})
export class SharedModule { }
