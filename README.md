# a edge extends types

like title show。
A description of the TS type of an edge extends, just a little bit, only some I used was given

## language

[English](https://github.com/lmssee/edgeExtendsTypes/blob/main/README.md) [中文](https://github.com/lmssee/edgeExtendsTypes/blob/main/自述文件.md)

## install

```sh
npm install --save a-edge-extends-types@latest
```

## use

```ts
import { chrome } from 'a-edge-extends-types';

chrome.runtime.sendMessage({ message: 'nothing', type: 'random' }, response =>
  console.log(response),
);
```

## illustrate

Only a very small part of the list is given at the moment, as shown below：

- action
- runtime
  - sendMessage
  - onMessage
    - addListener
- storage (all)
- tabs
  - tab (all)
  - query
  - sendMessage
