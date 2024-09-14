export type OnChangedT = {
  addListener(
    callback: (
      pref: {
        [key: string]: {
          oldValue: unknown;
          newValue: unknown;
        };
      },
      areaName: 'local' | 'sync',
    ) => undefined,
  ): undefined;
};
export type CallbackT = (result: { [key: string]: unknown }) => undefined;

export type Storage = {
  AccessLevel: {
    TRUSTED_AND_UNTRUSTED_CONTEXTS: 'TRUSTED_AND_UNTRUSTED_CONTEXTS';
    TRUSTED_CONTEXTS: 'TRUSTED_CONTEXTS';
  };
  local: {
    QUOTA_BYTES: number;
    clear(): undefined;
    get(keys: string[], callback?: CallbackT): undefined;
    getBytesInUse(): undefined;
    onChanged: OnChangedT;
    remove(list: string[], callback?: CallbackT): undefined;
    set(data: { [key: string]: unknown }, callback?: CallbackT): undefined;
  };
  managed: {
    clear(): undefined;
    get(keys: string[], callback?: CallbackT): undefined;
    getBytesInUse(): undefined;
    onChanged: OnChangedT;
    remove(list: string[], callback?: CallbackT): undefined;
    set(data: { [key: string]: unknown }, callback?: CallbackT): undefined;
  };
  onChanged: OnChangedT;
  sync: {
    MAX_ITEMS: number;
    MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;
    MAX_WRITE_OPERATIONS_PER_HOUR: number;
    MAX_WRITE_OPERATIONS_PER_MINUTE: number;
    QUOTA_BYTES_PER_ITEM: number;
    QUOTA_BYTES: number;
    clear(): undefined;
    get(keys: string[], callback?: CallbackT): undefined;
    getBytesInUse(): undefined;
    onChanged: OnChangedT;
    remove(list: string[], callback?: CallbackT): undefined;
    set(data: { [key: string]: unknown }, callback?: CallbackT): undefined;
  };
};
