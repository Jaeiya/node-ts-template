#!/usr/bin/env node
import { ConsoleLogger } from './lib/logger.js';
import { testGlobalLog } from './lib/utils.js';

// Add leading line for aesthetic reasons
console.log('');

global._con = ConsoleLogger;

//
// UNCOMMENT THE FOLLOWING DURING DEV:
//
// const smp = await import('source-map-support');
// smp.default.install();
// ConsoleLogger.info('TypeScript source map support installed');


_con.print('y', 'test', 'Hello World!!');
_con.addCustomColor('p', 'FF83DD');
_con.addCustomColor('rty', '2FD8A2');
_con.addCustomColor('l', 'A2FF00');
_con.addCustomColor('o', 'FFA800');
_con.info('info message with ;p;custom pink ;x;text');
_con.error('error message with ;by;bright yellow ;x;text');
// testGlobalLog();
const clearLoading = _con.printLoading();
setTimeout(clearLoading, 4000);
