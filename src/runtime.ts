/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName edge-extends-types
 * @FileName runtime.ts
 * @CreateDate  周一  09/11/2024
 * @Description en
 ****************************************************************************/
import { CmTabsTab } from './tabs';

/** #  用于匹配特定扩展程序上下文的过滤器
 *
 *  - 匹配的上下文必须与所有指定的过滤条件匹配；
 *  - 未指定的任何过滤器将匹配所有可用的上下文
 *  - 因此，“{}”过滤器将匹配所有可用上下文
 * */

export type ContextFilter = {
  contextIds?: string[];
  contextTypes?: ContextType[];
  documentIds?: string[];
  documentOrigins?: string[];
  documentUrls?: string[];
  frameIds?: number[];
  incognito?: boolean;
  tabIds?: number[];
  windowIds?: number[];
};

/** # 内容类型
 *
 *  -  `TAB`  将上下文类型指定为制表符
 *  -  `POPUP` 以扩展程序弹出式窗口的形式指定上下文类型
 *  -  `BACKGROUND` 将上下文类型指定为` Service Worker`。
 *  -  `OFFSCREEN_DOCUMENT` 将上下文类型指定为屏幕外文档
 *  -  `SIDE_PANEL` 将上下文类型指定为侧边栏
 */
export type ContextType =
  | 'TAB'
  | 'POPUP'
  | 'BACKGROUND'
  | 'OFFSCREEN_DOCUMENT'
  | 'SIDE_PANEL';

/** #  上下文托管扩展程序内容
 *
 */
export type ExtensionContext = {
  /**  此上下文的唯一标识符 */
  contextId: string;
  /** 与此字段对应的上下文类型 */
  contextType: ContextType;
  /**  与此上下文关联的文档的 `UUID`
   *
   * 如果此上下文未托管在文档中，则值为 `undefined` */
  documentId?: string;
  /** 与此上下文关联的文档的来源
   *
   * 如果上下文未托管在文档中，则为未定义 */
  documentOrigins?: string;
  /**  与此上下文关联的文档的网址
   *
   * 如果上下文未托管在文档中，则该值为未定义 */
  documentUrls?: string;
  /** 此上下文的帧的 `ID`
   *
   * 如果此上下文未托管在框架中，则为 -1 */
  frameIds?: number;
  /** 上下文是否与无痕个人资料相关联 */
  incognito?: boolean;
  /** 此上下文的标签页 `ID`
   *
   * 如果此上下文未托管在标签页中，则为 -1 */
  tabId: number;
  /**  此上下文的窗口 `ID`
   *
   * 如果此上下文未托管在窗口中，则为 -1 */
  windowId: number;
};

/** 消息发送者信息 */
export type CmRuntimeSender = {
  /** 打开连接的文档的 `UUID` */
  documentId?: string;
  /** 创建端口时，打开连接的文档所处的生命周期
   *
   * *请注意，自端口创建以来，文档的生命周期状态可能已发生变化*
   * */
  documentLifecycle?: string;
  /** 打开连接的帧
   *
   * - 0 表示顶级帧
   * - 正值表示子帧
   *
   * *仅当已设置 `tab` 时，才会设置此字段*
   *  */
  frameId?: number;
  /** 打开连接的扩展程序的 `ID`（如果有）  */
  id?: string;
  /** 打开连接的本机应用的名称（如果有）  */
  nativeApplication?: string;
  /** # 打开连接的网页或框架的来源
   *
   * 它可以不同于网址属性（例如 `about:blank`），也可以是不透明的（例如沙盒化 `iframe` ）。
   *
   * 如果我们不能通过网址立即判断来源是否可信，这对于确定来源是否可信非常有用
   * */
  origin?: string;
  tab?: CmTabsTab;
  /**  打开连接的网页或框架的 `TLS` 通道 `ID`（如果扩展程序已请求并且可用） */
  tlsChannelId?: string;
  url?: string;
};
/** # 分派此事件的原因
 *
 * -  `install` 将事件原因指定为安装
 * -  `update` 以扩展程序更新的形式指定事件原因
 * -  `chrome_update` 将事件原因指定为 `Chrome` 更新
 * -  `shared_module_update` 将事件原因指定为共享模块的更新
 *
 */
