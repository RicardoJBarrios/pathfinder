import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { distinctUntilChanged, map, shareReplay } from 'rxjs';

import { MenuItem } from './menu-item.type';

@Injectable({ providedIn: 'root' })
export class MainLayoutService {
  readonly #breakpoint = inject(BreakpointObserver);
  readonly #http = inject(HttpClient);

  readonly isHandset$ = this.#breakpoint.observe(Breakpoints.XSmall).pipe(
    map((state: BreakpointState) => state.matches),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly menuItems$ = this.#http.get<MenuItem[]>('assets/menu-items.json');
}
