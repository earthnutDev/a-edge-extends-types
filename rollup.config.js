import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/init/index.ts',
  output: {
    format: 'es',
    entryFileNames: '[name].mjs',
    preserveModules: true,
    sourcemap: false,
    exports: 'named',
    dir: 'dist/init',
  },
  // 配置需要排除的包
  external: id => /^(node:)|^(tslib)/.test(id),
  plugins: [resolve(), commonjs(), typescript({})],
};
