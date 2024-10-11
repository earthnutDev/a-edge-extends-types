/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName edge-chrome
 * @FileName devtools.ts
 * @CreateDate  周四  10/10/2024
 * @Description devtools 相关内容
 ****************************************************************************/

/**
 * ## 所检查页面的资源
 *
 *  例如文档、脚本、图片
 */
export type DevResource = {
  /** 网址 */
  url: string;
  /** 获取资源的内容
   * @param callback  回调
   *
   */
  getContent(
    callback: /**
     *
     * @param content 内容文本
     * @param encoding  如果内容未编码，则为空；否则对名称进行编码，目前仅支持 `base64`
     */
    (
      content: string,
      /** 如果内容未编码，则为空；否则对名称进行编码，目前仅支持 `base64` */
      encoding: string,
    ) => void,
  ): void;
  /** 设置资源的内容 */
  setContent(
    /** 资源的新内容 */
    content: string,
    /**
     * - 如果用户已完成资源修改，并且资源的新内容应保留，则为 `true`；
     * - 如果是在用户修改资源过程中发送的微小更改，则为 `false` */
    commit: boolean,
    callback?: (
      /**
       * - 如果资源内容设置成功，则设为 `undefined`；
       * - 否则会描述错误
       * */
      error?: object,
    ) => void,
  ): void;
};

/**
 * ## 表示对文档资源（脚本、图片等）的网络请求
 *
 *
 */
export type DevRequest = {
  /** 响应正文的内容（可能已经过编码） */
  getContent(
    callback: (
      /** 响应正文的内容 */
      content: string,
      /** 如果内容未经编码，则为空，否则为名称编码。目前只支持 base64。  */
      encoding: string,
    ) => void,
  ): void;
};

/**
 * ## 由扩展程序创建的按钮
 */
export type DevButton = {
  /** 在用户点击按钮时触发 */
  onClicked: {
    addListener(callback: () => void): void;
  };
  /** 更新按钮的属性。如果省略某些参数或设为 null，则不会更新相应的属性
   *  -  iconPath    指向按钮的新图标的路径
   *  -  tooltipText 用户将鼠标悬停在按钮上时作为提示显示的文本
   *  -  disabled    按钮是否已停用
   *
   */
  update(iconPath?: string, tooltipText?: string, disabled?: boolean): void;
};

/**
 *
 * ##元素面板
 *
 *  */
export type ElementsPanel = {
  /** 在面板中选择了对象时触发 */
  onSelectionChanged: {
    addListener(callback: () => void): void;
  };
  /** 在面板的边栏中创建一个窗格
   *
   * @param title  标题文本
   * @param callback 回调
   */
  createSidebarPane(
    title: string,
    callback?: (result: ExtensionSidebarPane) => void,
  ): void;
};
/**
 * ## 扩展面板
 */
export type ExtensionPanel = {
  /** 在用户离开面板时触发 */
  onHidden: {
    addListener(callback: () => void): void;
  };
  /**
   *  ## 搜索操作（开始新的搜索、搜索结果导航或取消搜索）时触发
   */
  onSearch: {
    addListener(callback: (action: string, queryString?: string) => void): void;
  };
  /** 在用户切换到面板时触发 */
  onShown: {
    addListener(callback: (window: Window) => void): void;
  };
  /**
   * ## 将按钮附加到面板的状态栏
   *
   *
   *  @param iconPath 按钮图标的路径。该文件应包含一张 64x24 像素的图片，由两个 32x24 的图标组成。当按钮处于不活动状态时，使用左侧图标；按下按钮时，系统会显示右侧图标
   * @param tooltipText 用户将鼠标悬停在按钮上时作为提示显示的文本
   * @param disabled 按钮是否已停用
   */
  createStatusBarButton(
    /**  按钮图标的路径。该文件应包含一张 64x24 像素的图片，由两个 32x24 的图标组成。当按钮处于不活动状态时，使用左侧图标；按下按钮时，系统会显示右侧图标 */
    iconPath: string,
    /** 用户将鼠标悬停在按钮上时作为提示显示的文本 */
    tooltipText: string,
    /** 按钮是否已停用 */
    disabled: boolean,
  ): DevButton;
};

