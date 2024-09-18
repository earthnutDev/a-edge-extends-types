/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName a-edge-extends-types
 * @FileName i18n.ts
 * @CreateDate  周一  09/16/2024
 * @Description i18n 相关逻辑
 ****************************************************************************/
/** #  [支持语种](https://developer.chrome.com/docs/extensions/reference/api/i18n?hl=zh-cn)
 *
 * -  ar	阿拉伯语
 * -  am	阿姆哈拉语
 * -  bg	保加利亚语
 * -  bn	孟加拉语
 * -  ca	加泰罗尼亚语
 * -  cs	捷克语
 * -  da	丹麦语
 * -  de	德语
 * -  el	希腊语
 * -  en	英语
 * -  en_AU	英语（澳大利亚）
 * -  en_GB	英语（英国）
 * -  en-US	英语（美国）
 * -  es	西班牙语
 * -  es_419	西班牙语（拉丁美洲和加勒比地区）
 * -  et	爱沙尼亚语
 * -  fa	波斯语
 * -  fi	芬兰语
 * -  fil	菲律宾语
 * -  fr	法语
 * -  gu	古吉拉特语
 * -  he	希伯来语
 * -  hi	印地语
 * -  hr	克罗地亚语
 * -  hu	匈牙利语
 * -  id	印度尼西亚语
 * -  it	意大利语
 * -  ja	日语
 * -  kn	卡纳达语
 * -  ko	韩语
 * -  lt	立陶宛语
 * -  lv	拉脱维亚语
 * -  ml	马拉雅拉姆语
 * -  mr	马拉地语
 * -  ms	马来语
 * -  nl	荷兰语
 * -  no	挪威语
 * -  pl	波兰语
 * -  pt_BR	葡萄牙语（巴西）
 * -  pt_PT	葡萄牙语（葡萄牙）
 * -  ro	罗马尼亚语
 * -  ru	俄语
 * -  sk	斯洛伐克语
 * -  sl	斯洛文尼亚语
 * -  sr	塞尔维亚语
 * -  sv	瑞典语
 * -  sw	斯瓦希里语
 * -  ta	泰米尔语
 * -  te	泰卢固语
 * -  th	泰语
 * -  tr	土耳其语
 * -  uk	乌克兰语
 * -  vi	越南语
 * -  zh_CN	中文
 */
type CmI18nLanguage =
  | 'ar'
  | 'am'
  | 'bg'
  | 'bn'
  | 'ca'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'en_AU'
  | 'en_GB'
  | 'en-US'
  | 'es'
  | 'es_419'
  | 'et'
  | 'fa'
  | 'fi'
  | 'fil'
  | 'fr'
  | 'gu'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'kn'
  | 'ko'
  | 'lt'
  | 'lv'
  | 'ml'
  | 'mr'
  | 'ms'
  | 'nl'
  | 'no'
  | 'pl'
  | 'pt_BR'
  | 'pt_PT'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sr'
  | 'sv'
  | 'sw'
  | 'ta'
  | 'te'
  | 'th'
  | 'tr'
  | 'uk'
  | 'vi'
  | 'zh_CN';

/** # detectedLanguage 回调函数参数
 * (对象数组)下面是对象的说明：
 *
 *  - isReliable {@link Boolean} CLD 检测到语言的可靠性
 *  - language
 *            - language     {@link CmI18nLanguage}    语种
 *            - percentage   {@link Number}           检测到语言所占的百分比
 *
 */
type detectedLanguageCallbackT = {
  /** CLD 检测到语言的可靠性  */
  isReliable: boolean;
  /** 语言
   *  -  language {@link CmI18nLanguage}  语种
   *  -  percentage  {@link Number}      检测到语言所占的百分比
   *
   */
  language: { language: CmI18nLanguage; percentage: number };
}[];

/** # i18n
 *
 * -  `detectLanguage(text:string,callback: (result: detectedLanguageCallbackT) => undefined):undefined` 检测出 3 种语言
 * -  `getAcceptLanguages(): Promise<CmI18nLanguage[]>` 支持的语言
 * - `getMessage(opt:| '@@extension_id'| '@@ui_locale'| '@@bidi_dir'| 'bidi_reversed_dir'| 'bidi_start_edge'| 'bidi_end_edge'| string,): string` 获取文本
 * - `getUILanguage(): CmI18nLanguage`  获取浏览器默认文本语言
 *
 *  使用：
 *  - 在 manifest 文件中使用，使用 `__MSG_name__` 的形式即可
 *  - 在 css 文件中使用类似于在 manifest 中的使用，既可以是属性，也可以是值中显示
 *  - 在 js 中直接使用 `chrome.i18n.getMessage("name")`
 *
 *
 */
declare namespace chrome.i18n {
  /** 检测出 3 种语言
   *
   * @param text  要翻译的文本
   * @param callback  回调函数
   */
  export function detectLanguage(
    text: string,
    callback: (result: detectedLanguageCallbackT) => undefined,
  ): undefined;
  /** 获取支持的语言 */
  export function getAcceptLanguages(): Promise<CmI18nLanguage[]>;
  /** 获取语言的信息 */
  export function getMessage(
    opt:
      | '@@extension_id'
      | '@@ui_locale'
      | '@@bidi_dir'
      | 'bidi_reversed_dir'
      | 'bidi_start_edge'
      | 'bidi_end_edge'
      | string,
  ): string;
  /** 获取当前浏览器 ui 默认语言设置 */
  export function getUILanguage(): CmI18nLanguage;
}
