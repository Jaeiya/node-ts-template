export function throwThis(msg: string) {
  throw Error(msg);
}

export function isDev() {
  return process.env.NODE_ENV == 'development';
}
