#! /usr/bin/env node

// import { runOtherCode } from 'a-node-tools';
import { writeFile } from 'node:fs';

writeFile(
  'chrome.d.ts',
  `import { Chrome } from 'a-edge-extends-types';
/**
 *  将 \`chrome \`加入全局
 *  
 *  可使用 \`window.chrome\` 访问
 *   
 *  亦可直接使用 \`chrome\` 直接使用
 * 
 */
declare global {
  interface Window {
  /**
   * # Chrome
   *    
   *  - contextMenus  上下文菜单键（俗称右键）管理
   *  - [devtools](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools?hl=zh-cn)       开发者工具控制台相关
   *  - i18n          国际化相关的
   *  - storage       本地（local）、云端（sync）、会话（session）储存相关
   *  - runtime       执行中
   *  - tabs          标签页管理，可获取标签页及丢弃、新建、复制... 
   *  - tts           语音相关 
   * 
  */
 chrome: Chrome;
 }
 
 /**
  * # Chrome
  *    
  *  - contextMenus  上下文菜单键（俗称右键）管理
  *  - [devtools](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools?hl=zh-cn)      开发者工具控制台相关
  *  - i18n          国际化相关的
  *  - runtime       执行中
  *  - storage       本地（local）、云端（sync）、会话（session）储存相关
  *  - tabs          标签页管理，可获取标签页及丢弃、新建、复制... 
  *  - tts           语音相关 
  * 
  * 
 */
 const chrome: Chrome;
}
`,
  'utf-8',
  function () {},
);
