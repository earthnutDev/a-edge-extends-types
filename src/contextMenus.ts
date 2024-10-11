/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName a-edge-extends-types
 * @FileName contextMenus.ts
 * @CreateDate  周一  09/16/2024
 * @Description 邮件快捷键使用
 ****************************************************************************/

import { CmTabsTab } from './tabs';

/** # 右键的类型
 *  支持上下文
 */
export type CmContextMenuContext =
  | 'all'
  | 'page'
  | 'frame'
  | 'selection'
  | 'link'
  | 'editable'
  | 'image'
  | 'audio'
  | 'video'
  | 'launcher'
  | 'action'
  | 'browser_action'
  | 'page_action';

/** # 添加的属性设定
 *  - `checked` {@link Boolean} 是否已选择
 *  - `contexts` {@link CmContextMenuContext}[]    上下文。数组
 *  - `documentUrlPatterns` {@link String}[]  将内容限制为仅应用于网址与某一指定格式相符的文档或框架
 *  - `enabled` {@link Boolean}  此上下文菜单项处于启用状态还是停用状态。默认为 `true`
 *  - `id` {@link String}   要分配给此内容的唯一 ID。活动页面必须使用。不能与此扩展程序的另一个 ID 相同
 *  - `parentId` {@link String} 父菜单项的 ID；这会使该项成为先前添加的项的子项
 *  - `targetUrlPatterns` {@link String}[] 与 `documentUrlPatterns` 类似，根据 `img、audio` 和 `video` 标记的 `src` 属性以及 `a` 标记的 `href` 属性进行过滤
 *  - `title` {@link String} 要在作品中显示的文本
 *  - `type` {@link Enum} 'normal' | 'checkbox' | 'radio' | 'separator' 菜单类型
 *  -  `visible` {@link Boolean} 可见性
 *  -  `onclick?(info:CmContextMenusOnclickData, tab:CmTabsTab)=>void` 回调
 */
export type CmConTextMenusCreateProperties = {
  /** 是否已选择 */
  checked?: boolean;
  /** 上下文
   * ```ts
   * type CmContextMenuContext = "all" | "page" | "frame" | "selection" | "link" | "editable" | "image" | "audio" | "video" | "launcher" | "action" | "browser_action" | "page_action"
   * ```
   *
   */
  contexts?: CmContextMenuContext[];
  /** 将内容限制为仅应用于网址与某一指定格式相符的文档或框架 */
  documentUrlPatterns?: string[];
  /** 此上下文菜单项处于启用状态还是停用状态。默认为 `true` */
  enabled?: boolean;
  /** 要分配给此内容的唯一 ID。活动页面必须使用。不能与此扩展程序的另一个 ID 相同 */
  id?: string;
  /** 父菜单项的 ID；这会使该项成为先前添加的项的子项 */
  parentId?: string;
  /**  与 `documentUrlPatterns` 类\
   * 根据 `img、audio` 和 `video` 标记的 `src` 属性以及 `a `标记的 `href` 属性进行过滤*/
  targetUrlPatterns?: string[];
  /** 要在作品中显示的文本 */
  title?: string;
  /** 菜单的类型 */
  type?: 'normal' | 'checkbox' | 'radio' | 'separator';
  /** 可见 */
  visible?: boolean;
  /** 点击事件 */
  onclick?(info: CmContextMenusOnclickData, tab: CmTabsTab): void;
};

/** # 点击数据
 *
 *  - `checked` {@link Boolean} 点击后选择的状态
 *  - `editable` {@link Boolean} 是否可编辑
 *  - `frameId`  {@link Number} 框架 id
 *  -  `frameUrl` {@link string} 用户点击上下文菜单的元素框架网址
 *  - `linkUrl`  {@link String} 如果该元素是一个链接，则它指向的网址
 *  - `mediaType` {@link String} “image”“video”或“audio”之一如果上下文菜单已在这类元素中激活
 *  - `menuItemId` {@link String} | {@link Number} 用户点击的菜单项的 ID
 *  - `pageUrl` {@link String} 菜单项的网页的网址
 *  - `parentMenuItemId` {@link String} | {@link Number} 所点击项目的父级 ID（如果有）
 *  - `selectionText` {@link String} 上下文选择的文本（如果有）
 *  - `srcUrl` {@link String} 对于包含“src”的元素，系统会显示该元素网址
 *  - `wasChecked` {@link Boolean} 指示复选框或单选项在点击前的状态的标志
 */
