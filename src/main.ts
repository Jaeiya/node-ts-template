#!/usr/bin/env node
import { isDev, throwThis } from './lib/utils.js';

// Set stack traces to use typescript source files
if (isDev()) {
  const smp = await import('source-map-support');
  smp.default.install();
}

const [, , arg] = process.argv;

if (arg && arg == 'throw') {
  if (isDev()) {
    throwThis('This should produce a TypeScript file stack trace');
  } else {
    throwThis('This should produce a JavaScript file stack trace');
  }
}

console.log('Hello World!');
