import { Tab } from './tabs';

export type CmROMASender = {
  documentId: string;
  documentLifecycle: string;
  frameId: number;
  id: string;
  origin: string;
  tab: Tab;
  url: string;
};

export type Runtime = {
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
        sender: CmROMASender,
        sendResponse: unknown,
      ) => undefined,
    ): undefined;
  };
  /** 重新加载扩展 */
  reload(): undefined;
};