export type OnInstalledReason =
  | 'install'
  | 'update'
  | 'chrome_update'
  | 'shared_module_update';

/** # 分派事件的原因
 *
 * - `app_update`  以应用更新的形式指定事件原因
 * - `os_update` 将事件原因指定为操作系统更新
 * - `periodic` 以定期重启应用的形式指定事件原因
 *
 */
export type OnRestartRequiredReason = 'app_update' | 'os_update' | 'periodic';

/** # 机器的处理器架构
 *
 *  -  `arm` 将处理器架构指定为 `arm`
 *  -  `arm64` 将处理器架构指定为 `arm64`
 *  -  `x86-32` 将处理器架构指定为 `x86-32`
 *  -  `x86-64` 将处理器架构指定为 `x86-64`
 *  -  `mips` 以 mips 形式指定处理器架构
 *  -  `mips64` 将处理器架构指定为 `mips64`
 *
 */
export type PlatformArch =
  | 'arm'
  | 'arm64'
  | 'x86-32'
  | 'x86-64'
  | 'mips'
  | 'mips64';

/** 包含当前平台相关信息的对象  */
export type PlatformInfo = {
  /** 机器的处理器架构 */
  arch: PlatformArch;
  /** 原生客户端架构。这可能与某些平台上的 `arch` 不同 */
  nacl_arch: PlatformNaclArch;
  /** 运行 Chrome 的操作系统  */
  os: PlatformOs;
};

/** # 机器的处理器架构
 *
 *  -  `arm` 将处理器架构指定为 `arm`
 *  -  `x86-32` 将处理器架构指定为 `x86-32`
 *  -  `x86-64` 将处理器架构指定为 `x86-64`
 *  -  `mips` 以 `mips` 形式指定处理器架构
 *  -  `mips64` 将处理器架构指定为 `mips64`
 *
 */
export type PlatformNaclArch = 'arm' | 'x86-32' | 'x86-64' | 'mips' | 'mips64';
/** # 运行 `Chrome` 的操作系统  */
export type PlatformOs =
  | 'mac'
  | 'win'
  | 'android'
  | 'cros'
  | 'linux'
  | 'openbsd'
  | 'fuchsia';

export type Port = {
  /** # 端口的名称
   * 在调用 `runtime.connect` 时指定 */
  name: string;
  /** # 在端口与另一端断开连接时触发
   *
   * 如果端口因错误而断开连接，可以设置 `runtime.lastError`。
   *
   * 如果端口通过 `disconnect` 关闭，则仅在另一端触发此事件。此事件最多触发一次
   * */
  onDisconnect: {
    addListener(callback: (port: Port) => void): unknown;
  };
  /**  端口的另一端调用 `postMessage` 时会触发此事件 */
  onMessage: {
    addListener(callback: (message: unknown, port: Port) => void): unknown;
  };
  /** 此属性仅存在于传递到 `onConnect` / `onConnectExternal` / `onConnectNative` 监听器的端口上 */
  sender?: CmRuntimeSender;
  /** # 立即断开端口连接
   *
   * - 在已断开连接的端口上调用 `disconnect()` 不会产生任何影响
   * - 如果某个端口断开连接，系统将不会再向此端口分派新事件
   *
   * */
  disconnect(): void;
  /** # 向端口的另一端发送消息
   *
   *  - 如果端口断开，系统会抛出错误
   * - 要发送的消息应为 `JSON` 结构
   */
  postMessage(message: unknown): void;
};

