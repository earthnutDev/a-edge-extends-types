/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName edge-extends-types
 * @FileName storage.ts
 * @CreateDate  周一  09/11/2024
 * @Description 数据储存
 ****************************************************************************/

export type CmStorageOnChanged = {
  addListener(
    callback: (
      pref: {
        [key: string]: {
          oldValue: unknown;
          newValue: unknown;
        };
      },
      areaName: 'local' | 'sync',
    ) => void,
  ): void;
};
export type CallbackT = (result: { [key: string]: unknown }) => void;

/** # storage
 *
 * - `AccessLevel` 不至知道啥东西
 * - `local` 本地数据储存中心
 * - `managed` 管理员管理开发者设定的储存形式
 * - `onChanged` 当储存数据发生变化
 * - `sync`      云端的数据
 */
export type CmStorage = {
  AccessLevel: {
    TRUSTED_AND_UNTRUSTED_CONTEXTS: 'TRUSTED_AND_UNTRUSTED_CONTEXTS';
    TRUSTED_CONTEXTS: 'TRUSTED_CONTEXTS';
  };
  local: {
    QUOTA_BYTES: number;
    /** ## 清理 */
    clear(): void;
    /** 获取数据 */
    get(keys: string[], callback?: CallbackT): void;
    /** 获取一个或多个占用项的空间量 */
    getBytesInUse(): void;
    /** 获取所有的密钥 */
    generateKeySync(callback?: (keys: string[]) => void): Promise<string[]>;
    onChanged: CmStorageOnChanged;
    /** 移除 */
    remove(list: string[], callback?: CallbackT): void;
    /** 设定值 */
    set(data: { [key: string]: unknown }, callback?: CallbackT): void;
  };
  managed: {
    /** ## 清理 */
    clear(): void;
    /** 获取数据 */
    get(keys: string[], callback?: CallbackT): void;
    /** 获取一个或多个占用项的空间量 */
    getBytesInUse(): void;
    /** 获取所有的密钥 */
    generateKeySync(callback?: (keys: string[]) => void): Promise<string[]>;
    onChanged: CmStorageOnChanged;
    /** 移除 */
    remove(list: string[], callback?: CallbackT): void;
    /** 设定值 */
    set(data: { [key: string]: unknown }, callback?: CallbackT): void;
  };
  /** ## 当触发改变时 */
  onChanged: CmStorageOnChanged;
  /** ## 异步
   *
   */
  sync: {
    MAX_ITEMS: number;
    MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;
    MAX_WRITE_OPERATIONS_PER_HOUR: number;
    MAX_WRITE_OPERATIONS_PER_MINUTE: number;
    QUOTA_BYTES_PER_ITEM: number;
    QUOTA_BYTES: number;
    /** ## 清理 */
    clear(): void;
    /** 获取数据 */
    get(keys: string[], callback?: CallbackT): void;
    /** 获取一个或多个占用项的空间量 */
    getBytesInUse(): void;
    /** 获取所有的密钥 */
    generateKeySync(callback?: (keys: string[]) => void): Promise<string[]>;
    onChanged: CmStorageOnChanged;
    /** 移除 */
    remove(list: string[], callback?: CallbackT): void;
    /** 设定值 */
    set(data: { [key: string]: unknown }, callback?: CallbackT): void;
  };
};
