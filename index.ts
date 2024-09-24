import { Action } from './src/action';
import { CmContextMenus } from './src/contextMenus';
import { CmI18n } from './src/i18n';
import { CmRuntime } from './src/runtime';
import { CmStorage } from './src/storage';
import { CmTabs } from './src/tabs';
import { CmTts } from './src/tts';

/** # Chrome
 *  他下面有很多，但是我用到的并不多
 *  - action
 *  - storage
 *  - tabs
 *  - i18n
 *  - tts
 *  - runtime
 *  - contextMenus
 */
export type Chrome = {
  action: Action;

  /** # storage
   *
   * - `AccessLevel` 不至知道啥东西
   * - `local` 本地数据储存中心
   * - `managed` 管理员管理开发者设定的储存形式
   * - `onChanged` 当储存数据发生变化
   * - `sync`      云端的数据
   */
  storage: CmStorage;
  tabs: CmTabs;
  /** #  tts 语言配置
   * - `speak(str:string,options?:CmTtsSpeakOptions,callback:()=>void):void` 开始
   * - `stop():void;` 停止
   * - `getVoices(callback: (voice: CmTtsVoice) => void): void`  获取可用语音
   * - `isSpeaking(callback:(speaking:boolean)=>void):Promise<boolean>` 当前是否在播放
   * - `pause():void` 暂停语音
   * - `resume():void` 从暂停中恢复
   * -  `onVoiceChanged`  当语音发生变化
   */
  tts: CmTts;
  /** # i18n
   *
   * -  `detectLanguage(text:string,callback: (result: detectedLanguageCallbackT) =>void):void` 检测出 3 种语言
   * -  `getAcceptLanguages(): Promise<CmI18nLanguage[]>` 支持的语言
   * - `getMessage(opt:| '@@extension_id'| '@@ui_locale'| '@@bidi_dir'| 'bidi_reversed_dir'| 'bidi_start_edge'| 'bidi_end_edge'| string,): string` 获取文本
   * - `getUILanguage(): CmI18nLanguage`  获取浏览器默认文本语言
   *
   *  使用：
   *  - 在 manifest 文件中使用，使用 `__MSG_name__` 的形式即可
   *  - 在 css 文件中使用类似于在 manifest 中的使用，既可以是属性，也可以是值中显示
   *  - 在 js 中直接使用 `chrome.i18n.getMessage("name")`
   *
   *
   */
  i18n: CmI18n;
  /**  # runtime
   * - `sendMessage`  发送消息，多用以嵌入脚本
   * - `onMessage`   消息机制
   * - `reload`       重新加载扩展
   *
   */
  runtime: CmRuntime;
  /**  # 右键菜单栏设置
   *
   *  - `ACTION_MENU_TOP_LEVEL_LIMIT` {@link Number} 特添加到右键菜单的数量上限
   *  - `create(createProperties: CmConTextMenusCreateProperties,callback: () =>void,):number|string` 添加
   *  - `remove(menuItemId:string|number,callback:()=>void):Promise<void>` 移除特定 id 的项
   *  - `removeAll(callback?:()=>void):Promise<void>` 移除所有项
   *  -  `update(id: string | number,updateProperties: CmConTextMenusCreateProperties,callback?: (info: CmContextMenusOnclickData, tab: CmTabsTab) =>void,): Promise<void>` 更新项
   *  - `onClicked: {addListener(callback: (info: CmContextMenusOnclickData, tab: CmTabsTab) =>void,):void;}` 点击触发事件
   *
   *  */
  contextMenus: CmContextMenus;
};
