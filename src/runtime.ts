import { Tab } from './tabs';

export type Runtime = {
  sendMessage(data: unknown, callback?: (result: unknown) => void): void;
  onMessage: {
    addListener(
      request: unknown,
      sender: Tab,
      sendResponse: (...args: any[]) => unknown,
    ): void;
  };
};