/**
 * ## 用于创建边栏窗格的 ExtensionSidebarPane 对象
 */
export type ExtensionSidebarPane = {
  /** 在用户离开面板时触发 */
  onHidden: {
    addListener(callback: () => void): void;
  };
  /** 在用户切换到面板时触发 */
  onShown: {
    addListener(callback: (window: Window) => void): void;
  };
  /**
   *  ## 设置要在检查的网页中求值的表达式。结果会显示在边栏窗格中
   *
   * @param expression 要在所检查网页的上下文中求值的表达式。JavaScript 对象和 DOM 节点显示在类似于控制台/watch 的可展开树中
   * @param rootTitle 表达式树根的可选标题
   * @param callback
   */
  setExpression(
    expression: string,
    rootTitle?: string,
    callback?: () => void,
  ): void;
  /**
   *
   * ## 设置边栏的高度
   */
  setHeight(height: string): void;
  /**
   * ## 设置要显示在边栏窗格中的 JSON 兼容对象
   *
   * @param jsonObject 要在所检查网页的上下文中显示的对象。根据调用方（API 客户端）的上下文进行评估
   * @param rootTitle 表达式树根的可选标题
   * @param callback
   */
  setObject(
    jsonObject: string,
    rootTitle?: string,
    callback?: () => void,
  ): void;
  /**
   *
   * ## 设置要在边栏窗格中显示的 HTML 网页
   *
   *  @param  path 要在边栏中显示的扩展程序页面的相对路径
   */
  setPage(path: string): void;
};

/**
 *
 * ## 表示“来源”面板
 */
export type SourcesPanel = {
  /**  在面板中选择了对象时触发 */
  onSelectionChanged: {
    addListener(callback: () => void): void;
  };
  /** 在面板的边栏中创建一个窗格
   *
   * @param title  标题文本
   * @param callback
   */
  createSidebarPane(
    title: string,
    callback?: (result: ExtensionSidebarPane) => void,
  ): ExtensionSidebarPane;
};

/**
 *
 * ## `Recorder` 面板调用以自定义 `Recorder` 面板的插件接口
 */
export type RecorderExtensionPlugin = {
  /**
   *
   * ## 允许扩展程序实现自定义重放功能
   *
   * @param recording 正在录制
   */
  replay(recording: object): void;
  /**
   *
   * ## 将录音从 `Recorder` 面板格式转换为字符串
   *
   * @param recording 正在录制
   */
  stringify(recording: object): void;
  /**
   * ## 将录音步骤从 `Recorder` 面板格式转换为字符串
   *
   * @param step 记录用户与网页互动的步骤
   */
  stringifyStep(step: object): void;
};

/**
 *  ## 表示扩展程序创建的要嵌入的 `Recorder` 面板的视图
 *
 * ----
 *
 *  chrome 112 及以上版本
 *
 * ----
 *
 *
 */

export type RecorderView = {
  /** 在视图隐藏时触发  */
  onHidden: {
    /**
     * ### 监听事件
     *
     * @param callback
     *
     */
    addListener(callback: () => void): void;
  };
  /** 在显示视图时触发 */
  onShown: {
    /**
     * ### 监听事件
     *
     * @param callback
     *
     */
    addListener(callback: () => void): void;
  };
  /** 表示扩展程序希望在 `Recorder` 面板中显示此视图 */
  show(): void;
};

