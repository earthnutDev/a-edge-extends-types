# a edge extends types

**This is not a rollup plugin, but a type package for developing 'edge extend' using ts**

like title show。
A description of the TS type of an [edge extends](), just a little bit, only some I used was given

## Development reference

- [edge extends reference doc](https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/)
- [chrome api reference](https://developer.chrome.com/docs/extensions/reference/api/tts)

## language

[English](https://github.com/lmssee/edgeExtendsTypes/blob/main/README.md) [中文](https://github.com/lmssee/edgeExtendsTypes/blob/main/自述文件.md)

## install

```sh
npm install --save a-edge-extends-types@latest
```

## use

```ts
import { chrome } from 'a-edge-extends-types';

/** `content js` use `chrome.runtime` send message to `background js`  */
chrome.runtime.sendMessage({ message: 'nothing', type: 'random' }, response =>
  console.log(response),
);
```

## illustrate

Only a very small part of the list is given at the moment, as shown below：

- action (none)
- contextMenus
- i18n (all)
- tts (all)
- runtime
  - onload
  - sendMessage
  - onMessage
    - addListener
- storage (all)
- tabs
  - tab (all)
  - query
  - sendMessage
