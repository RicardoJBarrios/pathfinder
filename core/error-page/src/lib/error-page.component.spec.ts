import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { ErrorPageComponent } from './error-page.component';

describe('ErrorPageComponent', () => {
  let spectator: Spectator<ErrorPageComponent>;
  const createComponent = createComponentFactory(ErrorPageComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it(`render error-page`, () => {
    expect(spectator.query('p')).toHaveExactText('error-page');
  });
});
