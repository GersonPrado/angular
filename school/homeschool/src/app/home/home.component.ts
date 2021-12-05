import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  showMenu = true;
  constructor(  private observer: BreakpointObserver,
                private changeDetector: ChangeDetectorRef,
                private router: Router ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if(res.matches || !this.showMenu) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.changeDetector.detectChanges();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.ngAfterViewInit();
  }

  selectedMenu(url: string) {
    this.router.navigate([`/${url}`])
  }

  ngOnDestroy() {
    this.observer.ngOnDestroy();
  }
}
