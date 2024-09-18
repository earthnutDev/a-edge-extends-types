/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName edge-extends-types
 * @FileName index.ts
 * @CreateDate  周一  09/16/2024
 * @Description en
 ****************************************************************************/
/** # Chrome
 *  他下面有很多，但是我用到的并不多
 *  - action
 *  - storage
 *  - tabs
 *  - i18n
 *  - tts
 *  - runtime
 *  - contextMenus
 */
declare namespace chrome {
  /**
   *  空白的会导致其出现问题
   *
   */
  namespace action {
    export const DEBUG: boolean;
  }
}
