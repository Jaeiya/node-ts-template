#!/usr/bin/env node
import { throwThis } from './lib/utils.js';

// Set stack traces to use typescript source files
if (process.env.NODE_ENV == 'development') {
  const smp = await import('source-map-support');
  smp.default.install();
}

const [, , arg] = process.argv;

if (arg && arg == 'throw') {
  if (process.env.NODE_ENV == 'development') {
    throwThis('This should produce a TypeScript file stack trace');
  } else {
    throwThis('This should produce a JavaScript file stack trace');
  }
}

console.log('Hello World!');
