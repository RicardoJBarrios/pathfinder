import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { LoginLayoutComponent } from './login-layout.component';

describe('LoginLayoutComponent', () => {
  let spectator: Spectator<LoginLayoutComponent>;
  const createComponent = createComponentFactory(LoginLayoutComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it(`render main-layout`, () => {
    expect(spectator.query('p')).toHaveExactText('login-layout');
  });

  it(`render router outlet`, () => {
    expect(spectator.query('router-outlet')).toExist();
  });
});
