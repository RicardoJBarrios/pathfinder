import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { MainLayoutComponent } from './main-layout.component';

describe('MainLayoutComponent', () => {
  let spectator: Spectator<MainLayoutComponent>;
  const createComponent = createComponentFactory(MainLayoutComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it(`render main-layout`, () => {
    expect(spectator.query('p')).toHaveExactText('main-layout');
  });

  it(`render router outlet`, () => {
    expect(spectator.query('router-outlet')).toExist();
  });
});
