import type { Chrome } from './src/index';

/** # Chrome *  */
//  @ts-ignore
//  @preserve something will come if you use rollup cleanup
var chrome: Chrome = { ...chrome };

export { chrome };
export type { Chrome };

export { keepChrome } from './src/extendKeepChrome';
