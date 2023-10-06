import { ActivatedRoute } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutService } from './main-layout.service';

const mockMainLayoutService = { isHandset$: of(true), menuItems$: of([]) };

describe('MainLayoutComponent', () => {
  let spectator: Spectator<MainLayoutComponent>;
  const createComponent = createComponentFactory({
    component: MainLayoutComponent,
    providers: [MockProvider(ActivatedRoute), MockProvider(MainLayoutService, mockMainLayoutService)]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it(`render router outlet`, () => {
    expect(spectator.query('router-outlet')).toExist();
  });
});
