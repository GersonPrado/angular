import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
// import { AuthGuard } from '../guards/auth-guard'
import { RedeComponent } from './rede/rede.component'

const routes: Routes = [
  {
    path: 'cadastros/rede',
    component: RedeComponent,
    // canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
