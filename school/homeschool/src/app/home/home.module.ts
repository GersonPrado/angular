import { HomeRoutingModule } from './home.routing.module.routing'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatMenuModule } from '@angular/material/menu'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'
import { FullCalendarModule } from '@fullcalendar/angular'
import { AgendaComponent } from './home-agenda/agenda.component'
import { CadastrosComponent } from './configuracoes/cadastros/cadastros.component'
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout'
@NgModule({
  declarations: [HomeComponent, AgendaComponent, CadastrosComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatCardModule,
    FlexLayoutModule,
    HomeRoutingModule
  ],
  exports: [AgendaComponent]
})
export class HomeModule { }
