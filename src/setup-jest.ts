// import 'jest-preset-angular/setup-jest';

/* global mocks for jsdom */
const storageMock = () => {
  let storage: { [key: string]: string } = {};
  return {
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string, value: string) => (storage[key] = value || ''),
    removeItem: (key: string) => delete storage[key],
    clear: () => (storage = {}),
  };
};

Object.defineProperty(window, 'localStorage', { value: storageMock() });
Object.defineProperty(window, 'sessionStorage', { value: storageMock() });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance'],
});

Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (prop: any) => {
      return '';
    },
  }),
});

Object.defineProperty(window, 'matchMedia', {
  value: (query: any) => ({
    matches: false,
    media: query,
    onchange: null as any,
    addListener: () => {},
    removeListener: () => {},
  }),
});

// jsdom has no SVGPathElement defined so we mock it here
// https://github.com/facebook/jest/issues/5379
class SVGPathElement extends HTMLElement {}
Object.defineProperty(window, 'SVGPathElement', {
  value: SVGPathElement,
});

/* output shorter and more meaningful Zone error stack traces */
// Error.stackTraceLimit = 2;

// Suppress angular material and hammerJs warnings.
// https://github.com/thymikee/jest-preset-angular/issues/79 (Question 2)
const WARN_SUPPRESSING_PATTERNS = [/Could not find Angular Material core theme/, /Could not find HammerJS/];
const warn = console.warn;
Object.defineProperty(console, 'warn', {
  value: (...params: string[]) => {
    if (!WARN_SUPPRESSING_PATTERNS.some((pattern) => pattern.test(params[0]))) {
      warn(...params);
    }
  },
});
