#!/usr/bin/env node
import { Logger } from './lib/logger.js';
import { isDev, throwThis } from './lib/utils.js';

// Add leading line for aesthetic reasons
console.log('');

// Set stack traces to use typescript source files
if (isDev()) {
  const smp = await import('source-map-support');
  smp.default.install();
  Logger.info('TypeScript source map support installed');
}

const [, , arg] = process.argv;

if (arg && arg == 'throw') {
  if (isDev()) {
    throwThis('This should produce a TypeScript file stack trace');
  } else {
    throwThis('This should produce a JavaScript file stack trace');
  }
}

Logger.print('yw', 'test', 'Hello World!!');
