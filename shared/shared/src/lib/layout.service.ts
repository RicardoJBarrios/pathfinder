import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { distinctUntilChanged, map, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  readonly #breakpoint = inject(BreakpointObserver);

  readonly isHandset$ = this.#breakpoint.observe(Breakpoints.XSmall).pipe(
    map((state: BreakpointState) => state.matches),
    distinctUntilChanged(),
    shareReplay(1)
  );
}
