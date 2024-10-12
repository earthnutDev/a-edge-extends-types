/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName edge-chrome
 * @FileName testEnvironment.ts
 * @CreateDate  周五  10/11/2024
 * @Description 测试当前工作目录的环境
 ****************************************************************************/

import { writeFileSync } from 'node:fs';

/**
 *
 * 测试当前环境，并返回是否允许写文件
 *
 * @returns boolean 返回是否允许写入文件
 */

export function testEnvironment(): string {
  const args = process.argv;
  if (args.length === 2) return '';
  else return '../../';
}
