/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName edge-chrome
 * @FileName pub.js
 * @CreateDate  周五  10/11/2024
 * @Description 发布前后的逻辑
 ****************************************************************************/

import { readFileToJsonSync, writeJsonFile } from 'a-node-tools';

/** 抓取启动参数 */
const args = process.argv;
/** 抓取 packageJson 文件内容 */
const packageJson = readFileToJsonSync('package.json');

const { scripts } = packageJson;
/** 发布前向 package.json 文件添加内容 */
if (args[2] === '-pre') {
  scripts.postinstall = scripts.postupdate = 'npm run init';
  scripts.preuninstall = 'npx ixxx rm ../../a-edge-extends-types.d.ts';
} else if (args[2] === '-post') {
  /// 在发布后移除前面添加的内容
  ['postinstall', 'postupdate', 'preuninstall'].map(ele => delete scripts[ele]);
}

writeJsonFile('package.json', packageJson);
