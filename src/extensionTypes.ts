/** 插入 css
 *
 * *要注入的脚本或 CSS 的详细信息。必须设置 code 或 file 属性，但不能同时设置两者。*
 *
 */
export type injectDetails = DeleteInjectionDetails & {
  /** JavaScript 或 CSS 将注入选项卡的最快时间。缺省：`document_idle`
   */
  runAt?: RunAt;
};

/** JavaScript 或 CSS 将注入选项卡的最快时间
 *
 * 缺省：`document_idle`
 * - document_start 脚本是在 css 中的任何文件之后注入的，但在构建任何其他 DOM 或运行任何其他脚本之前
 * - document_end 脚本在 DOM 完成后立即注入，但在加载图像和帧等子资源之前。
 * - document_idle 确切时刻取决于文档的复杂程度和加载时间，并针对页面加载速度进行了优化。
 */
export type RunAt = 'document_start' | 'document_end' | 'document_idle';

/**  加载的源 */
export type CSSOrigin = 'user' | 'author';

/** 移除的参数
 *
 * *要移除的脚本或 CSS 的详细信息。必须设置 code 或 file 属性，但不能同时设置两者。*
 *
 */
export type DeleteInjectionDetails = {
  /** 如果为 true ，则将 css 嵌入所有的框架中去 */
  allFrames?: boolean;
  /** css 文本 */
  code?: string;
  /** css 源
   *
   * ```ts
   *  type  CSSOrigin =   "user" | "author"
   * ```
   *
   */
  cssOrigin?: CSSOrigin;
  /** css 文件 */
  file?: string;
  /** 嵌入的框架的 id */
  frameId?: number;
  /** 如果 matchAboutBlank 为 true，则如果您的扩展可以访问其父文档，则代码也会注入到 about：blank 和 about：srcdoc 帧中 */
  matchAboutBlank?: boolean;
};
