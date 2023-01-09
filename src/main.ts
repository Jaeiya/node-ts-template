#!/usr/bin/env node
import { install } from 'source-map-support';

// Set stack traces to use typescript source files
install();

function throwError() {
  throw Error('hello world');
}

const [, , arg] = process.argv;

if (arg) {
  if (arg == 'throw') {
    throwError();
  }
}

console.log('Hello World!');
