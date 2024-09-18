/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName edge-extends-types
 * @FileName storage.ts
 * @CreateDate  周一  09/11/2024
 * @Description 数据储存
 ****************************************************************************/

type CmStorageOnChanged = {
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

type CallbackT = (result: { [key: string]: unknown }) => undefined;

/** # storage
 *
 * - `AccessLevel` 不至知道啥东西
 * - `local` 本地数据储存中心
 * - `managed` 管理员管理开发者设定的储存形式
 * - `onChanged` 当储存数据发生变化
 * - `sync`      云端的数据
 */
declare namespace chrome.storage {
  export const AccessLevel: {
    TRUSTED_AND_UNTRUSTED_CONTEXTS: 'TRUSTED_AND_UNTRUSTED_CONTEXTS';
    TRUSTED_CONTEXTS: 'TRUSTED_CONTEXTS';
  };
  namespace local {
    export const QUOTA_BYTES: number;
    /** ## 清理 */
    export function clear(): undefined;
    /** 获取数据 */
    export function get(keys: string[], callback?: CallbackT): undefined;
    /** 获取一个或多个占用项的空间量 */
    export function getBytesInUse(): undefined;
    /** 获取所有的密钥 */
    export function generateKeySync(
      callback?: (keys: string[]) => undefined,
    ): Promise<string[]>;
    export const onChanged: CmStorageOnChanged;
    /** 移除 */
    export function remove(list: string[], callback?: CallbackT): undefined;
    /** 设定值 */
    export function set(
      data: { [key: string]: unknown },
      callback?: CallbackT,
    ): undefined;
  }
  namespace managed {
    /** ## 清理 */
    export function clear(): undefined;
    /** 获取数据 */
    export function get(keys: string[], callback?: CallbackT): undefined;
    /** 获取一个或多个占用项的空间量 */
    export function getBytesInUse(): undefined;
    /** 获取所有的密钥 */
    export function generateKeySync(
      callback?: (keys: string[]) => undefined,
    ): Promise<string[]>;
    export const onChanged: CmStorageOnChanged;
    /** 移除 */
    export function remove(list: string[], callback?: CallbackT): undefined;
    /** 设定值 */
    export function set(
      data: { [key: string]: unknown },
      callback?: CallbackT,
    ): undefined;
  }
  /** ## 当触发改变时 */
  export const onChanged: CmStorageOnChanged;
  /** ## 异步
   *
   */
  namespace sync {
    export const MAX_ITEMS: number;
    export const MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;
    export const MAX_WRITE_OPERATIONS_PER_HOUR: number;
    export const MAX_WRITE_OPERATIONS_PER_MINUTE: number;
    export const QUOTA_BYTES_PER_ITEM: number;
    export const QUOTA_BYTES: number;
    /** ## 清理 */
    export function clear(): undefined;
    /** 获取数据 */
    export function get(keys: string[], callback?: CallbackT): undefined;
    /** 获取一个或多个占用项的空间量 */
    export function getBytesInUse(): undefined;
    /** 获取所有的密钥 */
    export function generateKeySync(
      callback?: (keys: string[]) => undefined,
    ): Promise<string[]>;
    export const onChanged: CmStorageOnChanged;
    /** 移除 */
    export function remove(list: string[], callback?: CallbackT): undefined;
    /** 设定值 */
    export function set(
      data: { [key: string]: unknown },
      callback?: CallbackT,
    ): undefined;
  }
}
