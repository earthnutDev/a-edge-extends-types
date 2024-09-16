/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName edge-extends-types
 * @FileName index.ts
 * @CreateDate  周一  09/16/2024
 * @Description en
 ****************************************************************************/
import { contextMenusT } from './contextMenus';
import { Action } from './action';

import { Storage } from './storage';

import { Tabs } from './tabs';

import { Runtime } from './runtime';
import { i18nT } from './i18n';
import { ttsT } from './tts';
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
  storage: Storage;
  tabs: Tabs;
  /** #  tts 语言配置
   * - `speak(str:string,options?:ttsSpeakOptionsT,callback:()=>undefined):undefined` 开始
   * - `stop():undefined;` 停止
   * - `getVoices(callback: (voice: TtsVoice) => undefined): undefined`  获取可用语音
   * - `isSpeaking(callback:(speaking:boolean)=>undefined):Promise<boolean>` 当前是否在播放
   * - `pause():undefined` 暂停语音
   * - `resume():undefined` 从暂停中恢复
   * -  `onVoiceChanged`  当语音发生变化
   */
  tts: ttsT;
  /** # i18n
   *
   * -  `detectLanguage(text:string,callback: (result: detectedLanguageCallbackT) => undefined):undefined` 检测出 3 种语言
   * -  `getAcceptLanguages(): Promise<languageListT[]>` 支持的语言
   * - `getMessage(opt:| '@@extension_id'| '@@ui_locale'| '@@bidi_dir'| 'bidi_reversed_dir'| 'bidi_start_edge'| 'bidi_end_edge'| string,): string` 获取文本
   * - `getUILanguage(): languageListT`  获取浏览器默认文本语言
   *
   *  使用：
   *  - 在 manifest 文件中使用，使用 `__MSG_name__` 的形式即可
   *  - 在 css 文件中使用类似于在 manifest 中的使用，既可以是属性，也可以是值中显示
   *  - 在 js 中直接使用 `chrome.i18n.getMessage("name")`
   *
   *
   */
  i18n: i18nT;
  /**  # runtime
   * - `sendMessage`  发送消息，多用以嵌入脚本
   * - `onMessage`   消息机制
   * - `reload`       重新加载扩展
   *
   */
  runtime: Runtime;
  /**  # 右键菜单栏设置
   *
   *  - `ACTION_MENU_TOP_LEVEL_LIMIT` {@link Number} 特添加到右键菜单的数量上限
   *  - `create(createProperties: CreateProperties,callback: () => undefined,):number|string` 添加
   *  - `remove(menuItemId:string|number,callback:()=>undefined):Promise<undefined>` 移除特定 id 的项
   *  - `removeAll(callback?:()=>undefined):Promise<undefined>` 移除所有项
   *  -  `update(id: string | number,updateProperties: CreateProperties,callback?: (info: OnclickData, tab: Tab) => undefined,): Promise<undefined>` 更新项
   *  - `onClicked: {addListener(callback: (info: OnclickData, tab: Tab) => undefined,): undefined;}` 点击触发事件
   *
   *  */
  contextMenus: contextMenusT;
};