export type CmContextMenusOnclickData = {
  /** 点击后选择的状态 */
  checked?: boolean;
  /** 是否可编辑 */
  editable?: boolean;
  /** 框架 id */
  frameId?: string | number;
  /** 用户点击上下文菜单的元素框架网址 */
  frameUrl?: string;
  /** 如果该元素是一个链接，则它指向的网址 */
  linkUrl?: string;
  /** “image”“video”或“audio”之一如果上下文菜单已在这类元素中激活 */
  mediaType?: string;
  /**   用户点击的菜单项的 ID */
  menuItemId?: string | number;
  /** 菜单项的网页的网址 */
  pageUrl?: string;
  /** 所点击项目的父级 ID（如果有） */
  parentMenuItemId?: string | number;
  /**  上下文选择的文本（如果有）*/
  selectionText?: string;
  /** 对于包含“src”的元素，系统会显示该元素网址  */
  srcUrl?: string;
  /** 指示复选框或单选项在点击前的状态的标志 */
  wasChecked?: boolean;
};

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
export type CmContextMenus = {
  /** 特添加到右键菜单的数量上限 */
  ACTION_MENU_TOP_LEVEL_LIMIT: 6;
  /** ## 创建
   *
   *  **CmConTextMenusCreateProperties**
   *  创建参数
   *  ```ts
   *  type CmConTextMenusCreateProperties = {
   *           checked?: boolean;  //  是否已选择
   *           context?: CmContextMenuContext[]; // 上下文
   *           documentUrlPatterns?: string[];//  将内容限制为仅应用于网址与某一指定格式相符的文档或框架
   *           enabled?: boolean;//  此上下文菜单项处于启用状态还是停用状态。默认为 `true`
   *           id?: string;//  要分配给此内容的唯一 ID。活动页面必须使用。不能与此扩展程序的另一个 ID 相同
   *           parentId?: string;//  父菜单项的 ID；这会使该项成为先前添加的项的子项
   *           targetUrlPatterns?: string[]; //   与 `documentUrlPatterns`  根据 `img、audio` 和 `video` 标记的 `src` 属性以及 `a `标记的 `href` 属性进行过滤
   *           title?: string; //  要在作品中显示的文本
   *           type?: 'normal' | 'checkbox' | 'radio' | 'separator'; //  菜单的类型
   *           visible?: boolean; //  可见
   *           onclick(info: CmContextMenusOnclickData, tab: CmTabsTab):void;//  点击事件
   *      };
   * ````
   *
   *  **CmContextMenusOnclickData**
   *
   * ```ts
   *  type CmContextMenusOnclickData = {
   *           checked?: boolean; // 点击后选择的状态
   *           editable?: boolean; // 是否可编辑
   *           frameId?: string | number; // 框架 id
   *           frameUrl?: string; // 用户点击上下文菜单的元素框架网址
   *           linkUrl?: string; // 如果该元素是一个链接，则它指向的网址
   *           mediaType?: string; // “image”“video”或“audio”之一如果上下文菜单已在这类元素中激活
   *           menuItemId?: string | number; //   用户点击的菜单项的 ID
   *           pageUrl?: string; // 菜单项的网页的网址
   *           parentMenuItemId?: string | number; // 所点击项目的父级 ID（如果有）
   *           selectionText?: string; //  上下文选择的文本（如果有）
   *           srcUrl?: string; // 对于包含“src”的元素，系统会显示该元素网址
   *           wasChecked?: boolean; // 指示复选框或单选项在点击前的状态的标志
   *  }
   * ```
   *
   */
  create(
    /**
     * ## 添加的属性设定
     *  ```ts
     * type CmConTextMenusCreateProperties = {
     *     checked?: boolean;
     *     contexts?: CmContextMenuContext[];
     *     documentUrlPatterns?: string[];
     *     enabled?: boolean;
     *     id?: string;
     *     parentId?: string;
     *     targetUrlPatterns?: string[];
     *     title?: string;
     *     type?: "normal" | "checkbox" | "radio" | "separator";
     *     visible?: boolean;
     *     onclick?(info: CmContextMenusOnclickData, tab: CmTabsTab): void;
     * }
     * ```
     * - `checked` {Boolean} 是否已选择
     * - `contexts` {CmContextMenuContext[]} 上下文。数组
     * - `documentUrlPatterns` {String[]} 将内容限制为仅应用于网址与某一指定格式相符的文档或框架
     * - `enabled` {Boolean} 此上下文菜单项处于启用状态还是停用状态。默认为 true
     * - `id` {String} 要分配给此内容的唯一 ID。活动页面必须使用。不能与此扩展程序的另一个 ID 相同
     * - `parentId` {String} 父菜单项的 ID；这会使该项成为先前添加的项的子项
     * - `targetUrlPatterns` {String[]} 与 documentUrlPatterns 类似，根据 `img``、audio` 和 `video` 标记的 `src` 属性以及 a 标 *-记的 `href` 属性进行过滤
     * - `title` String 要在作品中显示的文本
     * - `type` {Enum} 'normal' | 'checkbox' | 'radio' | 'separator' 菜单类型
     * - `visible` {Boolean} 可见性
     * - `onclick` ?(info:CmContextMenusOnclickData, tab:CmTabsTab)=>void 回调
     *
     */
    createProperties: CmConTextMenusCreateProperties,
    callback?: () => void,
  ): number | string;
  /** ## 移除
   *
   * @param menuItemId  要移除的菜单项的 id
   * @param callback  回调函数
   *
   */
  remove(menuItemId: string | number, callback?: () => void): Promise<void>;
  /**  ## 移除所有
   *
   */
  removeAll(callback?: () => void): Promise<void>;
  /** ## 更新项 */
  update(
    id: string | number,
    /**
     * ## 添加的属性设定
     *  ```ts
     * type CmConTextMenusCreateProperties = {
     *     checked?: boolean;
     *     contexts?: CmContextMenuContext[];
     *     documentUrlPatterns?: string[];
     *     enabled?: boolean;
     *     id?: string;
     *     parentId?: string;
     *     targetUrlPatterns?: string[];
     *     title?: string;
     *     type?: "normal" | "checkbox" | "radio" | "separator";
     *     visible?: boolean;
     *     onclick?(info: CmContextMenusOnclickData, tab: CmTabsTab): void;
     * }
     * ```
     * - `checked` {Boolean} 是否已选择
     * - `contexts` {CmContextMenuContext[]} 上下文。数组
     * - `documentUrlPatterns` {String[]} 将内容限制为仅应用于网址与某一指定格式相符的文档或框架
     * - `enabled` {Boolean} 此上下文菜单项处于启用状态还是停用状态。默认为 true
     * - `id` {String} 要分配给此内容的唯一 ID。活动页面必须使用。不能与此扩展程序的另一个 ID 相同
     * - `parentId` {String} 父菜单项的 ID；这会使该项成为先前添加的项的子项
     * - `targetUrlPatterns` {String[]} 与 documentUrlPatterns 类似，根据 `img``、audio` 和 `video` 标记的 `src` 属性以及 a 标 *-记的 `href` 属性进行过滤
     * - `title` String 要在作品中显示的文本
     * - `type` {Enum} 'normal' | 'checkbox' | 'radio' | 'separator' 菜单类型
     * - `visible` {Boolean} 可见性
     * - `onclick` ?(info:CmContextMenusOnclickData, tab:CmTabsTab)=>void 回调
     *
     */
    updateProperties: CmConTextMenusCreateProperties,
    callback?: (info: CmContextMenusOnclickData, tab: CmTabsTab) => void,
  ): Promise<void>;
  /** 用户点击菜单键的触发 */
  onClicked: {
    addListener(
      callback: (info: CmContextMenusOnclickData, tab: CmTabsTab) => void,
    ): void;
  };
};
