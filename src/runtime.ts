import { Tab } from './tabs';

export type Runtime = {
  sendMessage(data: unknown, callback?: (result: unknown) => void): void;
  onMessage: {
    addListener(
      listenerEvent: (
        request: unknown,
        sender: Tab,
        sendResponse: unknown,
      ) => void,
    ): void;
  };
};
