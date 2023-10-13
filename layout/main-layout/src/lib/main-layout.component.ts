import { NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  ViewChild
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LayoutService } from '@pathfinder/shared';
import { filter } from 'rxjs';

import { MainLayoutService } from './main-layout.service';
import { MenuItem } from './menu-item.type';

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
export class MainLayoutComponent implements AfterViewInit {
  readonly #service = inject(MainLayoutService);
  readonly #layout = inject(LayoutService);
  readonly #destroyRef = inject(DestroyRef);

  @ViewChild('sidenav', { static: true }) private readonly sidenav?: MatSidenav;

  readonly isHandset = toSignal(this.#layout.isHandset$, { initialValue: true });
  readonly menuItems = toSignal(this.#service.menuItems$, { initialValue: [] });
  readonly sidenavMode = computed(() => (this.isHandset() ? 'over' : 'side'));
  readonly topGap = computed(() => (this.isHandset() ? 48 : 0));

  ngAfterViewInit(): void {
    this.#closeSidenavIfNoHandset();
  }

  toggleSidenav(): void {
    this.sidenav?.toggle();
  }

  trackMenuByLabel(index: number, item: MenuItem): string {
    return item.label;
  }

  #closeSidenavIfNoHandset(): void {
    this.#layout.isHandset$
      .pipe(
        filter((isHandset: boolean) => isHandset === false && Boolean(this.sidenav?.opened)),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe(() => {
        this.sidenav?.close();
      });
  }
}
