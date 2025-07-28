# 一个 edge 扩展的 chrome 的类型

着更像是一个中文版的 [@types/chrome](https://www.npmjs.com/package/@types/chrome)，仅一点点，只有我用到的给出了

## 开发手册

- [edge 扩展手册](https://learn.microsoft.com/zh-cn/microsoft-edge/extensions-chromium/)
- [chrome 扩展手册 api](https://developer.chrome.com/docs/extensions/reference/api/tts?hl=zh-cn).

## 安装

使用 `npm` 进行安装

```sh
npm install --save a-edge-extends-types@latest
```

## 使用

需在项目的根目录添加 `chrome.d.ts` 文件，文件内容：

```ts
import { Chrome } from 'a-edge-extends-types';

declare global {
  interface Window {
    chrome: Chrome;
  }

  const chrome: Chrome;
}
```

包会在安装或是更新时自动写入该文件，若没有。则需要使用 `npx immm` 创建该文件，并保证 `tsconfig.json` 能正确的识别到该文件即可

## 说明

当前仅给出了特别少的一部分，如下列表：

- `action` （啥也没有）
- `i18n` (全部)
- `contextMenus` (貌似全部)
- `devtools` (all)
- `tts` （全部）
- `runtime`
  - `onload`
  - `sendMessage`
  - `onMessage`
    - `addListener`
- `storage` (全部)
- `tabs` （全部）

## 文档地址

[earthnut.dev](https://earthnut.dev/npm/edge-chrome)
