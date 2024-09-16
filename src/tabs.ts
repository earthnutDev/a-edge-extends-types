/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName edge-extends-types
 * @FileName tabs.ts
 * @CreateDate  周一  09/11/2024
 * @Description 窗口组
 ****************************************************************************/

import { languageListT } from './i18n';

/** #  窗口信息
 *
 * *太多了，明天中秋，不想写了，好想有个钱多的班上上*
 *
 * -  active: boolean   是否活跃
 * -  audible?: boolean  在过去的几秒钟是否发声
 * -  autoDiscardable: boolean  当资源不足时，是否舍弃
 * -  discarded: boolean  是否是舍弃的标签
 * -  favIconUrl?: string  标签的图标
 * -  groupId: number  标签所属的群组的 id
 * -  height?: number  标签页的高度
 * -  highlighted: boolean  标签是否高亮显示
 * -  id?: number  标签页的 id
 * -  incognito: boolean  标签是否在无痕模式
 * -  index: number  标签在窗口i的序列
 * -  lastAccessed: number  上次访问该标签的时间
 * -  mutedInfo?: MutedInfo  标签页静音相关
 * -  openerTabId?: boolean  打开盖标签页的名称
 * -  pendingUrl?: string  在提交之前，标签页导航到的网址
 * -  pinned: boolean  是否已固定
 * -  selected: boolean  ~~是否已选择~~ ，官方建议使用 highlighted
 * -  sessionId?: string  绘画的 id
 * -  status?: TabStatus  标签页的状态
 * -  title?: string  标题
 * -  url?: string  网址
 * -  width?: number  宽
 * -  windowId: number   窗口的 id
 * */
export type Tab = {
  /**  是否活跃 */
  active: boolean;
  /** 在过去的几秒钟是否发声 */
  audible?: boolean;
  /** 当资源不足时，是否舍弃 */
  autoDiscardable: boolean;
  /** 是否是舍弃的标签 */
  discarded: boolean;
  /** 标签的图标 */
  favIconUrl?: string;
  /** 标签所属的群组的 id */
  groupId: number;
  /** 标签页的高度 */
  height?: number;
  /** 标签是否高亮显示 */
  highlighted: boolean;
  /** 标签页的 id */
  id?: number;
  /** 标签是否在无痕模式 */
  incognito: boolean;
  /** 标签在窗口i的序列 */
  index: number;
  /** 上次访问该标签的时间 */
  lastAccessed: number;
  /** 标签页静音相关 */
  mutedInfo?: MutedInfo;
  /** 打开盖标签页的名称 */
  openerTabId?: boolean;
  /** 在提交之前，标签页导航到的网址 */
  pendingUrl?: string;
  /** 是否已固定 */
  pinned: boolean;
  /** ~~是否已选择~~ ，官方建议使用 highlighted */
  selected: boolean;
  /** 绘画的 id */
  sessionId?: string;
  /** 标签页的状态 */
  status?: TabStatus;
  /** 标题 */
  title?: string;
  /** 网址 */
  url?: string;
  /** 宽 */
  width?: number;
  /**  窗口的 id*/
  windowId: number;
};

/** ## 窗口的状态
 * - unloaded 已卸载
 * - loading 加载
 * - complete 完成
 *
 */
export type TabStatus = 'unloaded' | 'loading' | 'complete';

/** ## 窗口类型
 * - normal   标注
 * - popup    弹出
 * - panel    面板
 * - app      程序
 * - devtools 开发
 *
 */
export type WindowType = 'normal' | 'popup' | 'panel' | 'app' | 'devtools';

/** ## 自定义标签页的缩放更改处理方式
 *
 * -  defaultZoomFactor 缩放的级别，在调用 `tab.getZoomSettings` 时返回
 * -  model {@link ZoomSettingMode} 定义缩放的变化
 * - scope {@link ZoomSettingsScope}  缩放的范围
 */
export type ZoomSettings = {
  /** 缩放的级别，在调用 `tab.getZoomSettings` 时返回 */
  defaultZoomFactor?: number;
  /** 定义缩放的变化 */
  model: ZoomSettingMode;
  /** 缩放的范围 */
  scope?: ZoomSettingsScope;
};

/** ### 缩放的变化
 * - automatic     浏览器执行处理
 * - manual        覆盖自动处理缩放更的的功能
 * - disabled      停用缩放
 * */
export type ZoomSettingMode = 'automatic' | 'manual' | 'disabled';

/** ### 缩放更改的
 *  在 `automatic` 模式下，默认为 `pre-origin` ，否则为 `per-tab`
 *
 * - per-origin 缩放更改保留在缩放页面的原点中
 * - per-tab    缩放行为的更改仅在此标签页生效
 */
export type ZoomSettingsScope = 'per-origin' | 'per-tab';

