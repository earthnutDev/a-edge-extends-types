/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName edge-extends-types
 * @FileName runtime.ts
 * @CreateDate  周一  09/11/2024
 * @Description en
 ****************************************************************************/
import { CmTabsTab } from './tabs';

export type CmRuntimeSender = {
  documentId: string;
  documentLifecycle: string;
  frameId: number;
  id: string;
  origin: string;
  tab: CmTabsTab;
  url: string;
};

/**  # runtime
 * - `sendMessage`  发送消息，多用以嵌入脚本
 * - `onMessage`   消息机制
 * - `reload`       重新加载扩展
 *
 */
export type CmRuntime = {
  /** 发送消息，多用以嵌入脚本 */
  sendMessage(
    data: unknown,
    callback?: (result: unknown) => undefined,
  ): undefined;
  /** 消息机制 */
  onMessage: {
    addListener(
      listenerEvent: (
        request: unknown,
        sender: CmRuntimeSender,
        sendResponse: unknown,
      ) => undefined,
    ): undefined;
  };
  /** 重新加载扩展 */
  reload(): undefined;
};