/** 使用 `chrome.devtools.inspectedWindow API` 与检查的窗口进行交互
 *
 * ---- 
 * 
 * **必须在 `manifest.json` 中声明 `devtools_page`**
 * 
 * ----
 * 
 * - 获取被检查页面的标签页 ID
 * - 在被检查的窗口中评估代码
 * - 重新加载页面或者获取页面中的资源列表
 *
 * `tabId` 属性提供可与 `chrome.tabs.*` 一起使用的标签页标识符 `API` 调用。但请注意，`chrome.tabs.* API` 不会提供给开发者工具 扩展程序网页 。
 *
 * - *需要将标签页 `ID` 传递到后台页面并从中调用 `chrome.tabs.* API` 函数*
 *
 * `reload` 方法可用于重新加载被检查的网页。此外，调用方还可以指定 用户代理字符串的替换值、在网页加载时提前注入的脚本，或 用于强制重新加载缓存资源的选项。

* 使用 `getResources` 调用和 `onResourceContent` 事件获取资源列表 （文档、样式表、脚本、图片等）。`getContent`和 `Resource` 类的 `setContent` 方法以及 `onResourceContentCommitted` 事件可以 可用于支持资源内容的修改，例如由外部编辑者修改。
 * 
 * 
 * 
 **/

export type InspectedWindow = {
  /** ## 要检查的标签页的 `ID`
   *
   * 此 `ID` 可能会与 `chrome.tabs` 配合使用。
   *
   * *Compute Engine API* 来创建虚拟机实例 */
  tabId: number;
  /**
   *
   * ## ~~执行代码~~
   */
  eval(
    /** 表达式 */
    expression: string,
    /** 选项 */
    options?: {
      /** 如果指定，则系统会在网址与指定网址匹配的 iframe 上计算表达式。默认情况下，表达式将在所检查页面的顶部帧进行求值  */
      frameURL?: string;
      /**
       *
       * ## 在与指定来源匹配的扩展程序的内容脚本上下文中评估表达式
       *
       * ----
       *
       * ***Chrome 107 及更高版本***
       *
       *  ----
       *
       * - 如果指定，`scriptExecutionContext` 会覆盖 `true` 对 `useContentScriptContext` 进行设置 */
      scriptExecutionContext?: string;
      /**
       * - 在调用扩展程序的内容脚本的上下文中评估表达式，前提是内容脚本已注入检查的网页
       * - 否则，系统不会对表达式求值，并且会在调用回调函数时将异常参数设置为 `isError` 字段设置为 `true` 且 `code` 字段设置为 `E_NOTFOUND` 的对象
       */
      useContentScriptContext?: boolean;
    },
    callback?: (
      /** 评估结果 */
      result: object,
      /**
       *
       * ## 在计算表达式时出现异常提供的详细信息的对象
       *
       * */
      exceptionInfo: {
        /** 代码 */
        code: string;
        /** 说明  */
        description: string;
        /** 详细信息 */
        details: unknown[];
        /** 如果错误发生在对表达式求值之前，DevTools 端是否发生 */
        isError: boolean;
        /** 在评估的代码产生未处理的异常时设置 */
        isException: boolean;
        /** 在评估的代码产生未处理的异常时设置 */
        value: string;
      },
    ) => void,
  ): void;
  /**
   *  从检查过的页面中检索资源列表
   *
   *  @param resources  所检查页面的资源
   */
  getActiveResourcesInfo(
    /**
     * ## 所检查页面的资源
     *     * ```ts
     *     (alias) type Resource = {
     *     url: string;
     *     getContent(callback: (content: string, encoding: string) => void): void;
     *     setContent(content: string, commit: boolean, callback?: (error?: object) => void): void;
     * }
     * ```
     * 例如文档、脚本、图片
     */
    resources: DevResource[],
  ): void;
  /** 重新加载检查的网页  */
  reload(reloadOptions: {
    /** 是否绕过缓存 */
    ignoreCache?: boolean;
    /** ## 插入的脚本
     *
     * -  该脚本将在加载时立即注入到所检查网页的每一帧中，先于该帧的任何脚本
     * - 此脚本在后续重新加载后将不再注入
     */
    injectedScript?: string;
    /** 如果已指定，该字符串将替换在加载所检查网页的资源时发送的 User-Agent HTTP 标头的值。该字符串还将覆盖 navigator.userAgent 属性的值，该值会返回到在检查页面中运行的任何脚本 */
    userAgent?: string;
  }): void;
  /** 将新资源添加到检查的网页时触发 */
  onResourceAdded: {
    addListener(resource: DevResource): void;
  };
  /** 在提交资源的新定版本时触发 */
  onResourceContentCommitted: {
    addListener(resource: DevResource, content: string): void;
  };
};

