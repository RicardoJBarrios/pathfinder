import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { MenuItem } from './menu-item.type';

@Injectable({ providedIn: 'root' })
export class MainLayoutService {
  readonly #http = inject(HttpClient);

  readonly menuItems$ = this.#http.get<MenuItem[]>('assets/menu-items.json');
}
