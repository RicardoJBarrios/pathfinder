import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let spectator: Spectator<LoginPageComponent>;
  const createComponent = createComponentFactory(LoginPageComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it(`render login-page`, () => {
    expect(spectator.query('p')).toHaveExactText('login-page');
  });
});
