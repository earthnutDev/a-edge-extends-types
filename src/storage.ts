type onChanged = {
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
  ): void;
};
type callback = (result: { [key: string]: unknown }) => undefined;

export type Storage = {
  AccessLevel: {
    TRUSTED_AND_UNTRUSTED_CONTEXTS: 'TRUSTED_AND_UNTRUSTED_CONTEXTS';
    TRUSTED_CONTEXTS: 'TRUSTED_CONTEXTS';
  };
  local: {
    QUOTA_BYTES: number;
    clear(): void;
    get(keys: string[], callback?: callback): void;
    getBytesInUse(): void;
    onChanged: onChanged;
    remove(list: string[], callback?: callback): void;
    set(data: { [key: string]: unknown }, callback?: callback): void;
  };
  managed: {
    clear(): void;
    get(keys: string[], callback?: callback): void;
    getBytesInUse(): void;
    onChanged: onChanged;
    remove(list: string[], callback?: callback): void;
    set(data: { [key: string]: unknown }, callback?: callback): void;
  };
  onChanged: {};
  sync: {
    MAX_ITEMS: number;
    MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;
    MAX_WRITE_OPERATIONS_PER_HOUR: number;
    MAX_WRITE_OPERATIONS_PER_MINUTE: number;
    QUOTA_BYTES_PER_ITEM: number;
    QUOTA_BYTES: number;
    clear(): void;
    get(keys: string[], callback?: callback): void;
    getBytesInUse(): void;
    onChanged: onChanged;
    remove(list: string[], callback?: callback): void;
    set(data: { [key: string]: unknown }, callback?: callback): void;
  };
};
