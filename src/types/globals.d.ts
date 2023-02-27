import { ConsoleLogger } from '../lib/logger.js';

declare global {
    // eslint-disable-next-line no-var
    var _con: typeof ConsoleLogger;
}

export {};