/** 更新检查的结果
 *
 * - `throttled` 指定状态检查已节流。如果经过短时间内的反复检查，就可能会发生这种情况
 * - `no_update` 表示没有可安装的更新
 * - `update_available` 指定有可用更新可供安装
 *
 */
export type RequestUpdateCheckStatus =
  | 'throttled'
  | 'no_update'
  | 'update_available';

/**  这个类型具体是啥我也不知道 */
export type DirectoryEntry = unknown;
/**  # `runtime`
 * - `sendMessage`  发送消息，多用以嵌入脚本
 * - `onMessage`   消息机制
 * - `reload`       重新加载扩展
 *
 */
export type CmRuntime = {
  /** 扩展的 ID */
  id: string;
  /** 在调用 `API` 函数失败时填充错误消息；否则将处于未定义状态。
   *
   * 这仅在该函数的回调范围内定义。
   *
   * 如果生成了错误，但您未在回调中访问 `runtime.lastError`，
   *
   * 则系统会向控制台记录一条消息，其中会列出产生该错误的 `API` 函数。
   *
   * 返回 `promise` 的 `API` 函数不会设置此属性 */
  lastError: {
    message?: string;
  };
  /** 尝试连接某个扩展程序（例如后台页面）或其他扩展程序/应用中的监听器
   *
   * 这对连接到扩展程序进程的内容脚本、应用间/扩展程序通信以及网络消息传递非常有用
   *
   * *请注意，这不会连接到内容脚本中的任何监听器。扩展程序可以通过 `tabs.connect` 连接到嵌入在标签页中的内容脚本* */
  connect(
    extensionId?: string,
    connectInfo?: {
      /** 对于监听连接事件的进程，是否将 `TLS` 通道 `ID` 传递到 `onConnectExternal` */
      includeTlsChannelId?: boolean;
      name?: string;
    },
  ): Port;
  /** # 连接到主机中的原生应用
   *
   * *此方法需要 "nativeMessaging" 权限*
   *
   */
  connectNative(application: string): Port;
  /** # 检索 JavaScript“window”对象
   *
   * - 如果后台页面是事件页面，系统将确保它在调用回调之前已加载
   * - 如果没有后台网页，则会设置错误
   *
   * ***仅限前台***
   */
  getBackgroundPage(callback?: (backgroundPage?: Window) => void): void;

  /** 发送消息，多用以嵌入脚本 */
  sendMessage(
    data: unknown,
    callback?: (result: unknown) => void,
  ): Promise<Window>;
  /** 获取与此扩展程序关联的活跃上下文的相关信息
   *
   * - chrome 116 以上版本
   * - MV3 以上版本
   */
  getContexts(
    filter: ContextFilter,
    callback?: (contexts: ExtensionContext[]) => void,
  ): Promise<ExtensionContext>;
  /** 从清单中返回有关应用或扩展程序的详细信息  */
  getManifest(): object;
  /** # 返回软件包目录的 `DirectoryEntry`
   *
   *  *这里出现的两个 `unknown` 为类型 `DirectoryEntry`，但是我又找不到该类型的引入点*
   *
   * @param callback
   * @returns Promise<DirectoryEntry>
   */
  getPackageDirectoryEntry(
    callback?: (directoryEntry: DirectoryEntry) => void,
  ): Promise<DirectoryEntry>;
  /**  返回有关当前平台的信息 */
  getPlatformInfo(
    callback?: (platformInfo: PlatformInfo) => void,
  ): Promise<PlatformInfo>;
  /**  将应用/扩展程序安装目录中的相对路径转换为完全限定网址 */
  getURL(path: string): string;
  /**  如果可能，打开扩展程序的选项页面 */
  openOptionsPage(callback: () => void): Promise<void>;
  /** # 重新加载扩展
   * - 自助服务终端模式不支持此方法
   * - 对于自助服务终端模式，请使用 `chrome.runtime.restart()` 方法
   */
  reload(): void;
  /** # 请求立即检查此应用/扩展程序的更新
   *
   * ***大多数扩展程序/应用都不应使用此方法，因为 Chrome 已每隔几小时执行一次自动检查，并且您无需调用 requestUpdateCheck 即可监听 runtime.onUpdateAvailable 事件***
   */
  requestUpdateCheck(
    callback: (result: {
      status: RequestUpdateCheckStatus;
      version?: string;
    }) => void,
  ): object;
  /** 当应用在自助服务终端模式下运行时，重启 ChromeOS 设备。否则，为空操作 */
  restart(): void;
  /** 指定秒数后，当 ChromeOS 设备在自助服务终端模式下运行时，重启 ChromeOS 设备。
   *
   * - 如果在上述时间结束之前再次调用，将会延迟重新启动
   * - 如果调用时将值设置为 -1，则系统将取消重新启动
   * - 在非自助服务终端模式下，这项服务为空操作
   * - 只能由第一个扩展程序反复调用以调用此 API
   * */
  restartAfterDelay(seconds: number, callback?: () => void): Promise<void>;
  /** # 向扩展程序或其他扩展程序/应用中的事件监听器发送一条消息
   *  与 `runtime.connect` 类似，但只发送一条消息，并附有可选的响应。
   *
   * - 如果向您的扩展程序发送事件，系统会在您扩展程序的每一帧（发送者的帧除外）中触发 `runtime.onMessage` 事件
   * - 如果将事件发送到其他扩展程序，则会触发 `runtime.onMessageExternal` 事件
   *    ***请注意，扩展程序无法使用此方法向内容脚本发送消息***
   * - 如需向内容脚本发送消息，请使用 `tabs.sendMessage`。  */
  sendMessage(
    /** 要向其发送消息的扩展程序的 ID。如果省略，消息会发送到您自己的扩展程序/应用。如果要从网页发送消息以发送网络消息，则必须提供此参数 */
    extensionId?: string,
    /**  @ts-ignore: 要发送的消息。此消息应为 JSON 格式对象  */
    message: unknown,
    /**  对于监听连接事件的进程，是否将 TLS 通道 ID 传递到 onMessageExternal */
    options?: { includeTlsChannelId?: boolean },
    /** 消息处理程序发送的 JSON 响应对象。如果连接到扩展程序时出错，则调用回调时不使用任何参数，并且 runtime.lastError 将被设置为错误消息 */
    callback?: (response: unknown) => void,
  ): Promise<void>;
  /** # 向原生应用发送一条消息
   *
   * ***此方法需要 `nativeMessaging` 权限***
   * */
  sendNativeMessage(
    application: string,
    message: object,
    callback?: (response: unknown) => void,
  ): Promise<unknown>;
  /** # 设置卸载时要访问的网址
   *
   * 这可用于清理服务器端数据、进行分析和开展问卷调查
   *
   * *不得超过 1023 个字符*
   *  */
  setUninstallURL(url: string, callback?: () => void): Promise<void>;
  /** # ~~有可用的 Chrome 更新时触发，但浏览器需要重启后未立即安装~~
   *
   * ***请使用 `runtime.onRestartRequired`***
   */
  onBrowserUpdateAvailable: {
    addListener(callback: () => void): void;
  };
  /** # 在通过扩展程序进程或内容脚本（通过 `runtime.connect`）建立连接时触发 */
  onConnect: {
    addListener(callback: (port: Port) => void): void;
  };
  /** # 从其他扩展程序（通过 `runtime.connect`）或可外部连接的网站建立连接时触发 */
  onConnectExternal: {
    addListener(callback: (port: Port) => void): void;
  };
  /** #  通过本地应用建立连接时触发
   *
   * ***此活动需要 "nativeMessaging" 权限***
   *
   * ***只有 Chrome 操作系统支持此功能*** */
  onConnectNative: {
    addListener(callback: (port: Port) => void): void;
  };
  /** # 首次安装扩展程序、扩展程序更新到新版本以及 Chrome 更新到新版本时触发  */
  onInstalled: {
    addListener(
      callback: (details: {
        /** 分派此事件的原因 */
        reason: OnInstalledReason;
        /** 指示已更新的导入的共享模块扩展程序的 ID。仅当“原因”存在时，是 `shared_module_update` */
        id?: string;
        /** 表示扩展程序的上一个版本，该版本刚刚更新。仅当“原因”存在时，是 `update` */
        previousVersion?: string;
      }) => void,
    ): void;
  };
  /** # 通过扩展程序进程（通过 `runtime.sendMessage`）或内容脚本（通过 `tabs.sendMessage`）发送消息时触发 */
  onMessage: {
    addListener(
      listenerEvent: (
        message: unknown,
        sender: CmRuntimeSender,
        sendResponse: () => void,
      ) => void,
    ): boolean | undefined;
  };
  /**    从其他扩展程序（通过 runtime.sendMessage）发送消息时触发。不能在内容脚本中使用 */
  onMessageExternal: {
    addListener(
      callback: (
        message: any,
        sender: CmRuntimeSender,
        sendResponse: () => void,
      ) => boolean | undefined,
    ): void;
  };
  /** # 在需要重启应用或运行应用的设备时触发。
   *
   * - 应用应尽早关闭其所有窗口，以便让重启发生
   * - 如果应用不执行任何操作，则系统会在 24 小时的宽限期过后强制执行重启
   * - 目前，系统只会针对 Chrome 操作系统自助服务终端应用触发此事件。
   */
  onRestartRequired: {
    addListener(callback: (reason: OnRestartRequiredReason) => void): void;
  };
  /** 在安装了此扩展程序的配置文件首次启动时触发。启动无痕模式个人资料时不会触发此事件，即使此扩展程序在“分屏”模式下运行也是如此无痕模式 */
  onStartup: {
    addListener(callback: () => void): void;
  };
  /** #  在即将卸载前发送到活动页面
   *
   *  这样，扩展程序就有机会进行清理
   *
   * *请注意，由于页面正在卸载，因此处理此事件时启动的任何异步操作不一定会完成*
   *
   * *如果该事件页面在被卸载之前发生了更多活动，则系统会发送 onSuspendCanceled 事件，并且该页面不会卸载* */
  onSuspend: {
    addListener(callback: () => void): void;
  };
  /** 在 onSuspend 之后发送，以指示应用完全不会卸载 */
  onSuspendCanceled: {
    addListener(callback: () => void): void;
  };
  /** # 有可用更新时触发，但应用目前正在运行而没有立即安装
   *
   * - 如果您不执行任何操作，系统将在下次卸载后台页面时安装更新
   * - 如果您希望尽快安装更新，可以明确调用 `chrome.runtime.reload()`
   * - 如果您的扩展程序使用的是持续性后台页面，则后台页面当然永远不会卸载，因此除非您手动调用 `chrome.runtime.reload()` 以响应此事件，否则要等到 Chrome 下次重新启动时，系统才会安装更新
   * - 如果没有处理程序监听此事件，并且您的扩展程序有一个持续的后台页面，则其行为就像调用了 `chrome.runtime.reload()` 来响应此事件一样  */
  onUpdateAvailable: {
    addListener(callback: (details: { version: string }) => void): void;
  };
  /** 通过此扩展程序的用户脚本建立连接时触发 */
  onUserScriptConnect: {
    addListener(callback: (port: Port) => void): void;
  };
  /** 从与同一扩展程序相关联的用户脚本发送消息时触发 */
  onUserScriptMessage: {
    addListener(
      callback: (
        message: any,
        sender: CmRuntimeSender,
        sendResponse: () => void,
      ) => boolean | undefined,
    ): void;
  };
};
