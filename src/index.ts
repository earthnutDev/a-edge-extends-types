import { Action } from './action';

import { Storage } from './storage';

import { Tabs } from './tabs';

import { Runtime } from './runtime';

export type Chrome = {
  action: Action;
  storage: Storage;
  tabs: Tabs;

  runtime: Runtime;
};
