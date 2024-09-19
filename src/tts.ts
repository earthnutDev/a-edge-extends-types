/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName a-edge-extends-types
 * @FileName tts.ts
 * @CreateDate  周一  09/16/2024
 * @Description `tts` 语音设定
 ****************************************************************************/
import { CmI18nLanguage } from './i18n';

/** # tts 第二参数配置项
 * - enqueue {@link Boolean} 排队还是插队。`true` 则排队，`false` 则插队
 * - extensionId {@link String} 该插件的 id
 * - desiredEventTypes  {@link string[]} 侦听的 TTS 事件类型。缺省为所有事件类型
 * - gender   "male"|"female"    语音的性别
 * - rate {@link Number} 语速
 * - lang {@link CmI18nLanguage} 语言设定
 * - onEvent(event:(类型见下)=>undefined):undefined 可执行事件
 *      - type 下面是 event.type 的属性。其中，'end'、'interrupted'、'cancelled'、'error' 事件类型为终结
 *          - start        引擎已经开始读出语音
 *          - word         以达到单词的边界
 *          - sentence     以达到句子的边界
 *          - end          已经完成
 *          - interrupted  语音被另一个语音中断
 *          - cancelled    语音已加入列队
 *          - error        语音发声错误
 *      -  charIndex    发生错误的字符位置
 *      - errorMessage  错误消息
 * - pitch 音调，介于 0～2 之间的浮点数
 * - requiredEventTypes 语音必须支持的事件类型。字符串数组
 * - voiceName  合成语音的声部的名称，如果为空，则为任何可用语音
 * - volume     音量
 */
export type CmTtsSpeakOptions = {
  /** 若是 `true`,则排队；若为 `false` ，则插队  */
  enqueue?: boolean;
  /** 该插件的 id */
  extensionId: string;
  /** 侦听的 TTS 事件类型。缺省为所有事件类型  */
  desiredEventTypes?: string[];
  /** 语音性别 */
  gender: 'male' | 'female';
  /** 语速 {@link Number} */
  rate?: number;
  /***  语种类型 {@link CmI18nLanguage} */
  lang?: CmI18nLanguage;
  /** 事件，一个事件触发的回调
   *      - type 下面是 event.type 的属性。其中，'end'、'interrupted'、'cancelled'、'error' 事件类型为终结
   *          - start        引擎已经开始读出语音
   *          - word         以达到单词的边界
   *          - sentence     以达到句子的边界
   *          - end          已经完成
   *          - interrupted  语音被另一个语音中断
   *          - cancelled    语音已加入列队
   *          - error        语音发声错误
   *      -  charIndex    发生错误的字符位置
   *      - errorMessage  错误消息
   */
  onEvent?: (event: {
    /** 事件类型 */
    type:
      | 'start'
      | 'word'
      | 'sentence'
      | 'marker'
      | 'end'
      | 'interrupted'
      | 'cancelled'
      | 'error';
    /** 字符位置 */
    charIndex: number;
    /** 错误信息 */
    errorMessage: string;
  }) => undefined;
  /** 音调，介于 0～2 之间 */
  pitch: number;
  /** 语音必须支持的事件类型 */
  requiredEventTypes: string[];
  /** 合成语音的声部的名称，如果为空，则为任何可用语音 */
  voiceName: string;
  /** 音量。介于 0～1 之间的浮点数 */
  volume: number;
};

/** ## 选择语音的回调参数属性
 *  - voiceName       {@link String} 语音名称
 *  - lang            {@link String} 所属语种
 *  - extensionId     {@link String} 所属插件
 *  - eventTypes                     事件类型
 *  - charIndex                      字符位置
 *  - length                         长度
 *  - gender    "male"|"female"      语音所属性别
 *  - remote          {@link Boolean} 是否加载远程语音
 */
export type CmTtsVoice = {
  /** 语音名称 */
  voiceName: string;
  /** 所属语种 */
  lang: string;
  /** 所属插件 */
  extensionId: string;
  /** 所属事件 */
  eventTypes:
    | 'start'
    | 'end'
    | 'word'
    | 'sentence'
    | 'marker'
    | 'interrupted'
    | 'cancelled'
    | 'error'
    | 'pause'
    | 'resume';
  /** 语音所属性别 */
  gender?: 'male' | 'female';
  /** 是否加载远程语音 */
  remote: boolean;
}[];

/** #  tts 语言配置
 * - `speak(str:string,options?:CmTtsSpeakOptions,callback:()=>undefined):undefined` 开始
 * - `stop():undefined;` 停止
 * - `getVoices(callback: (voice: CmTtsVoice) => undefined): undefined`  获取可用语音
 * - `isSpeaking(callback:(speaking:boolean)=>undefined):Promise<boolean>` 当前是否在播放
 * - `pause():undefined` 暂停语音
 * - `resume():undefined` 从暂停中恢复
 * -  `onVoiceChanged`  当语音发生变化
 */
export type CmTts = {
  /**  开始说话
   *
   * @param  str {@link String} 说话的文本
   * @param options {@link CmTtsSpeakOptions} 配置的参数
   * @param callback  可选的回调函数，使用可在回调中访问 error 设定
   */
  speak(
    str: string,
    options?: CmTtsSpeakOptions,
    callback?: () => undefined,
  ): undefined;

  /** ## 停止讲话 */
  stop(): undefined;

  /** ## 获取所有可用的语音数组
   *  @param callback  回调函数
   */
  getVoices(callback: (voice: CmTtsVoice) => undefined): undefined;

  /** ## 当前是否已在播放中
   *  @param callback  回调函数，接受一个布尔值参数，无返回值
   *  @returns Promise<boolean>
   */
  isSpeaking(callback: (speaking: boolean) => undefined): Promise<boolean>;
  /** ## 暂停
   *
   */
  pause(): undefined;

  /** ## 从暂停中恢复 */
  resume(): undefined;

  /** ## 当语音发生变化 */
  onVoicedChanged: {
    addListener(callback: () => undefined): undefined;
  };
};
