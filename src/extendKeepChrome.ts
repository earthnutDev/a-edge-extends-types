/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName a-edge-extends-types
 * @FileName extendKeepChrome.ts
 * @CreateDate  周日  09/15/2024
 * @Description 保留 chrome ，让其残留在 rollup 打包中
 ****************************************************************************/

/**  # 压缩保留 chrome
 *
 * 仅支持 rollup 使用 cleanup 类型（别的支不支持我不知道，因为我没用到，主打一个方便自己）打包压缩
 *
 * @param options 可输入参数，当仅传入 boolean 值时，认定为是否开启该插件
 *    -  open {@link Boolean} 是否开启插件。缺省为 true
 */
export function keepChrome(
  options?:
    | { [x: string]: string | boolean | number | (string | boolean | number)[] }
    | boolean,
) {
  return {
    name: 'a-edge-extends-types',
    version: '0.0.1',
    generateBundle(
      options: unknown,
      bundle: { [x: string]: OutputChunk },
      isWrite: boolean,
    ): void {
      for (const key in bundle) {
        if (Object.prototype.hasOwnProperty.call(bundle, key)) {
          const element = bundle[key];
          const code = element.code;
          element.code = code.replace(
            /\/\/\s*@preserve something will come if you use rollup cleanup\s*\nvar\s*([a-z]*?)=\{\.*.\}/gm,
            'var $1 = chrome',
          );
        }
      }
    },
  };
}

interface OutputChunk {
  code: string;
  dynamicImports: string[];
  exports: string[];
  facadeModuleId: string | null;
  fileName: string;
  implicitlyLoadedBefore: string[];
  imports: string[];
  importedBindings: { [imported: string]: string[] };
  isDynamicEntry: boolean;
  isEntry: boolean;
  isImplicitEntry: boolean;
  map: null;
  modules: {
    [id: string]: {
      renderedExports: string[];
      removedExports: string[];
      renderedLength: number;
      originalLength: number;
      code: string | null;
    };
  };
  moduleIds: string[];
  name: string;
  preliminaryFileName: string;
  referencedFiles: string[];
  sourcemapFileName: string | null;
  type: 'chunk';
}
