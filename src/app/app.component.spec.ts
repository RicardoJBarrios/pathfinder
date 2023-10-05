import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory(AppComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it(`have as title 'pathfinder'`, () => {
    expect(spectator.component.title).toBe('pathfinder');
  });

  it(`render title`, () => {
    expect(spectator.query('h1')).toHaveExactText('Welcome pathfinder');
  });

  it(`render router outlet`, () => {
    expect(spectator.query('router-outlet')).toExist();
  });
});
