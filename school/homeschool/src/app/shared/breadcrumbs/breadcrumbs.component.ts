import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core'
import { BreakpointObserver } from '@angular/cdk/layout'
import { Router } from '@angular/router'
import { MatSidenav } from '@angular/material/sidenav';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { pipe } from 'rxjs';

export interface Section {
  descricao: string;
  observacao: string;
  ativo: boolean;
  descValue: string;
  tipo: string;
}

export interface Tipos {
  desc: []
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadCrumbsComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  showAgenda = true;

  showMenu = true;

  tipos = ['boolean', 'string', 'date', 'numeric']

  folders: Section[] = [
    {
      descricao: 'Memória de calculo PDF',
      observacao: 'Geração de memória de cálculo em arquivo PDF',
      ativo: false,
      descValue: 'Desabilitado',
      tipo: 'boolean'
    },
    {
      descricao: 'Memória de calculo Excel',
      observacao: 'Geração de memória de cálculo em arquivo PDF',
      ativo: false,
      descValue: 'Desabilitado',
      tipo: 'string'
    },
    {
      descricao: 'Fluxo de parcelas PDF',
      observacao: 'Geração de fluxo de parcelas em arquivo PDF',
      ativo: false,
      descValue: 'Desabilitado',
      tipo: 'number'
    },
    {
      descricao: 'Fluxo de parcelas Excel',
      observacao: 'Geração de fluxo de parcelas em arquivo EXCEL',
      ativo: true,
      descValue: 'Habilitado',
      tipo: 'boolean'
    },
    {
      descricao: 'Fluxo de parcelas PDF',
      observacao: 'Geração de fluxo de parcelas em arquivo PDF',
      ativo: false,
      descValue: 'Desabilitado',
      tipo: 'number'
    },
    {
      descricao: 'Fluxo de parcelas Excel',
      observacao: 'Geração de fluxo de parcelas em arquivo EXCEL',
      ativo: true,
      descValue: 'Habilitado',
      tipo: 'boolean'
    },
    {
      descricao: 'Fluxo de parcelas PDF',
      observacao: 'Geração de fluxo de parcelas em arquivo PDF',
      ativo: false,
      descValue: 'Desabilitado',
      tipo: 'number'
    },
    {
      descricao: 'Fluxo de parcelas Excel',
      observacao: 'Geração de fluxo de parcelas em arquivo EXCEL',
      ativo: true,
      descValue: 'Habilitado',
      tipo: 'boolean'
    }
  ];

  constructor(private observer: BreakpointObserver, private changeDetector: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit (): void {
  }

  validChecked (element: MatSlideToggleChange) {
    this.folders.map(pipe((f: any) => {
      if (f.descricao === element.source.name) {
        f.ativo = element.checked
        f.descValue = f.ativo ? 'Habilitado' : 'Desabilitado'
      }
    }))
  }

  onSave () {
    console.log('Salvar')
  }

  onValidType (tipo: string, element: any): boolean {
    if (tipo === 'boolean' && element === 'mat-slide-toggle') {
      return true
    } else if ((tipo === 'string' || tipo === 'number') && element === 'input') {
      return true
    }
    return false
  }

  ngOnDestroy () {
    this.observer.ngOnDestroy()
  }
}
