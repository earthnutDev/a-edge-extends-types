import {
  getDirectoryBy,
  pathJoin,
  readFileToJsonSync,
  writeJsonFile,
} from 'a-node-tools';
let packageJson = readFileToJsonSync('./package.json');

['scripts', 'devDependencies', 'lint-staged', 'private'].forEach(
  e => delete packageJson[e],
);

packageJson = {
  ...packageJson,
  types: 'index.d.ts',
  files: ['index.mjs', 'index.d.ts', 'src'],
  exports: {
    '.': './index.d.ts',
    './tab': './src/tabs.d.ts',
    './devtools': './src/devtools.d.ts',
    './i18n': './src/i18n.d.ts',
    './action': './src/action.d.ts',
    './runtime': './src/runtime.d.ts',
    './extensionTypes': './src/extensionTypes.d.ts',
    './storage': './src/storage.d.ts',
    './contextMenus': './src/contextMenus.d.ts',
    './tts': './src/tts.d.ts',
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/earthnutDev/a-edge-extends-types.git',
  },
  keywords: ['a-edge-extends-types', 'earthnut'],
  author: {
    name: '花生亻',
    email: 'earthnut.dev@outlook.com',
    url: 'https://earthnut.dev/about',
  },
  homepage: 'https://earthnut.dev/npm/a-edge-extends-types',
  bugs: {
    url: 'https://github.com/earthnutDev/a-edge-extends-types/issues',
    email: 'earthnut.dev@outlook.com',
  },
  publishConfig: {
    access: 'public',
    registry: 'https://registry.npmjs.org/',
  },
  engines: {
    // globalThis 支持的最低版本的 node 为 12
    node: '>=15.0.0',
  },
  browserslist: ['last 2 versions not ie <= 11'],
  scripts: {
    init: 'node ./index.mjs',
    postinstall: 'npm run init',
    postupdate: 'npm run init',
    preuninstall: 'jja rm "../../a-edge-extension-type.d.ts"',
  },
};

packageJson.bin = Object.fromEntries([[packageJson.name, 'index.mjs']]);

{
  const distPath = getDirectoryBy('dist', 'directory');

  const distPackagePath = pathJoin(distPath, './dist/package.json');

  writeJsonFile(distPackagePath, packageJson);
}
