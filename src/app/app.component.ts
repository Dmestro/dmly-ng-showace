import { Component, inject, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { AsyncPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterLink, UpperCasePipe, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnDestroy {

  private media: MediaMatcher = inject(MediaMatcher);
  public router: Router = inject(Router);

  private mobileQuery: MediaQueryList;
  private mediaQueryListener = () => { };


  navItems: { title: string, path: string }[] = [
    { title: 'Main', path: '/' },
    { title: 'Form', path: '/form' },
    { title: 'Dynamic Table', path: '/dynamic-table' },
    { title: 'Drag & Drop', path: '/drag-drop' },
  ];

  get isMobile(): boolean {
    return this.mobileQuery?.matches;
  }

  get isDesktop(): boolean {
    return !this.isMobile;
  }

  constructor() {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this.mobileQuery.addEventListener('change', this.mediaQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mediaQueryListener);
  }
}