/**
 *  ## 使用 `chrome.devtools.network API` 检索由开发者工具在 `Network` 面板中显示的网络请求的相关信息
 *
 * ----
 *
 * **必须在 `manifest.json` 中声明 `devtools_page`**
 *
 * ----
 *
 */

export type DevNetwork = {
  /**  返回包含所有已知网络请求的 HAR 日志  */
  getHAR(callback: (harLog: object) => void): void;
  /** 在被检查的窗口导航到新页面时触发 */
  onNavigated: {
    addListener(callback: (url: string) => void): void;
  };
  /** 在网络请求完成且所有请求数据都可用时触发 */
  onRequestFinished: {
    addListener(callback: (request: DevRequest) => void): void;
  };
};

/**
 * ## 使用 `chrome.devtools.panels API` 将您的扩展程序集成到开发者工具窗口界面中
 *
 * - 创建自己的面板
 * - 访问现有面板
 * - 添加边栏
 *
 * ----
 *
 * **必须在 `manifest.json` 中声明 `devtools_page`**
 *
 * ----
 */
export type DevPanels = {
  /** 元素面板
   * ```ts
   * type ElementsPanel = {
   *     onSelectionChanged: {
   *         addListener(callback: () => void): void;
   *     };
   *     createSidebarPane(title: string, callback?: (result: ExtensionSidebarPane) => void): void;
   * }
   * ```
   *
   */
  elements: ElementsPanel;
  /**
   * ## “来源”面板
   *
   * ```ts
   * type SourcesPanel = {
   *     onSelectionChanged: {
   *         addListener(callback: () => void): void;
   *     };
   *     createSidebarPane(
   *            title: string,
   *            callback?: (result: ExtensionSidebarPane) => void
   *      ):  ExtensionSidebarPane;
   * }
   * ```
   */
  sources: SourcesPanel;
  /**
   *  ## 创建扩展程序面板
   * -  title 在开发者工具工具栏中的扩展程序图标旁边显示的标题
   * -  iconPath 面板图标相对于扩展程序目录的路径
   * -  pagePath 面板的 HTML 页面相对于扩展程序目录的路径
   * -  callback
   *
   */
  create(
    /** 在开发者工具工具栏中的扩展程序图标旁边显示的标题 */
    title: string,
    /** 面板图标相对于扩展程序目录的路径 */
    iconPath: string,
    /** 面板的 HTML 页面相对于扩展程序目录的路径 */
    pagePath: string,
    callback?: (panel: ExtensionPanel) => void,
  ): void;
  /**
   *
   * ## 向开发者工具发出在开发者工具面板中打开网址的请求
   *
   * -  url 要打开的资源的网址
   * -  lineNumber 指定加载资源时要滚动到的行号
   * -  columnNumber 指定加载资源时要滚动到的列号
   * -  callback
   *
   *
   */
  openResource(
    /** 要打开的资源的网址  */
    url: string,
    /** 指定加载资源时要滚动到的行号 */
    lineNumber: number,
    /** 指定加载资源时要滚动到的列号
     *
     *
     * ----
     *
     *  chrome 114 以上版本
     *
     * ----
     *
     */
    columnNumber?: number,
    callback?: () => void,
  ): void;
  /**  指定当用户点击开发者工具窗口中的资源链接时要调用的函数
   *
   * - 如需取消设置处理程序，请调用不带形参的方法或传递 null 作为形参 */
  setOpenResourceHandler(callback: (resource: DevResource) => void): void;
};

