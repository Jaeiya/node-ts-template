#!/usr/bin/env node
import { ConsoleLogger } from './lib/logger.js';

// Add leading line for aesthetic reasons
console.log('');

//
// UNCOMMENT THE FOLLOWING DURING DEV:
//
// const smp = await import('source-map-support');
// smp.default.install();
// ConsoleLogger.info('TypeScript source map support installed');

const [, , arg] = process.argv;

const _con = ConsoleLogger;
_con.print('y', 'test', 'Hello World!!');
