import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FieldValidValueComponent } from './field-valid-value/field-valid-value.component';
import { BreadCrumbsComponent } from './breadcrumbs/breadcrumbs.component'
import { FormsModule } from '@angular/forms'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatListModule } from '@angular/material/list'
import { MatTabsModule } from '@angular/material/tabs'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
@NgModule({
  declarations: [FieldValidValueComponent, BreadCrumbsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [FieldValidValueComponent, BreadCrumbsComponent]
})
export class SharedModule { }
