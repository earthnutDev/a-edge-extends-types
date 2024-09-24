import { CmConTextMenusCreateProperties } from './contextMenus';
/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName edge-extends-types
 * @FileName tabs.ts
 * @CreateDate  周一  09/11/2024
 * @Description 窗口组
 ****************************************************************************/

import { injectDetails } from './extensionTypes';
import { CmI18nLanguage } from './i18n';

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
 * -  mutedInfo?: CmMutedInfo  标签页静音相关
 * -  openerTabId?: boolean  打开盖标签页的名称
 * -  pendingUrl?: string  在提交之前，标签页导航到的网址
 * -  pinned: boolean  是否已固定
 * -  selected: boolean  ~~是否已选择~~ ，官方建议使用 highlighted
 * -  sessionId?: string  绘画的 id
 * -  status?: CmTabStatus  标签页的状态
 * -  title?: string  标题
 * -  url?: string  网址
 * -  width?: number  宽
 * -  windowId: number   窗口的 id
 * */
export type CmTabsTab = {
  /**  是否活跃 */
  active: boolean;
  /** 在过去的几秒钟是否发声 */
  audible?: boolean;
  /** 当资源不足时，是否舍弃 */
  autoDiscardable: boolean;
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
  /** 是否是舍弃的标签 */
  discarded: boolean;
  /** 标签页静音相关 */
  mutedInfo?: CmMutedInfo;
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
  status?: CmTabStatus;
  /** 标题 */
  title?: string;
  /** 网址 */
  url?: string;
  /** 宽 */
  width?: number;
  /**  窗口的 id*/
  windowId: number;
};

/** 查询标签时的参数 */
export type CmTabsQueryProperties = {
  /** 是否活跃 */
  active?: boolean;
  /** 标签页是否位于当前窗口中 */
  currentWindow?: boolean;
  /** 是否可听 */
  audible?: boolean;
  /** 当资源不足时，浏览器是否可以自动舍弃标签页 */
  autoDiscardable?: boolean;
  /** 所属的群组 */
  groupId?: number;
  /** 索引 */
  index?: number;
  /** 是否高亮 */
  highlight?: boolean;
  /** 是否为最后一个聚焦的窗口中 */
  lastFocusedWindow?: boolean;
  /** 是否已固定 */
  pinned: boolean;
  /** ~~是否已选择~~ ，官方建议使用 highlighted */
  selected: boolean;
  /** 网址 */
  url?: string;
  /**  窗口的 id*/
  windowId: number;
  /** 标签页的状态 */
  status?: CmTabStatus;
  /** 标题 */
  title?: string;
  /** 是否是舍弃的标签 */
  discarded: boolean;
  /** 标签页静音相关 */
  mutedInfo?: CmMutedInfo;
};

/** ## 窗口的状态
 * - unloaded 已卸载
 * - loading 加载
 * - complete 完成
 *
 */
export type CmTabStatus = 'unloaded' | 'loading' | 'complete';

/** ## 窗口类型
 * - normal   标注
 * - popup    弹出
 * - panel    面板
 * - app      程序
 * - devtools 开发
 *
 */
export type CmWindowType = 'normal' | 'popup' | 'panel' | 'app' | 'devtools';

/** ## 自定义标签页的缩放更改处理方式
 *
 * -  defaultZoomFactor 缩放的级别，在调用 `tab.getZoomSettings` 时返回
 * -  model {@link CmZoomSettingMode} 定义缩放的变化
 * - scope {@link CmZoomSettingsScope}  缩放的范围
 */
export type CmZoomSettings = {
  /** 缩放的级别，在调用 `tab.getZoomSettings` 时返回 */
  defaultZoomFactor?: number;
  /** 定义缩放的变化 */
  model: CmZoomSettingMode;
  /** 缩放的范围 */
  scope?: CmZoomSettingsScope;
};

/** ### 缩放的变化
 * - automatic     浏览器执行处理
 * - manual        覆盖自动处理缩放更的的功能
 * - disabled      停用缩放
 * */
export type CmZoomSettingMode = 'automatic' | 'manual' | 'disabled';

/** ### 缩放更改的
 *  在 `automatic` 模式下，默认为 `pre-origin` ，否则为 `per-tab`
 *
 * - per-origin 缩放更改保留在缩放页面的原点中
 * - per-tab    缩放行为的更改仅在此标签页生效
 */
