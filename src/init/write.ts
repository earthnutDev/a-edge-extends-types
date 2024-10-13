/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName edge chrome
 * @FileName write.ts
 * @CreateDate  周五  10/11/2024
 * @Description 写入信息
 ****************************************************************************/

import { writeFile } from 'fs';
import path from 'path';
import { data } from './data';

/** 写入 */
export function write(cwd: string) {
  /// 在测试环境未查找到正确的位置
  if (cwd === 'forbidden') return;

  const fileName = 'a-edge-extension-type.d.ts';

  const time = new Date();

  writeFile(
    path.join(cwd, fileName),
    `/****************************************************************************
* @Author lmssee
* @Email lmssee@outlook.com
* @FileName ${fileName}
* @CreateDate  周${
      ['日', '一', '二', '三', '四', '五', '六'][time.getDay()]
    }  ${time.getMonth()}/${time.getDate()}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}
* @Description 显式向项目添加 ‘chrome’ 的类型
*
* *请注意以下两几点：*
* 
* - If all you want is the chrome type (english version), you can remove this package and install \`@types/chrome\`, use \`npm uninstall a-edge-extends-types && npm install --save-dev @types/chrome\` 
* - 保证安装了 a-edge-extends-types npm 包
* - 请勿向本文件写入其他内容（本文件可能在 install 和 update 时重写该文件，手动添加入文件的内容可能被抹除）
****************************************************************************/


import { Chrome } from 'a-edge-extends-types';

 /**
  *  将 \`chrome \`加入全局
  *  
  *  可使用 \`window.chrome\` 访问
  *   
  *  亦可直接使用 \`chrome\` 直接使用
  * 
 */
declare global {
  interface Window {
  ${data}
    chrome: Chrome;
  }
  
 ${data}
  const chrome: Chrome;
}`,
    'utf-8',
    () => 1,
  );
}
