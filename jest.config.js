// https://thymikee.github.io/jest-preset-angular/docs/guides/angular-ivy/
require('jest-preset-angular/ngcc-jest-processor');

// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  coverageDirectory: 'reports',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@core': ['<rootDir>/src/app/@core'],
    '@core/(.*)': ['<rootDir>/src/app/@core/$1'],
    '@shared': ['<rootDir>/src/app/@shared'],
    '@shared/(.*)': ['<rootDir>/src/app/@shared/$1'],
    '@env': '<rootDir>/src/environments/environment',
  },
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
      tsconfig: '<rootDir>/tsconfig.spec.json',
      isolatedModules: true,
    },
  },
  // Do not ignore librairies such as ionic, ionic-native or bootstrap to transform them during unit testing.
  // Using amcharts with jest: https://github.com/amcharts/amcharts4/issues/336
  // transformIgnorePatterns: ['node_modules/((?!(jest-test))(?!(@amcharts))(?!(swiper|ssr-window|dom7)))'],
};
