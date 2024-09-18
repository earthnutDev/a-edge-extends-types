/** chrome */
/// <reference path="./src/index.d.ts" />
/** action */
/// <reference path="./src/action.d.ts" />
/** tabs */
/// <reference path="./src/tabs.d.ts" />
/** i18n */
/// <reference path="./src/i18n.d.ts" />
/** contextMenus */
/// <reference path="./src/contextMenus.d.ts" />
/** runtime */
/// <reference path="./src/runtime.d.ts" />
/** storage */
/// <reference path="./src/storage.d.ts" />
/** tts */
/// <reference path="./src/tts.d.ts" />

/**  全局属性 */
interface Window {
  chrome: typeof chrome;
}
