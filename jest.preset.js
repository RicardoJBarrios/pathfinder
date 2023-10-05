const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  setupFilesAfterEnv: [...(nxPreset.setupFilesAfterEnv ?? []), 'jest-extended/all'],
  coverageReporters: ['text', 'text-summary', 'lcovonly', 'html'],
  resetMocks: true,
  restoreMocks: true
};
