# a edge extends types

you may be looking for [`@types/chrome`](https://www.npmjs.com/package/@types/chrome)

It's more like a Chinese version [`@types/chrome`](https://www.npmjs.com/package/@types/chrome) just a little bit, only some I used was given

## Development reference

- [edge extends reference doc](https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/)
- [chrome api reference](https://developer.chrome.com/docs/extensions/reference/api/tts)

## language

[English](https://github.com/lmssee/npm-a-edge-extends-types/blob/main/README.md) [中文](https://github.com/lmssee/npm-a-edge-extends-types/blob/main/自述文件.md)

## install

```sh
npm install --save a-edge-extends-types@latest && npx immm
```

## use

must create `chrome.d.ts` file, file context：

```ts
import { Chrome } from 'a-edge-extends-types';

declare global {
  interface Window {
    chrome: Chrome;
  }

  const chrome: Chrome;
}
```

The package automatically rewrites the file when it is installed or updated, if it doesn't you can use `npx immm` create this file，and include in `tsconfig.json`

## illustrate

Only a very small part of the list is given at the moment, as shown below：

- `action` (none)
- `contextMenus`
- `devtools` (all)
- `i18n` (all)
- `tts` (all)
- `runtime`
  - `onload`
  - `sendMessage`
  - `onMessage`
    - `addListener`
- `storage` (all)
- `tabs` (all)

If you have any questions, you can directly [submit feedback](https://github.com/lmssee/npm-a-edge-extends-types/issues/new)