/**
 *
 * ## 使用 `chrome.devtools.performance API` 可监听开发者工具“性能”面板中的录制状态更新
 *
 * 借助 chrome.devtools.performance API，开发者可以与 Chrome 开发者工具中“性能”面板的录制功能进行互动
 *
 * 您可以使用此 API 在录制开始或停止时收到通知
 *
 */
export type DevPerformance = {
  /** 在“性能”面板开始录制时触发 */
  onProfilingStarted: {
    addListener(callback: () => void): void;
  };
  /** 在“性能”面板停止录制时触发 */
  onProfilingStopped: {
    addListener(callback: () => void): void;
  };
};

/**
 *
 * ## 使用 `chrome.devtools.recorder API` 自定义开发者工具中的  [`Recorder`](https://developer.chrome.com/docs/devtools/recorder?hl=zh-cn) 面板
 *
 * ----
 *
 *  chrome 105 版本及以上
 *
 * ----
 */
export type DevRecorder = {
  /**
   * ## 创建可以处理重放的视图
   *
   * 此视图将嵌入到 `Recorder` 面板中
   *
   * @param title {string} 在开发者工具工具栏中的扩展程序图标旁边显示的标题
   * @param pagePth {string} 面板的 HTML 页面相对于扩展程序目录的路径
   */
  createView(title: string, pagePth: string): RecorderView;
  /**
   *
   * ##注册录音机扩展程序插件
   *
   * @param plugin 实现 `RecorderExtensionPlugin` 接口的实例
   * @param name 插件的名称
   * @param mediaType 插件生成的字符串内容的媒体类型
   *
   * */
  registerRecorderExtensionPlugin(
    plugin: RecorderExtensionPlugin,
    name: string,
    mediaType: string,
  ): void;
};

/** # 开发工具
 *
 * -  `inspectedWindow`  使用 `chrome.devtools.inspectedWindow API` 与检查的窗口进行交互
 * -  `network`  使用 `chrome.devtools.network API` 检索由开发者工具在 `Network` 面板中显示的网络请求的相关信息
 *
 */
export type Devtools = {
  /**  使用 `chrome.devtools.inspectedWindow API` 与检查的窗口进行交互
   *
   *
   * ----
   *
   * **必须在 `manifest.json` 中声明 `devtools_page`**
   *
   * ----
   *
   */
  inspectedWindows: InspectedWindow;
  /**
   *  ## 使用 `chrome.devtools.network API` 检索由开发者工具在 `Network` 面板中显示的网络请求的相关信息
   *
   * ----
   *
   * **必须在 `manifest.json` 中声明 `devtools_page`**
   *
   * ----
   *
   */
  network: DevNetwork;
  /**
   * ## 使用 `chrome.devtools.panels API` 将您的扩展程序集成到开发者工具窗口界面中
   *
   * - 创建自己的面板
   * - 访问现有面板
   * - 添加边栏
   *
   * ----
   *
   * **必须在 `manifest.json` 中声明 `devtools_page`**
   *
   * ----
   *
   */
  panels: DevPanels;
  /**
   *
   * ## 使用 `chrome.devtools.performance API` 可监听开发者工具“性能”面板中的录制状态更新
   *
   * 借助 chrome.devtools.performance API，开发者可以与 Chrome 开发者工具中“性能”面板的录制功能进行互动
   *
   * 您可以使用此 API 在录制开始或停止时收到通知
   */
  performance: DevPerformance;
  /**
   *
   * ## 使用 `chrome.devtools.recorder API` 自定义开发者工具中的  [`Recorder`](https://developer.chrome.com/docs/devtools/recorder?hl=zh-cn) 面板
   * ----
   *
   *  chrome 105 版本及以上
   *
   * ----
   */
  recorder: DevRecorder;
};
