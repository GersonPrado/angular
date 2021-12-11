import { NgModule } from '@angular/core'
import { RedeComponent } from './rede.component'
import { CadastrosRoutingModule } from '../cadastros.modules.routing'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [
    RedeComponent
  ],
  imports: [
    SharedModule,
    CadastrosRoutingModule
  ]
})
export class RedeModule { }
