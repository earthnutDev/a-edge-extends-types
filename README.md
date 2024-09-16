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

## Please note the confusion code

If you use the `cleanup` class compression when packing, an error may occur after packing,
You need to add plugins in the rollup packaging configuration as follows :

```js
import {...otherPlugins} from 'other-plugin-package';
import { keepChrome } from 'a-edge-extends-types';

export default {
  ...otherSetting,
  plugins:{
    ...otherPlugins(),
    keepChrome(),
  }
}
```

- Be sure to put the plugin at the end
- It may have an impact on the `source map`, but I don't have time to deal with this issue at the moment. In a hurry to find a job

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
