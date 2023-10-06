import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnInit, ViewChild } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs';

import { MainLayoutService } from './main-layout.service';

@Component({
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent implements OnInit {
  readonly #service = inject(MainLayoutService);
  readonly #destroyRef = inject(DestroyRef);

  @ViewChild('sidenav', { static: true }) private readonly sidenav!: MatSidenav;

  readonly isHandset = toSignal(this.#service.isHandset$, { initialValue: true });
  readonly menuItems = toSignal(this.#service.menuItems$, { initialValue: [] });
  readonly sidenavMode = computed(() => (this.isHandset() ? 'over' : 'side'));

  ngOnInit(): void {
    this.#closeSidenavIfNoHandset();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  #closeSidenavIfNoHandset() {
    this.#service.isHandset$
      .pipe(
        filter((isHandset: boolean) => isHandset === false),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe(() => {
        this.sidenav.close();
      });
  }
}