/** # MutedInfo
 *
 *  - extensionId {@link String}  更改静音状态插件的 id
 *  - muted {@link Boolean} 已设置为静音
 *  - reason {@link MutedInfoReason} 标签页设定为静音的原因
 *
 */
export type MutedInfo = {
  /** 更改静音状态插件的 id */
  extensionId: string;
  /** 已设置为静音 */
  muted: boolean;
  /** 标签页设定为静音的原因 */
  reason?: MutedInfoReason;
};

/** 标签页设定为静音的原因 */
export type MutedInfoReason = 'user' | 'capture' | 'extension';

/** ## 创建信的标签页
 *   - active: boolean  是否活跃
 *  - index: number 标签在窗口i的序列
 *  - openerTabId?: boolean 打开盖标签页的名称
 *  - pinned: boolean 是否已固定
 *  - selected: boolean ~~是否已选择~~ ，官方建议使用 highlighted
 *  - url?: string 网址 *
 *  - windowId: number  窗口的 id
 */
export type createPropertiesT = {
  /**  是否活跃 */
  active: boolean;
  /** 标签在窗口i的序列 */
  index: number;
  /** 打开盖标签页的名称 */
  openerTabId?: boolean;
  /** 是否已固定 */
  pinned: boolean;
  /** ~~是否已选择~~ ，官方建议使用 highlighted */
  selected: boolean;
  /** 网址 */
  url?: string;
  /**  窗口的 id*/
  windowId: number;
};

/** # 标签页系统
 * 可以创建标签、修改、重新排列。还提供了语言、截取屏幕截图、与标签页通信等
 *
 *
 */
export type Tabs = {
  /** 每秒调用 `captureVisibleTa` 的最大次数，其开销较大，不宜多用 */
  MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND: number;
  /** 表示没有浏览器标签页的 ID */
  TAB_ID_NONE: number;
  /** 表示 tab_strip 中不存在标签页索引的索引  */
  TAB_INDEX_NONE: number;
  /** 获取窗口的可见区域
   *
   * @param windowId  窗口的 id ，默认为当前窗口
   * @param options   { type?: 'jpeg'; quality?: number }  图片信息？
   * @param callback  回调
   */
  captureVisibleTab(
    windowId: number,
    options?: { type?: 'jpeg'; quality?: number },
    callback?: (dataUrl: string) => undefined,
  ): Promise<string>;
  /** ## 连接到指定标签页中的内容脚本
   *
   * 在当前扩展程序的指定标签页中运行的每个内容脚本中都会触发
   *
   */
  connect(
    tableId: number,
    connectInfo: { documentId?: string; frameId?: string; name?: string },
  ): Promise<string>;
  /**   */
  create(
    createProperties: createPropertiesT,
    callback?: (tab?: Tab) => undefined,
  ): undefined;
  /** 检测浏览器的主要语言 */
  detectLanguage(
    tabId?: number,
    callback?: (language: languageListT) => undefined,
  ): Promise<string>;
  /** 舍弃某个标签页 */
  discard(
    tabId?: number,
    callback?: (tab?: Tab) => undefined,
  ): Promise<Tab | undefined>;
  /** 复制某个标签页  */
  duplicate(
    tabId: number,
    callback?: (tab?: Tab) => undefined,
  ): Promise<Tab | undefined>;
  /** 获取某标签内容 */
  get(tabId: number, callback?: (tab: Tab) => undefined): Promise<Tab>;
  /** 获取指定窗口中所有标签页的详细信息 */
  getAllInWindow(
    windowId?: number,
    callback?: (tabs: Tab[]) => undefined,
  ): Promise<Tab[]>;
  /** 获取要执行此脚本调用的标签 */
  getCurrent(callback?: (tab?: Tab) => undefined): Promise<Tab | undefined>;
  /** 获取指定标签页的当前缩放比例 */
  getZoom(
    tabId?: number,
    callback?: (zoomFactor: number) => undefined,
  ): Promise<number>;
  /**  获取指定标签页的当前缩放设置 */
  getZoomSettings(
    tabId?: number,
    callback?: (zoomSettings: ZoomSettings) => undefined,
  ): Promise<ZoomSettings>;
  /** 返回到上一页 */
  goBack(tabId?: number, callback?: () => undefined): Promise<undefined>;
  /** 前往下一页 */
  goForward(tabId?: number, callback?: () => undefined): Promise<undefined>;
  /**  TODO 从 group 以后没有 */
  /** 查询当前的标签 */
  query(
    data: { active?: boolean; currentWindow?: boolean; [key: string]: unknown },
    callback: (tabList: Tab[]) => undefined,
  ): undefined;
  sendMessage(
    id: number,
    message: unknown,
    callback?: (response: { [key: string]: unknown }) => undefined,
  ): undefined;
};
