import type { Chrome } from './src/index';

/** # Chrome
 *   他下面有很多，但是我用到的并不多
 *  - action
 *  - storage
 *  - tabs
 *  - i18n
 *  - tts
 *  - runtime
 *  - contextMenus
 */
//  @ts-ignore
//  @preserve something will come if you use rollup cleanup
var chrome: Chrome = { ...chrome };

export { chrome };
export type { Chrome };

export { keepChrome } from './src/extendKeepChrome';
