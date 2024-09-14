export type Tab = {
  active: boolean;
  audible: boolean;
  autoDiscardable: boolean;
  discarded: boolean;
  favIconUrl: string;
  groupId: number;
  height: number;
  highlighted: boolean;
  id: number;
  incognito: boolean;
  index: number;
  lastAccessed: number;
  mutedInfo: {
    muted: boolean;
  };
  pinned: boolean;
  selected: boolean;
  status: 'complete';
  title: string;

  url: string;
  width: number;
  windowId: number;
};

export type Tabs = {
  MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND: number;
  TAB_ID_NONE: number;
  TAB_INDEX_NONE: number;
  /** 查询当前的标签 */
  query(
    data: { active?: boolean; currentWindow?: boolean; [key: string]: unknown },
    callback: (tabList: Tab[]) => undefined,
  ): undefined;
  sendMessage(
    id: number,
    message: unknown,
    callback?: (response: { [key: string]: unknown }) => undefined,
  ): undefined;
};
