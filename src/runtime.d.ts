/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName edge-extends-types
 * @FileName runtime.ts
 * @CreateDate  周一  09/11/2024
 * @Description en
 ****************************************************************************/

/**
 *  消息发送者
 */
type CmRuntimeSender = {
  documentId: string;
  documentLifecycle: string;
  frameId: number;
  id: string;
  origin: string;
  tab: Tab;
  url: string;
};

/**  # runtime
 * - `sendMessage`  发送消息，多用以嵌入脚本
 * - `onMessage`   消息机制
 * - `reload`       重新加载扩展
 *
 */
declare namespace chrome.runtime {
  /** 发送消息，多用以嵌入脚本 */
  export function sendMessage(
    data: unknown,
    callback?: (result: unknown) => undefined,
  ): undefined;
  /** 消息机制 */
  declare namespace onMessage {
    export function addListener(
      listenerEvent: (
        request: unknown,
        sender: CmRuntimeSender,
        sendResponse: unknown,
      ) => undefined,
    ): undefined;
  }
  /** 重新加载扩展 */
  export function reload(): undefined;
}
