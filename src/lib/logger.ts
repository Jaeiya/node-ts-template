const _maxTagLength = 10;

const _consoleColors = {
  /** Black */
  k: '\u001B[30m',
  /** Bright Black */
  bk: '\u001B[90m',
  /** Bright White */
  bw: '\u001B[97m',
  /** Red */
  r: '\u001B[31m',
  /** Bright Red */
  br: '\u001B[91m',
  /** Dark Green */
  g: '\u001B[32m',
  /** Bright Green */
  bg: '\u001B[92m',
  /** Yellow */
  y: '\u001B[33m',
  /** Bright Yellow */
  by: '\u001B[93m',
  /** Blue */
  b: '\u001B[34m',
  /** Bright Blue */
  bb: '\u001B[94m',
  /** Magenta */
  m: '\u001B[35m',
  /** Bright Magenta */
  bm: '\u001B[95m',
  /** Cyan */
  c: '\u001B[36m',
  /** Bright Cyan */
  bc: '\u001B[96m',
  /** Clear */
  x: '\u001B[0m',
};
const _cc = _consoleColors;

const _colorMap = (function () {
  const map = new Map();
  for (const key in _consoleColors) {
    const k = key as keyof typeof _consoleColors;
    map.set(k, _consoleColors[k]);
  }
  return map;
})();

export class Logger {
  static readonly consoleColors = _consoleColors;

  static info(msg: string) {
    log('info', msg, 'g');
  }

  static error(msg: string) {
    log('error', msg, 'r');
  }

  static print(color: keyof typeof _cc, tag: string, msg: string) {
    log(tag, msg, color);
  }
}

function log(tagName: string, msg: string, color: keyof typeof _cc) {
  console.log(`${_cc[color]}${toTag(tagName)}${_cc.x}`, msg);
}

function toTag(tagName: string) {
  if (tagName.length > _maxTagLength) {
    throw Error(`Tag longer than maxTagLength: [${tagName}]`);
  }
  const specialCharLength = 3; // [, ], :
  const tagLength = tagName.length + specialCharLength;
  const offsetLength = _maxTagLength - tagLength;
  return `${' '.repeat(offsetLength)}[${tagName.toUpperCase()}]:`;
}

function colorStr(str: string) {
  if (!str.match(/;[a-z]{1,2};/g)) return str;

  let coloredStr = str;
  for (const [code, color] of _colorMap) {
    const colorCode = `;${code};`;
    if (str.includes(colorCode)) {
      coloredStr = coloredStr.replaceAll(colorCode, color);
    }
  }

  return coloredStr;
}