export type CmZoomSettingsScope = 'per-origin' | 'per-tab';

/** # CmMutedInfo
 *
 *  - extensionId {@link String}  更改静音状态插件的 id
 *  - muted {@link Boolean} 已设置为静音
 *  - reason {@link CmMutedInfoReason} 标签页设定为静音的原因
 *
 */
export type CmMutedInfo = {
  /** 更改静音状态插件的 id */
  extensionId: string;
  /** 已设置为静音 */
  muted: boolean;
  /** 标签页设定为静音的原因 */
  reason?: CmMutedInfoReason;
};

/** 标签页设定为静音的原因 */
export type CmMutedInfoReason = 'user' | 'capture' | 'extension';

/** ## 创建信的标签页
 *   - active: boolean  是否活跃
 *  - index: number 标签在窗口i的序列
 *  - openerTabId?: boolean 打开盖标签页的名称
 *  - pinned: boolean 是否已固定
 *  - selected: boolean ~~是否已选择~~ ，官方建议使用 highlighted
 *  - url?: string 网址 *
 *  - windowId: number  窗口的 id
 */
export type CmTabsCreateProperties = {
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
export type CmTabs = {
  /** # 每秒调用 `captureVisibleTa` 的最大次数
   *
   * ***其开销较大，不宜多用*** */
  MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND: number;
  /** # 表示没有浏览器标签页的 ID */
  TAB_ID_NONE: number;
  /** # 表示 tab_strip 中不存在标签页索引的索引  */
  TAB_INDEX_NONE: number;
  /** # 获取窗口的可见区域
   *  *扩展程序必须拥有 <all_urls> 的权限或 <activeTab> 的权限*\
   *
   *
   * @param windowId  窗口的 id ，默认为当前窗口
   * @param options   { type?: 'jpeg'; quality?: number }  图片信息？
   * @param callback  回调
   */
  captureVisibleTab(
    windowId: number,
    options?: { type?: 'jpeg'; quality?: number },
    callback?: (dataUrl: string) => void,
  ): Promise<string>;
  /** # 连接到指定标签页中的内容脚本
   *
   * 在当前扩展程序的指定标签页中运行的每个内容脚本中都会触发
   *
   */
  connect(
    tableId: number,
    connectInfo: { documentId?: string; frameId?: string; name?: string },
  ): Promise<string>;
  /** #  创建新的标签页  */
  create(
    createProperties: CmTabsCreateProperties,
    callback?: (tab?: CmTabsTab) => void,
  ): void;
  /** # 检测浏览器的主要语言 */
  detectLanguage(
    tabId?: number,
    callback?: (language: CmI18nLanguage) => void,
  ): Promise<string>;
  /** # 舍弃某个标签页 */
  discard(
    tabId?: number,
    callback?: (tab?: CmTabsTab) => void,
  ): Promise<CmTabsTab | void>;
  /** # 复制某个标签页  */
  duplicate(
    tabId: number,
    callback?: (tab?: CmTabsTab) => void,
  ): Promise<CmTabsTab | void>;
  /** # 获取某标签详细信息 */
  get(tabId: number, callback?: (tab: CmTabsTab) => void): Promise<CmTabsTab>;
  /** # 获取指定窗口中所有标签页的详细信息 */
  getAllInWindow(
    windowId?: number,
    callback?: (tabs: CmTabsTab[]) => void,
  ): Promise<CmTabsTab[]>;
  /** # 获取要执行此脚本调用的标签 */
  getCurrent(callback?: (tab?: CmTabsTab) => void): Promise<CmTabsTab | void>;
  /** # 获取指定标签页的当前缩放比例 */
  getZoom(
    tabId?: number,
    callback?: (zoomFactor: number) => void,
  ): Promise<number>;
  /**  # 获取指定标签页的当前缩放设置 */
  getZoomSettings(
    tabId?: number,
    callback?: (zoomSettings: CmZoomSettings) => void,
  ): Promise<CmZoomSettings>;
  /** # 返回到上一页 */
  goBack(tabId?: number, callback?: () => void): Promise<void>;
  /** 前往下一页 */
  goForward(tabId?: number, callback?: () => void): Promise<void>;
  /** # 将一个或多个标签页添加到指定分组
   *
   *  *如果未指定分组，则会将指定标签页添加到新创建的分组*
   */
  group(
    options: {
      createProperties: {
        windowId?: number;
      };
      groupId?: number;
      tabIds: number | number[];
    },
    callback?: (groupId: number) => void,
  ): void;
  /** #  高亮窗口 */
  highlight(
    highlightInfo: {
      tabs: number | number[];
      windowId?: number;
    },
    callback: (window: Window) => void,
  ): Promise<Window>;
  /**  ~~insertCSS~~
   *
   *  *在 Manifest V3  中，替换为 scripting.insertCSS*
   */
  insertCSS(
    tabId?: number,
    /**  @ts-ignore:   */
    details: injectDetails,
    callback?: () => void,
  ): void;
  /** # 将一个或多个标签页移至窗口内的新位置，或移至新窗口
   *  请注意：标签页只能移入和移出常规 (window.type === "normal") 窗口  */
  move(
    tabIds: number | number[],
    /** 移动参数 */
    moveProperties: {
      index: number;
      windowId?: number;
    },
    callback?: (tabs: CmTabsTab | CmTabsTab[]) => void,
  ): void;
  /** # 查询当前的标签 */
  query(
    queryInfo: CmTabsQueryProperties,
    callback?: (tabList: CmTabsTab[]) => void,
  ): void;
  /**  # 重新加载标签页 */
  reload(
    tabId?: number,
    /** 是否绕过本地储存 */
    reloadProperties?: {
      bypassCache: boolean;
    },
    callback?: () => void,
  ): Promise<void>;
  /** 移除标签 */
  remove(tabIds: number | number[], callback?: () => void): Promise<void>;
  /** ~~移除 css~~
   *
   *  *在 Manifest V3  中，替换为 scripting.removeCSS*
   *
   */
  removeCSS(
    tabId?: number,
    /**  @ts-ignore:   */
    details: DeleteInjectionDetails,
    callback?: () => void,
  ): Promise<void>;
  /**  # 向特定标签页发送消息 */
  sendMessage(
    tabId: number,
    /** 消息 此消息应为 JSON 类型 */
    message: unknown,
    /** 消息参数 */
    options?: {
      documentId?: string;
      frameId?: number;
    },
    callback?: (response: { [key: string]: unknown }) => void,
  ): Promise<void>;
  /** ~~向指定标签页中的内容脚本发送单个请求，其中包含在发回响应时运行的可选回调函数~~
   *
   *  *在 Manifest V3  中，替换为 runtime.sendMessage*
   *
   */
  sendRequest(
    tabId: number,
    request: unknown,
    callback?: (response: unknown) => void,
  ): Promise<void>;
  /**  缩放指定的标签页 */
  setZoom(
    tabId?: number,
    /**  @ts-ignore:   */
    zoomFactor: number,
    callback: () => void,
  ): Promise<void>;
  /**  指定标签页的缩放设置 */
  setZoomSettings(
    tabId?: number,
    /**  @ts-ignore:   */
    zoomSettings: CmZoomSettings,
    callback: () => void,
  ): Promise<void>;
  /** # 将一个或多个标签页从其各自的分组中移除
   *
   * 如果有任何群组为空，系统会将其删除。 */
  ungroup(tabIds: number | number[], callback?: () => void): Promise<void>;
  /** # 修改标签页的属性
   *
   * *系统不会修改未在 updateProperties 中指定的属性*
   *  */
  update(
    tabId?: number,
    /**  @ts-ignore:   */
    updateProperties: {
      /**  是否活跃 */
      active?: boolean;
      /** 当资源不足时，是否舍弃 */
      autoDiscardable?: boolean;
      /** 标签是否高亮显示 */
      highlighted?: boolean;
      /** 是否已被静音 */
      muted?: boolean;
      /** 是否已固定 */
      pinned?: boolean;
      /** 打开盖标签页的名称 */
      openerTabId?: boolean;
      /** ~~是否已选择~~ ，官方建议使用 highlighted */
      selected?: boolean;
      /** 网址 */
      url?: string;
    },
    callback: () => void,
  ): Promise<CmTabsTab | undefined>;
  /**  # 窗口的活动标签页变化
   *
   * *在触发此事件时可能无法设置该标签页的网址，但您可以监听 onUpdated 事件，以便在设置了网址时收到通知*
   *
   *
   */
  onActivated: {
    addListener(
      callback: (activeInfo: {
        /** 已处于活动标签页的标签页 id */
        tabId: number;
        /** 更改活动标签页窗口的 id */
        windowId: number;
      }) => void,
    ): void;
  };
  /** ~~ 在窗口中选定的标签页发生变化时触发 ~~
   *
   * *请使用 `tabs.onActivated`*
   */
  onActiveChanged: {
    addListener(
      callback: (activeInfo: {
        /** 已处于活动标签页的标签页 id */
        tabId: number;
        /** 更改活动标签页窗口的 id */
        windowId: number;
      }) => void,
    ): void;
  };
  /** # 在标签页附加到窗口时触发
   *
   * 例如:因为它在窗口之间移动
   * */
  onAttached: {
    addListener(
      callback: (
        tabId: number,
        activeInfo: {
          newPosition: number;
          newWindowId: number;
        },
      ) => void,
    ): void;
  };
  /** # 创建标签页时触发
   * 请注意，在触发此事件时可能无法设置标签页的网址和标签页组成员资格，但您可以监听 onUpdated 事件，以便在设置了网址或标签页添加到标签页组时收到通知 */
  onCreated: {
    addListener(callback: (tab: CmTabsTab) => void): void;
  };
  /** # 在标签页与窗口分离时触发
   * 例如:因为它在窗口之间移动 */
  onDetached: {
    addListener(
      callback: (
        tabId: number,
        detachInfo: { oldPosition: number; oldWindowId: number },
      ) => void,
    ): void;
  };
  /** #  ~~在窗口中突出显示或选中的标签页发生变化时触发~~
   *
   *  请使用 `tabs.onHighlighted`
   */
  onHighlightChanged: {
    addListener(
      callback: (highlightInfo: {
        /** 已处于活动标签页的标签页 id */
        tabId: number;
        /** 更改活动标签页窗口的 id */
        windowId: number;
      }) => void,
    ): void;
  };
  /** #  在窗口中突出显示或选中的标签页发生变化时触发
   *
   */
  onHighlighted: {
    addListener(
      callback: (highlightInfo: {
        /** 已处于活动标签页的标签页 id */
        tabId: number;
        /** 更改活动标签页窗口的 id */
        windowId: number;
      }) => void,
    ): void;
  };
  /** # 在标签页内移动标签页时触发
   * - 系统只会触发一个移动事件，表示用户直接移动的标签页
   * - 对于为响应手动移动标签页而必须移动的其他标签页，系统不会触发移动事件
   * - 在窗口之间移动标签页时，不会触发此事件
   */
  onMoved: {
    addListener(
      callback: (
        tabId: number,
        moveInfo: {
          fromIndex: number;
          toIndex: number;
          /** 更改活动标签页窗口的 id */
          windowId: number;
        },
      ) => void,
    ): void;
  };
  /** # 关闭标签页时触发 */
  onRemoved: {
    addListener(
      callback: (
        tabId: number,
        removeInfo: {
          /** 当标签页因其父窗口关闭而关闭时为 true */
          isWindowClosing: boolean;
          /** 更改活动标签页窗口的 id */
          windowId: number;
        },
      ) => void,
    ): void;
  };
  /** # 在标签页因预渲染或即时预览而被替换为另一个标签页时触发   */
  onReplaced: {
    addListener(
      callback: (addedTabId: number, removedTabId: number) => void,
    ): void;
  };
  /** # ~~在窗口中选定的标签页发生变化时触发~~
   *
   * 请使用 `tabs.onActivated`
   */
  onSelectionChanged: {
    addListener(
      callback: (
        tabId: number,
        selectInfo: {
          windowId: number;
        },
      ) => void,
    ): void;
  };
  /** # 在更新标签页时触发 */
  onUpdated: {
    addListener(
      callback: (
        tabId: number,
        changeInfo: {
          /** 标签页是否已静音 */
          audible?: boolean;
          /** 自动舍弃 */
          autoDiscardable?: boolean;
          /** 是否是舍弃的标签 */
          discarded?: boolean;
          /** 标签的图标 */
          favIconUrl?: string;
          /** 标签所属的群组的 id */
          groupId: number;
          /** 是否已固定 */
          pinned: boolean;
          /** 标签页静音相关 */
          mutedInfo?: CmMutedInfo;
          /** 标签页的状态 */
          status?: CmTabStatus;
          /** 标题 */
          title?: string;
          /** 网址 */
          url?: string;
        },
        tab: CmTabsTab,
      ) => void,
    ): void;
  };
  onZoomChange: {
    addListener(callback: () => void): void;
  };
};
