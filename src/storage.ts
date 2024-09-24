/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName edge-extends-types
 * @FileName storage.ts
 * @CreateDate  周一  09/11/2024
 * @Description 数据储存
 ****************************************************************************/
/** # 存储区域的访问权限级别
 *
 * - `TRUSTED_CONTEXTS` 指定源自扩展程序本身的上下文
 * - `TRUSTED_AND_UNTRUSTED_CONTEXTS` 指定源自扩展程序外部的上下文
 *
 */
export type AccessLevel = 'TRUSTED_CONTEXTS' | 'TRUSTED_AND_UNTRUSTED_CONTEXTS';

/** 在一项或多项内容发生更改时触发  */
export type StorageArea = {
  onChanged: {
    addListener(callback: (changes: object) => void): unknown;
  };
  clear(): void;
  /** 获取数据 */
  get(
    keys: string | string[] | object,
    callback?: (items: object) => void,
  ): Promise<void>;
  /** 获取一个或多个占用项的空间量 */
  getBytesInUse(
    keys?: string | string[],
    callback?: (bytesInUse: number) => void,
  ): Promise<number>;
  /** 获取键值 */
  getKeys(callback?: (keys: string[]) => void): Promise<string[]>;
  /** 移除 */
  remove(keys: string | string[], callback?: CallbackT): Promise<void>;
  /** 设定值 */
  set(items: object, callback?: CallbackT): Promise<void>;
  /** 为存储区域设置所需的访问权限级别
   *
   * 默认为仅限可信上下文 */
  setAccessLevel(
    accessOptions: { accessLevel: AccessLevel },
    callback?: () => void,
  ): Promise<void>;
};
/**  */
export type StorageChange = {
  newValue: unknown;
  oldValue: unknown;
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
  /** 存储在本地的数据 */
  local: StorageArea & {
    /** 储存的最大数据量 */
    QUOTA_BYTES: 10485760;
  };
  /**
   *  managed 存储区域中的内容由网域管理员配置的企业政策设置，对扩展程序而言是只读的
   *
   * 尝试修改此命名空间会导致错误 */
  managed: StorageArea;
  /** session 存储区域中的内容存储在内存中，不会持久保留在磁盘中 */
  session: StorageArea & {
    /** 储存的最大数据量 */
    QUOTA_BYTES: 10485760;
  };
  /** ## 异步
   *
   */
  sync: StorageArea & {
    /** 同步存储空间中可存储的内容数量上限。
     *
     * 在使用回调或 Promise 被拒绝时
     *
     * 会导致超出此限制的更新将立即失败
     *
     * 并设置 runtime.lastError  */
    MAX_ITEMS: 512;
    /**  ~~storage.sync API 不再有持续写入操作配额。~~ */
    MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: 1000000;
    /** 每小时可执行的 set、remove 或 clear 操作次数上限
     *
     * 此值为每 2 秒 1 次，该上限比短期内的每分钟写入次数上限更低 */
    MAX_WRITE_OPERATIONS_PER_HOUR: 1800;
    /** 每分钟可执行的 set、remove 或 clear 操作数量上限
     *
     * 即每秒 2 次，在较短的时间内提供的吞吐量高于每小时写入次数 */
    MAX_WRITE_OPERATIONS_PER_MINUTE: 120;
    /** 同步存储空间中每一项的最大大小（以字节为单位）
     *
     * 测量方式是将相应内容的值加其键长度的 JSON 字符串化
     *
     * 当使用回调或 Promise 被拒绝时
     *
     * 包含超过此限制的项的更新将立即失败
     *
     * 并设置 runtime.lastError */
    QUOTA_BYTES_PER_ITEM: 8192;
    /** 同步存储空间中可存储的数据总量（字节）
     *
     * 通过对每个值加上每个键的长度进行 JSON 字符串化来衡量
     *
     * 在使用回调或 Promise 被拒绝时
     *
     * 会导致超出此限制的更新会立即失败
     *
     * 并设置 runtime.lastError  */
    QUOTA_BYTES: 102400;
  };
  /** ## 当触发改变时 */
  onChanged: {
    addListener(callback: (changes: object, areaName: string) => void): void;
  };
};
