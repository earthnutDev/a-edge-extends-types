import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default {
  input: './src/init/index.ts',
  output: {
    format: 'es',
    entryFileNames: '[name].mjs',
    preserveModules: false,
    sourcemap: false,
    exports: 'named',
    dir: 'dist/',
  },
  // 配置需要排除的包
  external: id => /^(node:)|^(tslib)/.test(id),
  plugins: [
    resolve(),
    commonjs(),
    typescript({}),
    copy({
      targets: [
        {
          src: 'README.md',
          dest: 'dist',
        },
        {
          src: 'LICENSE',
          dest: 'dist',
        },
      ],
    }),
  ],
};
