import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
// import terser from '@rollup/plugin-terser';

import copy from 'rollup-plugin-copy';

/** 生成  npm 文件的打包配置文件 */
export default {
  input: './index.ts',
  output: [
    {
      format: 'es',
      entryFileNames: 'index.js',
      preserveModules: false,
      sourcemap: false,
      exports: 'named',
      dir: 'dist',
    },
  ],
  // 配置需要排除的包
  external: id => /^(node:)|^(tslib)|^(a-js-tools)|^(a-node-tools)/.test(id),
  plugins: [
    resolve(),
    commonjs(),
    // 打包压缩，自动去注释
    // terser(),
    // 可打包 json 内容
    json(),
    typescript({}),
    // 去除无用代码
    copy({
      targets: [
        { src: 'package.json', dest: 'dist' },
        { src: 'README.md', dest: 'dist' },
        { src: 'LICENSE', dest: 'dist' },
      ],
    }),
  ],
};
