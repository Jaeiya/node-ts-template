const maxTagLength = 10;

const _consoleColors = {
  /** Red */
  rd: '\u001B[31m',
  /** Bright Red */
  brd: '\u001B[91m',
  /** Dark Green */
  dgn: '\u001B[32m',
  /** Bright Green */
  bgn: '\u001B[92m',
  /** Yellow */
  yw: '\u001B[93m',
  /** Bright White */
  bwt: '\u001B[97m',
  /** Clear */
  x: '\u001B[0m',
};
const cc = _consoleColors;

export class Logger {
  static consoleColors = _consoleColors;

  static info(msg: string) {
    log('info', msg, 'dgn');
  }

  static error(msg: string) {
    log('error', msg, 'rd');
  }

  static print(color: keyof typeof cc, tag: string, msg: string) {
    log(tag, msg, color);
  }
}

function log(tagName: string, msg: string, color: keyof typeof cc) {
  console.log(`${cc[color]}${toTag(tagName)}${cc.x}`, msg);
}

function toTag(tagName: string) {
  if (tagName.length > maxTagLength) {
    throw Error(`Tag longer than maxTagLength: [${tagName}]`);
  }
  const specialCharLength = 3; // [, ], :
  const tagLength = tagName.length + specialCharLength;
  const offsetLength = maxTagLength - tagLength;
  return `${' '.repeat(offsetLength)}[${tagName.toUpperCase()}]:`;
}
