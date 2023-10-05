import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let spectator: Spectator<MainPageComponent>;
  const createComponent = createComponentFactory(MainPageComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it(`render main-page`, () => {
    expect(spectator.query('p')).toHaveExactText('main-page');
  });
});
